from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from member.models import BlackpinkMember
from clothes.models import LookbookClothes
from clothes_style.models import ClothesCategory, ClothesAttribute, Color
from .errors import MemberNotExistException
import json


class MemberLookbookListAPIView(APIView):
    """멤버의 Lookbook 리스트를 조회하는 API 구현 클래스"""

    renderer_classes = [CamelCaseJSONRenderer]

    def get_object(self, pk):
        """pk에 해당하는 멤버를 반환합니다.

        Args:
            pk: 멤버 id

        Returns:
            멤버 인스턴스
        """
        try:
            return BlackpinkMember.objects.select_related("color").get(pk=pk)

        except BlackpinkMember.DoesNotExist:
            raise MemberNotExistException()

    def get(self, request, pk, format=None):
        """pk에 해당하는 멤버의 Lookbook 리스트와 상징색을 반환합니다.

        Args:
            request: request 객체
            pk: 멤버 id
            format: 포맷 접미사 (json 등)

        Returns:
            JSON 문자열:
                lookbook_data:
                    lookbook id,
                    lookbook 이미지,
                    의류 색상,
                    의류 카테고리,
                    의류 속성 리스트,
                    비슷한 의류 리스트
                symbol_color:
                    멤버 상징색
                status_code:
                    상태 코드
        """
        try:
            base_url = "http://elice-kdt-ai-track-vm-ai-13.koreacentral.cloudapp.azure.com:8000"
            member = self.get_object(pk)
            symbol_color = member.color.hex_code
            lookbook_list = (
                LookbookClothes.objects.select_related("color")
                .select_related("category")
                .prefetch_related("shop_clothes")
                .prefetch_related("attributes")
                .filter(member=pk)
            )

            result = dict()
            result["lookbook_data"] = []
            for lookbook in lookbook_list:
                data = dict()
                data["lookbook_id"] = lookbook.id
                data["lookbook_image"] = base_url + lookbook.image.url
                data["color"] = lookbook.color.hex_code
                data["category"] = lookbook.category.name_kr
                data["attributes"] = [
                    attr.name_kr for attr in lookbook.attributes.all()
                ]
                data["similar_images"] = json.dumps(
                    [
                        {
                            "image": base_url + clothes.image.url,
                            "link": clothes.webpage_url,
                        }
                        for clothes in lookbook.shop_clothes.all()
                    ]
                )
                result["lookbook_data"].append(data)

            result["symbol_color"] = symbol_color
            result["status_code"] = status.HTTP_200_OK

            return Response(result)

        except MemberNotExistException:
            raise MemberNotExistException()
