from django.urls import path
from user.views import WeixinLogin

app_name = 'user'   #后续接口的名称

urlpatterns = [
    path('login/', WeixinLogin.as_view(), name='login'),
]