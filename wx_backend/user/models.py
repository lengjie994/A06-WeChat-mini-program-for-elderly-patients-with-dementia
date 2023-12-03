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

#Patient：患者模型，用于存储患者的身份和备忘录等信息
class Patient(models.Model):
    Openid = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    session = models.CharField(max_length = 100)
    Guardian_Openid = models.CharField(max_length = 100, default = "UNDEFINED") #监护人
    Status = models.CharField(max_length = 100, default = "UNBOUND") #绑定状态，默认未绑定
    #备忘录
    Name = models.CharField(max_length = 100, default = "UNDEFINED") 
    Address = models.CharField(max_length = 200, default = "UNDEFINED")
    Phone_contact = models.CharField(max_length = 100, default = "UNDEFINED") #紧急联系人电话
    #服药提醒
    Medicine_name = models.CharField(max_length = 200, default = "UNDEFINED")
    Medicine_time = models.CharField(max_length = 100, default = "UNDEFINED") #服药时间
    Medicine_usage = models.CharField(max_length = 400, default = "UNDEFINED") #用法用量
    Medicine_status = models.CharField(max_length = 200, default = "NOTTAKEN") #服用状态
    #我的回忆录
    #我的健康数据


    