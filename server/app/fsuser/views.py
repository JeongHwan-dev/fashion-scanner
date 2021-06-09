from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.serializers import ValidationError
from clothes.models import UserUploadClothes
from fsuser.models import Fsuser
from clothes.serializers import UserUploadClothesSerializer
from clothes_style.models import ClothesCategory, ClothesAttribute
from clothes_style.constants import CLOTHES_CATEGORIES_EN_KO, CLOTHES_ATTRIBUTES_EN_KO
from ai.mmfashion.member_matching import match_to_member
from .constants import MEMBER_DESCRIPTIONS_EN, MEMBER_DESCRIPTIONS_KO


class UserMemberMatchingAPIView(APIView):
    """옷 스타일을 토대로 사용자와 멤버를 매칭하는 API 클래스"""

    def post(self, request):
        """사용자의 옷 스타일과 유사한 멤버를 반환합니다."""
        try:
            request_image = request.FILES.get("user_image")

            match_result = match_to_member(request_image)
            user_image = UserUploadClothes.objects.create(image=request_image)

            name = match_result["member"]

            member_obj_en = MEMBER_DESCRIPTIONS_EN[name]
            member_obj_ko = MEMBER_DESCRIPTIONS_KO[name]

            category = match_result["category"]
            attributes = match_result["attributes"]

            attribute1_ko = CLOTHES_ATTRIBUTES_EN_KO[attributes[0]]
            attribute2_ko = CLOTHES_ATTRIBUTES_EN_KO[attributes[1]]
            attribute3_ko = CLOTHES_ATTRIBUTES_EN_KO[attributes[2]]

            img_obj_en = {
                "category": category,
                "attributes": [attr.replace("_", " ") for attr in attributes],
            }

            img_obj_ko = {
                "category": CLOTHES_CATEGORIES_EN_KO[match_result["category"]],
                "attributes": [attribute1_ko, attribute2_ko, attribute3_ko],
            }

            result = dict()
            result["matching_result_en"] = {
                "member_obj": member_obj_en,
                "img_obj": img_obj_en,
            }
            result["matching_result_ko"] = {
                "member_obj": member_obj_ko,
                "img_obj": img_obj_ko,
            }
            result["statusCode"] = status.HTTP_201_CREATED

            return Response(result)

        except ValidationError:
            raise ValidationError({"user_image": "업로드한 이미지가 없습니다."})

        except Exception as e:
            raise Exception({"message": e})


class UserRequestImageAPIView(APIView):
    """사용자가 추가적으로 요청한 의류 이미지를 저장하는 API 클래스"""

    def post(self, request):
        """사용자가 요청한 의류 이미지를 저장합니다."""

        try:
            request_image = UserUploadClothes.objects.create(
                image=request.FILES.get("user_image"),
            )

            _email = request.data.get("email")
            _user = Fsuser.objects.get(email=_email)

        except Fsuser.DoesNotExist:
            _user = Fsuser.objects.create(email=_email)

        except:
            raise ValidationError({"user_image": "업로드한 이미지가 없습니다."})

        request_image.user = _user
        request_image = UserUploadClothesSerializer(request_image)

        result = dict()
        result["email"] = _email
        result["user_request_image_id"] = request_image.data.get("id")
        result["statusCode"] = status.HTTP_201_CREATED

        return Response(result)
