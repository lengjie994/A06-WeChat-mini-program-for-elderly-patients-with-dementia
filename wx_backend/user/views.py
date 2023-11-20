from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
import json
from django.contrib.auth.models import User

class WeixinLogin(APIView):
    def post(self, request, format=None):
        """
        提供 post 请求
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
            return Response({'code': 'fail'})
        else:
            # 打印到后端命令行
            print(openid, session_key)
            # 根据openid确定用户的本地身份
            try:
                user = User.objects.get(username=openid)
            except User.DoesNotExist:
                user = User.objects.create(
                    username=openid,
                    password=openid
                )
                
            return Response({'code': 'success'})