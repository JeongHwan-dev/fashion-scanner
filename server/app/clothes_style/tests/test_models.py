from django.test import TestCase
from django.db import IntegrityError
from clothes_style.models import ClothesCategory, ClothesAttribute, Color


class ClothesCategoryTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.category_id = ClothesCategory.objects.create(
            name_en="Blouse", name_ko="블라우스"
        ).id

    def test_name_en_label(self):
        category = ClothesCategory.objects.get(id=self.category_id)
        field_label = category._meta.get_field("name_en").verbose_name
        self.assertEquals(field_label, "의류 카테고리 영어")

    def test_name_ko_label(self):
        category = ClothesCategory.objects.get(id=self.category_id)
        field_label = category._meta.get_field("name_ko").verbose_name
        self.assertEquals(field_label, "의류 카테고리 한국어")

    def test_name_en_max_length(self):
        category = ClothesCategory.objects.get(id=self.category_id)
        max_length = category._meta.get_field("name_en").max_length
        self.assertEquals(max_length, 32)

    def test_name_ko_max_length(self):
        category = ClothesCategory.objects.get(id=self.category_id)
        max_length = category._meta.get_field("name_ko").max_length
        self.assertEquals(max_length, 32)

    def test_name_en_integrity_exception(self):
        with self.assertRaises(IntegrityError):
            ClothesCategory.objects.create(name_en="Blouse", name_ko="블라우스")


class ClothesAttributeTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.attribute_id = ClothesAttribute.objects.create(
            name_en="chiffon", name_ko="쉬폰"
        ).id

    def test_name_en_label(self):
        attribute = ClothesAttribute.objects.get(id=self.attribute_id)
        field_label = attribute._meta.get_field("name_en").verbose_name
        self.assertEquals(field_label, "의류 속성 영어")

    def test_name_ko_label(self):
        attribute = ClothesAttribute.objects.get(id=self.attribute_id)
        field_label = attribute._meta.get_field("name_ko").verbose_name
        self.assertEquals(field_label, "의류 속성 한국어")

    def test_name_en_max_length(self):
        attribute = ClothesAttribute.objects.get(id=self.attribute_id)
        max_length = attribute._meta.get_field("name_en").max_length
        self.assertEquals(max_length, 32)

    def test_name_ko_max_length(self):
        attribute = ClothesAttribute.objects.get(id=self.attribute_id)
        max_length = attribute._meta.get_field("name_ko").max_length
        self.assertEquals(max_length, 32)

    def test_name_ko_integrity_exception(self):
        with self.assertRaises(IntegrityError):
            ClothesAttribute.objects.create(name_en="chiffon", name_ko="쉬폰")


class ColorTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.color_id = Color.objects.create(hex_code="101010").id

    def test_name_label(self):
        color = Color.objects.get(id=self.color_id)
        field_label = color._meta.get_field("hex_code").verbose_name
        self.assertEquals(field_label, "색상 코드")

    def test_hex_code(self):
        color = Color.objects.get(id=self.color_id)
        self.assertEquals(color.hex_code, "101010")

    def test_color_integrity_exception(self):
        with self.assertRaises(IntegrityError):
            Color.objects.create(hex_code="101010")
