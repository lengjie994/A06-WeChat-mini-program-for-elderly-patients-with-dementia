from django.shortcuts import render

# Create your views here.
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

class GuardianGetID(APIView):
    def post(self, request, format=None):
        """
        根据监护人openid获取患者特殊id
        """
        # 监护人的openid
        openid = json.loads(request.body).get('openid')
        try:
            guardian = Guardian.objects.get(Openid=openid)
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "patientid": guardian.Patient_id,
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
        
class PatientGetID(APIView):
    def post(self, request, format=None):
        """
        根据患者openid获取监护人特殊id
        """
        # 患者的openid
        openid = json.loads(request.body).get('openid')
        try:
            patient = Patient.objects.get(Openid=openid)
            return Response({
                "status_code": 200,
                'code': {
                    "msg": 'success', 
                    "patientid": patient.Guardian_id,
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
        