from django.db import models
from django.db.models import JSONField

# Create your models here.
#GlobalVariables：全局变量模型，用于存储应用的AppId、SecretId和AccessToken等全局变量信息
class GlobalVariables(models.Model):
    AppId = models.CharField(max_length = 100, default = "UNDEFINED")
    SecretId = models.CharField(max_length = 100, default = "UNDEFINED")
    AccessToken = models.CharField(max_length = 300, default = "UNDEFINED")
    Patient_amount=models.IntegerField(default=0)
    Guardian_amount=models.IntegerField(default=0)
    Doctor_amount=models.IntegerField(default=0)

#User：用户模型，用于存储用户的各种信息。
class User(models.Model):
    Openid = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    session = models.CharField(max_length = 100)
    role = models.CharField(max_length = 100)

    img = models.ImageField(upload_to='img/',null=True)
    class Meta:
        db_table = 'user'

#Patient：患者模型，用于存储患者的身份和备忘录等信息
class Patient(models.Model):
    Openid = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    session = models.CharField(max_length = 100)
    Patient_id = models.CharField(max_length = 100) #患者自身的特殊id
    Guardian_id = models.CharField(max_length = 100, default = "UNDEFINED") #监护人的特殊id
    Status = models.CharField(max_length = 100, default = "UNBOUND") #绑定状态，默认未绑定
    #备忘录
    Name = models.CharField(max_length = 100, default = "UNDEFINED") 
    Address = models.CharField(max_length = 200, default = "UNDEFINED")
    Phone_contact = models.CharField(max_length = 100, default = "UNDEFINED") #紧急联系人电话
    #服药提醒
    Medicine = JSONField(null=True)
    #我的回忆录
    Memoir = JSONField(null=True)
    #我的健康数据
    Healthdata = JSONField(null=True)
    #发送服药提醒的uid
    Uid = models.CharField(max_length = 200, default = "UNDEFINED")


#Guardian：模型，用于存储患者的身份和备忘录等信息
class Guardian(models.Model):
    Openid = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    session = models.CharField(max_length = 100)
    Flag = models.BooleanField(default=False)
    Guardian_id = models.CharField(max_length = 100) #监护人自身的特殊id
    Patient_id = models.CharField(max_length = 100, default = "UNDEFINED") #患者的特殊id
    Doctor_id = models.CharField(max_length = 100, default = "UNDEFINED") #医生的特殊id
    Status = models.CharField(max_length = 100, default = "UNBOUND") #绑定状态，默认未绑定
    Reservation = JSONField(null=True)
    Chatlist = JSONField(null=True)
    Nickname = models.CharField(max_length = 200, default = "UNDEFINED")

#医生模型
class Doctor(models.Model):
    Openid = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    session = models.CharField(max_length = 100)
    Doctor_id = models.CharField(max_length = 100) #医生自身的特殊id

    Guardian_id_list = JSONField(null=True)
    Doctor_info = JSONField(null=True)
    Reservation = JSONField(null=True)
    Reservation_info  = JSONField(null=True)
    Nickname = models.CharField(max_length = 200, default = "UNDEFINED")

class MediaCampTest(models.Model):

    class Meta:
        db_table = "media_camp"

    # 营地图片
    img = models.FileField(verbose_name="营地图片", max_length=256, upload_to="camp/")
