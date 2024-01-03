from django.test import TestCase

# Create your tests here.
import unittest
import os
import django
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "wx_backend.settings")
# django.setup()
class ChooseRoleTestCase(TestCase):
    def test_choose_role(self):
    
        # 构造POST请求的数据
        data = {
            'role': 'patient',
            'openid': 'oVM_s6UNCbVpQn0ony1nuun_ReFM'
        }
        
        # 使用client发送POST请求
        response = self.client.post('http://127.0.0.1:8000/api/user/role/', data=data, content_type='application/json')
        print(response.json())

        # 断言响应的状态码和内容
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['code']['msg'], 'success')
        self.assertEqual(response.data['code']['role'], 'admin')
        self.assertEqual(response.data['code']['openid'], 'user123')

# if __name__ == '__main__':
#     unittest.main()