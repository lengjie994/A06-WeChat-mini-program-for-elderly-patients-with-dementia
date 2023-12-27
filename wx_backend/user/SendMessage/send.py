import requests
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import requests
import json
from wx_backend.LogicManage.Constants import Constants
import schedule
import time
import requests
from wxpusher import WxPusher
from ..models import GlobalVariables
from ..models import User
from ..models import Patient
from ..models import Guardian
from ..models import Doctor
 
"""
    感觉是测试号配置页面的bug，开发者第一次登录进测试号时生产的
    appsecret是临时的，刷新页面就会得到一个新的appsecret，
    用这个appsecret就可以
"""
    
class SendMessage():                                                 #定义发送消息的类
    def __init__(self):                                              
        self.app_token = 'AT_7P2P17zb8MBjxaqYgR2M6zGwoglHHD1N'
        
        
    def sendmsg(self,uid,msg):  
        """利用 wxpusher 的 web api 发送 json 数据包，实现微信信息的发送"""
        webapi = 'http://wxpusher.zjiecode.com/api/send/message'
        data = {
            "appToken":self.app_token,
            "content":msg,
            "summary":msg[:99], # 该参数可选，默认为 msg 的前10个字符
            "contentType":1,
            "uids":[ uid, ],
            }
        result = requests.post(url=webapi,json=data)
        return result.text


class SendOfficialReminder(APIView):
    def post(self, request, format=None):
        """
        向指定用户发送公众号提醒
        """
        # 监护人的openid
        openid = json.loads(request.body).get('openid')
        setTime = json.loads(request.body).get('time')  #setTime为字符串格式，如'20:00'
        medicineName = json.loads(request.body).get('medicineName')
        count = json.loads(request.body).get('count')
        uid=''
        try:
            guardian = Guardian.objects.get(Openid=openid)
            patientID=guardian.Patient_id
            if patientID == 'UNDEFINED':
                return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'未绑定患者',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
            patient = Patient.objects.get(Patient_id=patientID)
            uid=patient.Uid
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该监护人不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        specialTag = str(openid) + str(medicineName)
        msg = str(medicineName)+'，'+str(count)
        def job():
        # 创建 SendOfficialReminder 实例
            sends = SendMessage()
            sends.sendmsg(uid,msg)
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "time": setTime,
                }
            })

        # 设置定时任务，每天的特定时间发送消息
        schedule.every().day.at(setTime).do(job).tag(specialTag)

        # 无限循环来执行定时任务
        while True:
            schedule.run_pending()
            time.sleep(1)
        # url接口被多次调用会如何

class DeleteOneReminder(APIView):
    def post(self, request, format=None):
        """
        清除指定tag的公众号提醒
        """
        specialTag = json.loads(request.body).get('specialTag')
        schedule.clear(specialTag)
        return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                }
            })


class ClearAllReminder(APIView):
    def post(self, request, format=None):
        """
        清除所有的公众号提醒
        """
        schedule.clear()
        return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                }
            })