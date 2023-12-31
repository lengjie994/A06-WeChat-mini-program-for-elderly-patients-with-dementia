from django.urls import path,re_path
from django.views.static import serve
from wx_backend.settings import MEDIA_ROOT

from user.views import WeixinLogin
from user.views import ChooseRole
from user.views import GetPatientInfo
from user.views import GetGuardianInfo
from user.views import getDoctorInfo
from user.views import DoctorFindHealthData
from user.views import ModifyMemorial
from user.views import GuardianToPatient
from user.views import GuardianToDoctor
from user.views import SendHealthdata
from user.views import SendMemoir
from user.views import SendReminder
from user.views import DoctorgetReminder
from user.views import GuardianReserve
from user.views import WriteUid
from user.views import ModifyGaurdianNickname
from user.views import ModifyDoctorInfo
from user.BindHandle.bind import GuardianGetID
from user.BindHandle.bind import PatientGetID
from user.SendMessage.send import SendOfficialReminder
from user.SendMessage.send import DeleteOneReminder

from user.ChatHandle.chat import SaveChatlist
from user.ChatHandle.chat import ReturnChatList
from user.ChatHandle.chat import GuardianFlagFalse
from user.ChatHandle.chat import DoctorFlagFalse

from user.UploadPhoto.photo import UploadImageView

app_name = 'user'   #后续接口的名称

urlpatterns = [
    path('login/', WeixinLogin.as_view(), name='login'),
    path('role/', ChooseRole.as_view(), name='role'),
    path('getPatientInfo/', GetPatientInfo.as_view(), name='getPatientInfo'),
    path('getGuardianInfo/', GetGuardianInfo.as_view(), name='getGuardianInfo'),
    path('getDoctorInfo/', getDoctorInfo.as_view(), name='getDoctorInfo'),
    path('DoctorFindHealthData/', DoctorFindHealthData.as_view(), name='DoctorFindHealthData'),
    
    path('modifyMemorial/', ModifyMemorial.as_view(), name='modifyMemorial'),
    path('GuardianToPatient/', GuardianToPatient.as_view(), name='GuardianToPatient'),
    path('GuardianToDoctor/', GuardianToDoctor.as_view(), name='GuardianToDoctor'),
    path('SendHealthdata/', SendHealthdata.as_view(), name='SendHealthdata'),
    path('SendMemoir/', SendMemoir.as_view(), name='SendMemoir'),
    path('SendReminder/', SendReminder.as_view(), name='SendReminder'),
    path('DoctorgetReminder/', DoctorgetReminder.as_view(), name='DoctorgetReminder'),
    path('GuardianReserve/', GuardianReserve.as_view(), name='GuardianReserve'),
    path('WriteUid/', WriteUid.as_view(), name='WriteUid'),
    path('ModifyGaurdianNickname/', ModifyGaurdianNickname.as_view(), name='ModifyGaurdianNickname'),
    path('ModifyDoctorInfo/', ModifyDoctorInfo.as_view(), name='ModifyDoctorInfo'),

    path('GuardianGetID/', GuardianGetID.as_view(), name='GuardianGetID'),
    path('PatientGetID/', PatientGetID.as_view(), name='PatientGetID'),

    path('SendOfficialReminder/', SendOfficialReminder.as_view(), name='SendOfficialReminder'),
    path('DeleteOneReminder/', DeleteOneReminder.as_view(), name='DeleteOneReminder'),

    path('SaveChatlist/', SaveChatlist.as_view(), name='SaveChatlist'),
    path('ReturnChatList/', ReturnChatList.as_view(), name='ReturnChatList'),
    path('GuardianFlagFalse/', GuardianFlagFalse.as_view(), name='GuardianFlagFalse'),
    path('DoctorFlagFalse/', DoctorFlagFalse.as_view(), name='DoctorFlagFalse'),

    path('UploadImage/', UploadImageView.as_view(), name='UploadImage'),
    re_path('^media/(?P<path>.*)$', serve, {"document_root": MEDIA_ROOT}),
]