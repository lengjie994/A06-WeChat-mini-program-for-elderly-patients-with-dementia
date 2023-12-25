
from rest_framework.generics import ListCreateAPIView
from user.models import MediaCampTest
#from user.serializers.camp_media_serializer import MediaCampSerializer
from rest_framework.response import Response

class CampImgUploadView(ListCreateAPIView):
    queryset = []

    def post(self, req):

        print("CampImgUploadView:", req.data)

        # 图片二进制数据（请看在步骤4中，将图片二进制数据放在了file_data中）
        file_obj = req.data.get('file_data')

        # MediaCampTest对象
        camp_image = MediaCampTest()

        # 图片二进制数据
        camp_image.img = file_obj
        print(file_obj)
        # 图片存储
        camp_image.save()

        # 数据序列化处理
        # serializer = MediaCampSerializer(instance=camp_image, many=False)
        return Response({
                "status_code": 401,
                'code': {
                    "msg": 'success', 
                    #"data": serializer.data,
                    "data": file_obj,
                }
            })
        #return response_util.response_success(serializer.data)