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
    if lookbooks is None:
        return None

    BASE_URL = os.environ.get("BASE_URL")

    result = dict()
    result["lookbook_data_en"] = []
    result["lookbook_data_ko"] = []

    for lookbook in lookbooks:
        data_en, data_ko = dict(), dict()

        data_en["lookbook_id"] = lookbook.id
        data_en["lookbook_image"] = BASE_URL + lookbook.image.url
        data_en["color"] = lookbook.color.hex_code
        data_en["category"] = lookbook.category.name_en
        data_en["attributes"] = [
            attr.name_en.replace("_", " ") for attr in lookbook.attributes.all()
        ]
        data_en["similar_images"] = json.dumps(
            [
                json.dumps(
                    {
                        "image": BASE_URL + clothes.image.url,
                        "link": clothes.webpage_url,
                    }
                )
                for clothes in lookbook.shop_clothes.all()
            ]
        )

        data_ko["lookbook_id"] = data_en["lookbook_id"]
        data_ko["lookbook_image"] = data_en["lookbook_image"]
        data_ko["color"] = data_en["color"]
        data_ko["category"] = lookbook.category.name_ko
        data_ko["attributes"] = [attr.name_ko for attr in lookbook.attributes.all()]
        data_ko["similar_images"] = data_en["similar_images"]

        result["lookbook_data_en"].append(data_en)
        result["lookbook_data_ko"].append(data_ko)

    return result


class MemberLookbookAPIView(APIView):
    """????????? Lookbook ???????????? ???????????? API ?????????"""

    def get_object(self, pk):
        """pk??? ???????????? ????????? ???????????????.

        Args:
            pk: ?????? id

        Returns:
            ?????? ????????????
        """
        try:
            return BlackpinkMember.objects.select_related("color").get(pk=pk)

        except BlackpinkMember.DoesNotExist:
            raise NotFound({"message": "????????? ???????????? ????????????."})

    def get(self, request, pk, format=None):
        """pk??? ???????????? ????????? Lookbook ???????????? ???????????? ???????????????.

        Args:
            request: request ??????
            pk: ?????? id
            format: ?????? ????????? (json ???)

        Returns:
            JSON ?????????:
                lookbook_data:
                    lookbook id,
                    lookbook ?????????,
                    ?????? ??????,
                    ?????? ????????????,
                    ?????? ?????? ?????????,
                    ????????? ?????? ?????????
                symbol_color:
                    ?????? ?????????
                status_code:
                    ?????? ??????
        """
        if not (1 <= pk <= 4):
            raise NotFound({"message": "????????? ???????????? ????????????."})

        member = self.get_object(pk)
        member_color = member.color

        lookbooks = find_lookbooks_by_member(pk)

        if member_color is not None:
            member_color = member_color.hex_code

        result = make_lookbook_data(lookbooks)

        result["symbol_color"] = member_color
        result["status_code"] = status.HTTP_200_OK

        return Response(result)
