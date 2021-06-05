import os
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from member.models import BlackpinkMember
from clothes.models import LookbookClothes
import json


def find_lookbooks_by_member(pk):
    return (
        LookbookClothes.objects.select_related("color")
        .select_related("category")
        .prefetch_related("shop_clothes")
        .prefetch_related("attributes")
        .prefetch_related("attributes")
        .filter(member=pk)
    )


def make_lookbook_data(lookbooks):
    BASE_URL = os.environ.get("BASE_URL")

    result = dict()
    result["lookbook_data"] = []

    for lookbook in lookbooks:
        data = dict()
        data["lookbook_id"] = lookbook.id
        data["lookbook_image"] = BASE_URL + lookbook.image.url
        data["color"] = lookbook.color.hex_code
        data["category"] = lookbook.category.name_kr
        data["attributes"] = [attr.name_kr for attr in lookbook.attributes.all()]
        data["similar_images"] = json.dumps(
            [
                {
                    "image": BASE_URL + clothes.image.url,
                    "link": clothes.webpage_url,
                }
                for clothes in lookbook.shop_clothes.all()
            ]
        )
        result["lookbook_data"].append(data)

    return result


class MemberLookbookAPIView(APIView):
    """멤버의 Lookbook 리스트를 조회하는 API 클래스"""

    renderer_classes = [CamelCaseJSONRenderer]

    def get_object(self, pk):
        """pk에 해당하는 멤버를 반환합니다.

        Args:
            pk: 멤버 id

        Returns:
            멤버 인스턴스
        """
        return BlackpinkMember.objects.select_related("color").get(pk=pk)

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
        if not (1 <= pk <= 4):
            raise NotFound({"message": "멤버가 존재하지 않습니다."})

        member = self.get_object(pk)
        member_color = member.color

        if member_color is None:
            raise NotFound({"message": "색상이 존재하지 않습니다."})

        lookbooks = find_lookbooks_by_member(pk)

        if lookbooks is None:
            raise NotFound({"message": "Lookbook이 존재하지 않습니다."})

        result = make_lookbook_data(lookbooks)

        result["symbol_color"] = member_color.hex_code
        result["status_code"] = status.HTTP_200_OK

        return Response(result)
