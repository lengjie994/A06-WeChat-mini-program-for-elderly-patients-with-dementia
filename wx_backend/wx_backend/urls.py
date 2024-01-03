"""
URL configuration for wx_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.urls import path, re_path, include
from django.views.static import serve
from django.conf import settings
from user.UploadPhoto.camp_view import CampImgUploadView
from user.UploadPhoto.photo import UploadImageView

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/user/', include('user.urls', namespace='user')),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}, name='media'),
    # 自驾营地上传图片接口
    path('camp/upload/img', CampImgUploadView.as_view()),
    path('UploadImage/', UploadImageView.as_view(), name='UploadImage'),
]
