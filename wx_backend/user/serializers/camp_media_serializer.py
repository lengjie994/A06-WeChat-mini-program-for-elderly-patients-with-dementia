from rest_framework import serializers

from user.models import MediaCampTest


class MediaCampSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaCampTest
        fields = "__all__"