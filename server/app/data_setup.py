# -*- coding: utf-8 -*-
import csv

import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "fashion_scanner.settings")

import django

django.setup()

from member.models import BlackpinkMember
from clothes_style.models import Color
from clothes_style.models import ClothesCategory
from clothes_style.models import ClothesAttribute
from clothes_style.constants import CLOTHES_CATEGORIES_EN_KO, CLOTHES_ATTRIBUTES_EN_KO
from clothes.models import LookbookClothes, ShopClothes


def save_categories():
    """카테고리 db에 저장"""
    for _name_en, _name_ko in CLOTHES_CATEGORIES_EN_KO.items():
        c = ClothesCategory.objects.create(name_en=_name_en, name_ko=_name_ko)


def save_attributes():
    """속성 db에 저장"""
    for _name_en, _name_ko in CLOTHES_ATTRIBUTES_EN_KO.items():
        a = ClothesAttribute.objects.create(name_en=_name_en, name_ko=_name_ko)


def save_members():
    """멤버 db에 저장"""
    member_names = ["JENNIE", "ROSE", "JISOO", "LISA"]
    colors = ["101010", "F4C2C2", "8057AE", "FFFF66"]
    for i in range(len(member_names)):
        _color = Color.objects.create(hex_code=colors[i])
        member = BlackpinkMember.objects.create(name=member_names[i], color=_color)


def save_lookbook_and_similars():
    """룩북 의류 이미지 db에 저장"""
    member_names = {"jennie": 1, "rose": 2, "jisoo": 3, "lisa": 4}
    _member = None
    _name = None

    with open("lookbook_data.csv", "r", encoding="UTF-8") as f:
        reader = csv.reader(f)
        j = 1
        for line in reader:
            if line[0] in member_names:
                _name = line[0]
                _member = BlackpinkMember.objects.get(name=_name.upper())

            if line[0].isdigit():
                _image = f"/lookbook/{_name}/{line[1]}.png"
                _color = Color.objects.create(hex_code=line[3])
                _category = ClothesCategory.objects.get(name_en=line[2])
                attribute1 = ClothesAttribute.objects.get(name_en=line[4])
                attribute2 = ClothesAttribute.objects.get(name_en=line[5])
                attribute3 = ClothesAttribute.objects.get(name_en=line[6])

                lookbook = LookbookClothes.objects.create(
                    image=_image,
                    member=_member,
                    color=_color,
                    category=_category,
                )
                _attributes = [attribute1, attribute2, attribute3]
                lookbook.attributes.set(_attributes)
                lookbook.save()

                similar_img1 = (
                    ShopClothes.objects.create(
                        image=f"lookbook-similar/{_name}/{line[7]}",
                        webpage_url=line[10],
                        lookbook_clothes=lookbook,
                    ),
                )
                similar_img2 = (
                    ShopClothes.objects.create(
                        image=f"lookbook-similar/{_name}/{line[8]}",
                        webpage_url=line[11],
                        lookbook_clothes=lookbook,
                    ),
                )
                similar_img3 = ShopClothes.objects.create(
                    image=f"lookbook-similar/{_name}/{line[9]}",
                    webpage_url=line[12],
                    lookbook_clothes=lookbook,
                )


if __name__ == "__main__":
    save_attributes()
    save_categories()
    save_members()
    save_lookbook_and_similars()
