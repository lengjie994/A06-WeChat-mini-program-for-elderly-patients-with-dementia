from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import requests
import json
from .models import GlobalVariables
from .models import User
from .models import Patient
from .models import Guardian
from wx_backend.LogicManage.Constants import Constants


class WeixinLogin(APIView):
    def post(self, request, format=None):
        """
        用户登录
        """
        # 从请求中获得code
        code = json.loads(request.body).get('code')

        # 填写你的测试号密钥
        appid = 'wx2535e2c919c58832'
        appsecret = '3a6e697feadee759db26c7fa033c8dc6'

        # 微信接口服务地址
        base_url = 'https://api.weixin.qq.com/sns/jscode2session'
        # 微信接口服务的带参数的地址
        url = base_url + "?appid=" + appid + "&secret=" + appsecret + "&js_code=" + code + "&grant_type=authorization_code"
        response = requests.get(url)

        # 处理获取的 openid
        try:
            openid = response.json()['openid']
            session_key = response.json()['session_key']
        except KeyError:
            return Response({
                "status_code": 400,
                'code': {
                    "msg": 'false', 
                    "reason":'网络繁忙，访问微信失败！！',
                    'errid': Constants.ERROR_CODE_NETWORK_ERROR,
                }
            })
        else:
            theRole=''
            # 打印到后端命令行
            #print(openid, session_key)
            # 根据openid确定用户的本地身份
            try:
                user = User.objects.get(Openid=openid)
                theRole = user.role
            except:
                theRole = "newUser"
                User.objects.create(
                    Openid=openid,
                    password=openid,
                    session=session_key,
                    role=theRole
                )
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "session": session_key,
                    "openid": openid,
                    "role": theRole,
                 }
            })
        
class ChooseRole(APIView):
    def post(self, request, format=None):
        """
        用户选择身份
        """
        print("选择身份")
        count = GlobalVariables.objects.count()
        globalVariables=None
        if count == 0:
            globalVariables=GlobalVariables.objects.create()
        elif count == 1:
            globalVariables=GlobalVariables.objects.first()
        # 从请求中获得用户选择的身份
        theRole = json.loads(request.body).get('role')
        # 该用户的openid，用于识别该用户
        openid = json.loads(request.body).get('openid')
        try:
            user = User.objects.get(Openid=openid)
            user.role = theRole
            user.save()
            session_key=user.session
            theID=0
            if theRole == 'patient':
                globalVariables.Patient_amount+=1
                theID=globalVariables.Patient_amount
                Patient.objects.create(
                    Openid=openid,
                    password=openid,
                    session=session_key,
                    Patient_id=globalVariables.Patient_amount,
                )
            elif theRole == 'guardian':
                globalVariables.Guardian_amount+=1
                theID=globalVariables.Guardian_amount
                Guardian.objects.create(
                    Openid=openid,
                    password=openid,
                    session=session_key,
                    Guardian_id=globalVariables.Guardian_amount,
                )
            print("保存")
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "role": theRole,
                    "openid": openid
                    "specialid": theID
                }
            })
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该用户不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        
class GetPatientInfo(APIView):
    def post(self, request, format=None):
        """
        通过openid获取该病人的信息
        """
        print("获取病人信息")
        # 该用户的openid，用于识别该用户
        openid = json.loads(request.body).get('openid')
        try:
            patient = Patient.objects.get(Openid=openid)
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "openid": openid,
                    "Guardian_id": patient.Guardian_id,
                    "Patient_id":patient.Patient_id,
                    "Status": patient.Status,
                    "Name": patient.Name,
                    "Address": patient.Address,
                    "Phone_contact": patient.Phone_contact,
                    "Medicine_name": patient.Medicine_name,
                    "Medicine_time": patient.Medicine_time,
                    "Medicine_usage": patient.Medicine_usage,
                    "Medicine_status": patient.Medicine_status,
                }
            })
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该用户不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        
class ModifyMemorial(APIView):
    def post(self, request, format=None):
        """
        监护人修改备忘录
        """
        print("监护人修改备忘录")
        # 监护人的openid，根据这个查找绑定的患者
        openid = json.loads(request.body).get('openid')
        name = json.loads(request.body).get('name')
        address = json.loads(request.body).get('place')
        phone = json.loads(request.body).get('phone')
        try:
            guardian = Guardian.objects.get(Openid=openid)
            patient_id = guardian.Patient_id
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该监护人不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        
        try:
            #patient = Patient.objects.get(Openid=openid)
            patient = Patient.objects.get(Patient_id=patient_id)
            patient.Name = name
            patient.Address = address
            patient.Phone_contact = phone
            patient.save()
            print("保存")
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "openid": openid
                }
            })
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该患者不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })

class GuardianToPatient(APIView):
    def post(self, request, format=None):
        """
        监护人发送患者的特殊id与患者进行绑定
        """
        # 监护人的openid，根据这个查找绑定的患者
        openid = json.loads(request.body).get('openid')
        patient_id = json.loads(request.body).get('patient_id')
        try:
            guardian = Guardian.objects.get(Openid=openid)
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该监护人不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        try:
            #patient = Patient.objects.get(Openid=openid)
            patient = Patient.objects.get(Patient_id=patient_id)
            guardian.Patient_id = patient.Patient_id
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该患者不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })

class SendHealthdata(APIView):
    def post(self, request, format=None):
        """
        监护人发送的健康数据
        """
        # 监护人的openid
        openid = json.loads(request.body).get('openid')
        try:
            guardian = Guardian.objects.get(Openid=openid)
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该监护人不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        healthdata = json.loads(request.body).get('healthdata')
        return Response({
            'healthdata':healthdata,
        })

class SendMemoir(APIView):
    def post(self, request, format=None):
        """
        患者发送的备忘录数据
        """
        # 患者的openid
        openid = json.loads(request.body).get('openid')
        try:
            patient = Patient.objects.get(Openid=openid)
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该患者不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        memoir = json.loads(request.body).get('memoir')
        return Response({
            'memoir':memoir,
        })
    
class SendReminder(APIView):
    def post(self, request, format=None):
        """
        监护人发送的服药提醒
        """
        # 监护人的openid
        openid = json.loads(request.body).get('openid')
        try:
            guardian = Guardian.objects.get(Openid=openid)
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该监护人不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        reminder = json.loads(request.body).get('reminder')
        return Response({
            'reminder':reminder,
        })
#服药提醒
#通过特殊的openid向指定订阅人发送消息
#到时间程序才会执行
