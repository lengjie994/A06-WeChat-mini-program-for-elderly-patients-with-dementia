from django.db import models

# Create your models here.
#GlobalVariables：全局变量模型，用于存储应用的AppId、SecretId和AccessToken等全局变量信息
class GlobalVariables(models.Model):
    AppId = models.CharField(max_length = 100)
    SecretId = models.CharField(max_length = 100)
    AccessToken = models.CharField(max_length = 300, default = "UNDEFINED")

#User：用户模型，用于存储用户的各种信息。
class User(models.Model):
    Openid = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    session = models.CharField(max_length = 100)
    role = models.CharField(max_length = 100)

    