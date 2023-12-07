from django.urls import path
from user.views import WeixinLogin
from user.views import ChooseRole
from user.views import GetPatientInfo
from user.views import GetGuardianInfo
from user.views import ModifyMemorial
from user.views import GuardianToPatient
from user.views import SendHealthdata
from user.views import SendMemoir
from user.views import SendReminder
from user.BindHandle.bind import GuardianGetID
from user.BindHandle.bind import PatientGetID

app_name = 'user'   #后续接口的名称

urlpatterns = [
    path('login/', WeixinLogin.as_view(), name='login'),
    path('role/', ChooseRole.as_view(), name='role'),
    path('getPatientInfo/', GetPatientInfo.as_view(), name='getPatientInfo'),
    path('GetGuardianInfo/', GetGuardianInfo.as_view(), name='GetGuardianInfo'),
    path('modifyMemorial/', ModifyMemorial.as_view(), name='modifyMemorial'),
    path('GuardianToPatient/', GuardianToPatient.as_view(), name='GuardianToPatient'),
    path('SendHealthdata/', SendHealthdata.as_view(), name='SendHealthdata'),
    path('SendMemoir/', SendMemoir.as_view(), name='SendMemoir'),
    path('SendReminder/', SendReminder.as_view(), name='SendReminder'),
    path('GuardianGetID/', GuardianGetID.as_view(), name='GuardianGetID'),
    path('PatientGetID/', PatientGetID.as_view(), name='PatientGetID'),
]