from django.contrib import admin

# Register your models here.
from .models import User
from .models import Patient

admin.site.register(User)
admin.site.register(Patient)