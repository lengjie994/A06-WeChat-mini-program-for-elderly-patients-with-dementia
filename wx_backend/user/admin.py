from django.contrib import admin

# Register your models here.
from .models import User
from .models import Patient
from .models import Guardian
from .models import Doctor
from .models import GlobalVariables

admin.site.register(GlobalVariables)
admin.site.register(User)
admin.site.register(Patient)
admin.site.register(Guardian)
admin.site.register(Doctor)
