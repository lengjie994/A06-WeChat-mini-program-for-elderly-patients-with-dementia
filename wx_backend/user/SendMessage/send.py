import requests
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import requests
import json
from ..models import GlobalVariables
from ..models import User
from ..models import Patient
from ..models import Guardian
from wx_backend.LogicManage.Constants import Constants
import schedule
import time
 
"""
    感觉是测试号配置页面的bug，开发者第一次登录进测试号时生产的
    appsecret是临时的，刷新页面就会得到一个新的appsecret，
    用这个appsecret就可以
"""
    
class SendMessage():                                                 #定义发送消息的类
    def __init__(self):                                              
        self.appID = 'wxba3d28916db02547'                             #appid 注册时有
        self.appsecret = '79ed2f11e30550f9b374349bf85f2701'           #appsecret 同上
        self.template_id = 'k2PTMJbegwWyT9xZqGf8AMQC31Bt-LBWnchYqepVjrU'  # 模板id
        self.access_token = self.get_access_token()                   #获取 access token
        self.opend_ids = self.get_openid()                            #获取关注用户的openid
        
   
    def get_access_token(self):
        """
        获取access_token
        通过查阅微信公众号的开发说明就清晰明了了
        """
        url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={}&secret={}'.\
            format(self.appID, self.appsecret)
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36'
        }
        response = requests.get(url, headers=headers).json()
        print(response)
        access_token = response.get('access_token')
        return access_token
 
    def get_openid(self):
        """
        获取所有用户的openid
        微信公众号开发文档中可以查阅获取openid的方法
        """
        next_openid = ''
        url_openid = 'https://api.weixin.qq.com/cgi-bin/user/get?access_token=%s&next_openid=%s' % (self.access_token, next_openid)
        ans = requests.get(url_openid)
        open_ids = json.loads(ans.content)['data']['openid']
        return open_ids
 
    def sendmsg(self,openid):  
        """
        给指定用户发送消息
        """
        url = "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token={}".format(self.access_token)

        #time = datetime.datetime.now()
        if self.opend_ids != '':
            for open_id in self.opend_ids:
                if open_id == openid:
                    body = {
                            "touser": open_id,
                            "template_id": self.template_id,
                            "url": "https://www.baidu.com/",  #点击后链接的地址
                            "topcolor": "#FF0000",
                            #对应模板中的数据模板
                            "data": {
                            }
                        }
                    data = bytes(json.dumps(body, ensure_ascii=False).encode('utf-8'))  #将数据编码json并转换为bytes型
                    response = requests.post(url, data=data)                    
                    result = response.json()                                            #将返回信息json解码
                    print(result)                                                       # 根据response查看是否广播成功
        else:
            print("当前没有用户关注该公众号！")


class SendOfficialReminder(APIView):
    def post(self, request, format=None):
        """
        向指定用户发送公众号提醒
        """
        # 指定用户的openid
        openid = json.loads(request.body).get('openid')
        setTime = json.loads(request.body).get('time')  #setTime为字符串格式，如'20:00'
        def job():
        # 创建 SendOfficialReminder 实例
            sends = SendMessage()
            sends.sendmsg(openid)
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "time": setTime,
                }
            })

        # 设置定时任务，每天的特定时间发送消息
        schedule.every().day.at(setTime).do(job)  

        # 无限循环来执行定时任务
        while True:
            schedule.run_pending()
            time.sleep(1)
        # url接口被多次调用会如何