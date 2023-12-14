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
from .models import Doctor
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
            specialID=''
            # 根据openid确定用户的本地身份
            try:
                user = User.objects.get(Openid=openid)
                theRole = user.role
                if theRole == 'patient':
                    patient=Patient.objects.get(Openid=openid)
                    specialID=patient.Patient_id
                elif theRole == 'guardian':
                    guardian=Guardian.objects.get(Openid=openid)
                    specialID=guardian.Guardian_id
                elif theRole == 'doctor':
                    doctor=Doctor.objects.get(Openid=openid)
                    specialID=doctor.Doctor_id
            except:
                theRole = "newUser"
                User.objects.create(
                    Openid=openid,
                    password=openid,
                    session=session_key,
                    role=theRole
                )
            #新创建的用户返回的specialid为空字符串
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "session": session_key,
                    "openid": openid,
                    "role": theRole,
                    "specialid": specialID,
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
            theID=""
            if theRole == 'patient':
                globalVariables.Patient_amount+=1
                globalVariables.save()
                theID=str(globalVariables.Patient_amount)
                Patient.objects.create(
                    Openid=openid,
                    password=openid,
                    session=session_key,
                    Patient_id=theID,
                )   
            elif theRole == 'guardian':
                globalVariables.Guardian_amount+=1
                globalVariables.save()
                theID=str(globalVariables.Guardian_amount)
                Guardian.objects.create(
                    Openid=openid,
                    password=openid,
                    session=session_key,
                    Guardian_id=theID,
                )
            elif theRole == 'doctor':
                globalVariables.Doctor_amount+=1
                globalVariables.save()
                theID=str(globalVariables.Doctor_amount)
                Doctor.objects.create(
                    Openid=openid,
                    password=openid,
                    session=session_key,
                    Doctor_id=theID,
                )
            print("保存")
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "role": theRole,
                    "openid": openid,
                    "specialid": theID,
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
                    "session": patient.session,
                    "Guardian_id": patient.Guardian_id,
                    "Patient_id":patient.Patient_id,
                    "Status": patient.Status,
                    "Name": patient.Name,
                    "Address": patient.Address,
                    "Phone_contact": patient.Phone_contact,
                    "Medicine": patient.Medicine,
                    "Memoir":patient.Memoir,
                    "Healthdata":patient.Healthdata,
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
        
class GetGuardianInfo(APIView):
    def post(self, request, format=None):
        """
        通过openid获取该监护人的信息
        """
        # 该用户的openid，用于识别该用户
        openid = json.loads(request.body).get('openid')
        try:
            guardian = Guardian.objects.get(Openid=openid)
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "openid": openid,
                    "session": guardian.session,
                    "Guardian_id": guardian.Guardian_id,
                    "Patient_id":guardian.Patient_id,
                    "Doctor_id": guardian.Doctor_id,
                    "Status":guardian.Status,
                    "Reservation":guardian.Reservation,
                }
            })
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该监护人不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })

class getDoctorInfo(APIView):
    def post(self, request, format=None):
        """
        通过openid获取该医生的信息
        """
        # 该用户的openid，用于识别该用户
        openid = json.loads(request.body).get('openid')
        try:
            doctor = Doctor.objects.get(Openid=openid)
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "openid": openid,
                    "session": doctor.session,
                    "Doctor_id": doctor.Doctor_id,
                    "Guardian_id_list":doctor.Guardian_id_list,
                    "Doctor_info":doctor.Doctor_info,
                    "Reservation":doctor.Reservation,
                    "Reservation_info":doctor.Reservation_info,
                }
            })
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该医生不存在',
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
            patient.Guardian_id = guardian.Guardian_id
            patient.save()
            guardian.save()
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "openid": openid,
                    "patientid": guardian.Patient_id,
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

class SendHealthdata(APIView):
    def post(self, request, format=None):
        """
        监护人发送的健康数据
        """
        # 监护人的openid
        openid = json.loads(request.body).get('openid')
        healthdata = json.loads(request.body).get('healthdata')
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
        patient = Patient.objects.get(Patient_id=patient_id)
        patient.Healthdata = healthdata
        patient.save()
        return Response({
            "msg": 'success', 
            "openid": openid,
            'healthdata':healthdata,
        })

class SendMemoir(APIView):
    def post(self, request, format=None):
        """
        患者发送的备忘录数据
        """
        # 患者的openid
        openid = json.loads(request.body).get('openid')
        memoir = json.loads(request.body).get('memoir')
        try:
            patient = Patient.objects.get(Openid=openid)
            patient.Memoir = memoir
            patient.save()
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该患者不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        return Response({
            "msg": 'success', 
            "openid": openid,
            'memoir':memoir,
        })
    
class SendReminder(APIView):
    def post(self, request, format=None):
        """
        监护人发送的服药提醒
        """
        # 监护人的openid
        openid = json.loads(request.body).get('openid')
        reminder = json.loads(request.body).get('reminder')
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
            patient.Medicine = reminder
            patient.save()
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该监护人不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
        return Response({
            "msg": 'success', 
            "openid": openid,
            'reminder':reminder,
        })
#服药提醒
#通过特殊的openid向指定订阅人发送消息
#到时间程序才会执行