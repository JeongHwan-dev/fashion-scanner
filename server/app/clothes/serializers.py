from rest_framework import serializers
from .models import UserUploadClothes


class UserUploadClothesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserUploadClothes
        fields = "__all__"
