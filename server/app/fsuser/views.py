from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.serializers import ValidationError
from clothes.models import UserUploadClothes
from clothes.serializers import UserUploadClothesSerializer


class UserRequestImageAPIView(APIView):
    """사용자가 추가적으로 요청한 이미지를 저장하는 API 클래스"""

    def post(self, request):
        """사용자가 요청한 이미지를 저장합니다."""
        try:
            user_image = UserUploadClothes.objects.create(
                image=request.FILES.get("user_image"),
            )

            user_image.save()
            user_image = UserUploadClothesSerializer(user_image)

            result = dict()
            result["user_image"] = user_image.data
            result["email"] = request.data.get("email")
            result["statusCode"] = status.HTTP_201_CREATED
            return Response(result)

        except:
            raise ValidationError({"user_image": "업로드한 이미지가 없습니다."})
