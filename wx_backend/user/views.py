from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import requests
import json
from .models import User
from .models import Patient
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
        # 从请求中获得用户选择的身份
        theRole = json.loads(request.body).get('role')
        # 该用户的openid，用于识别该用户
        openid = json.loads(request.body).get('openid')
        try:
            user = User.objects.get(Openid=openid)
            user.role = theRole
            user.save()
            session_key=user.session
            if theRole == 'patient':
                Patient.objects.create(
                    Openid=openid,
                    password=openid,
                    session=session_key,
                )
            print("保存")
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "role": theRole,
                    "openid": openid
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
                    "Guardian_Openid": patient.Guardian_Openid,
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
