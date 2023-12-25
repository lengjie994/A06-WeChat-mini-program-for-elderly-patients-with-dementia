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
from ..models import Doctor
from wx_backend.LogicManage.Constants import Constants
import os
from django.conf import settings

class UploadImageView(APIView):
    def post(self, request, format=None):
        """
        用户报名上传照片
        @param request:
        @return:
        """
        # 获取当前用户  我这里是写死的
        user = User.objects.first()
        image = request.FILES.get('image', None)
        if image:
            file_info, suffix = os.path.splitext(image.name)
            # 修改照片名称 按需求来进行改写
            image.name = 'w' + suffix
            if suffix.upper() not in ['.JPG', '.JPEG', '.PNG']:
                return Response({"msg": "照片格式只支持PNG、JPEG、JPG", "code": 1})
            # 判断数据库中该用户是否有上传过照片，如果有，代表我们服务器本地也有这个照片，
            # 因为我们model用的是 upload_to 这个，所以 如果照片存在，再次上传同一张照片，
            # 系统会自动给你在照片的末尾加上一些字符串来区分并不会替换掉照片，会造成无用的图片越来越多，
            # 所以我们要把之间的同一个名字的照片先删除掉，在进行保存
            if user.img:
                path = settings.BASE_DIR + '/media/' + str(user.img)
                if os.path.exists(path):
                    os.remove(path)
            # 保存图片
            user.img = image
            user.save()
        return Response({"msg": str(user.img), "code": 0})