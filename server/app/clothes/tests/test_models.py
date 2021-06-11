from django.test import TestCase
from django.db import IntegrityError
from fsuser.models import Fsuser
from member.models import BlackpinkMember
from clothes_style.models import ClothesCategory, ClothesAttribute, Color
from clothes.models import LookbookClothes, ShopClothes, UserUploadClothes


class LookbookClothesTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.color = Color.objects.create(hex_code="FFFFFF")
        cls.member = BlackpinkMember.objects.create(name="JENNIE", color=cls.color)
        cls.category = ClothesCategory.objects.create(name_en="Blouse", name_ko="블라우스")
        cls.attribute1 = ClothesAttribute.objects.create(
            name_en="chiffon", name_ko="쉬폰"
        )
        cls.attribute2 = ClothesAttribute.objects.create(name_en="cotton", name_ko="면")
        cls.attribute3 = ClothesAttribute.objects.create(
            name_en="crew_neckline", name_ko="크루넥"
        )

        cls.lookbook = LookbookClothes.objects.create(
            image="/jennie/jn_1.png",
            member=cls.member,
            color=cls.color,
            category=cls.category,
        )

        cls.lookbook.attributes.add(cls.attribute1)
        cls.lookbook.attributes.add(cls.attribute2)
        cls.lookbook.attributes.add(cls.attribute3)

        cls.lookbook_id = cls.lookbook.id

    def test_image_label(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        field_label = lookbook._meta.get_field("image").verbose_name
        self.assertEquals(field_label, "룩북 이미지")

    def test_member_label(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        field_label = lookbook._meta.get_field("member").verbose_name
        self.assertEquals(field_label, "블랙핑크 멤버")

    def test_color_label(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        field_label = lookbook._meta.get_field("color").verbose_name
        self.assertEquals(field_label, "의류 색상")

    def test_category_label(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        field_label = lookbook._meta.get_field("category").verbose_name
        self.assertEquals(field_label, "의류 카테고리")

    def test_attributes_label(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        field_label = lookbook._meta.get_field("attributes").verbose_name
        self.assertEquals(field_label, "의류 속성")

    def test_image_value(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        self.assertEquals(lookbook.image.url, "/media/jennie/jn_1.png")

    def test_member_value(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        self.assertEquals(lookbook.member, self.member)

    def test_color_value(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        self.assertEquals(lookbook.color, self.color)

    def test_category_value(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        self.assertEquals(lookbook.category, self.category)

    def test_attribute1_value(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        attribute1 = lookbook.attributes.all()[0]
        self.assertEquals(attribute1, self.attribute1)

    def test_attribute2_value(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        attribute2 = lookbook.attributes.all()[1]
        self.assertEquals(attribute2, self.attribute2)

    def test_attribute3_value(self):
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        attribute3 = lookbook.attributes.all()[2]
        self.assertEquals(attribute3, self.attribute3)

    def test_member_is_set_to_null_on_delete(self):
        self.member.delete()
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        self.assertEquals(lookbook.member, None)

    def test_color_is_set_to_null_on_delete(self):
        self.color.delete()
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        self.assertEquals(lookbook.color, None)

    def test_category_is_set_to_null_on_delete(self):
        self.category.delete()
        lookbook = LookbookClothes.objects.get(id=self.lookbook_id)
        self.assertEquals(lookbook.category, None)


class ShopClothesTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.color = Color.objects.create(hex_code="FFFFFF")
        cls.member = BlackpinkMember.objects.create(name="JENNIE", color=cls.color)
        cls.category = ClothesCategory.objects.create(name_en="Blouse", name_ko="블라우스")
        cls.attribute1 = ClothesAttribute.objects.create(
            name_en="chiffon", name_ko="쉬폰"
        )
        cls.attribute2 = ClothesAttribute.objects.create(name_en="cotton", name_ko="면")
        cls.attribute3 = ClothesAttribute.objects.create(
            name_en="crew_neckline", name_ko="크루넥"
        )

        cls.lookbook = LookbookClothes.objects.create(
            image="/jennie/jn_1.png",
            member=cls.member,
            color=cls.color,
            category=cls.category,
        )

        cls.shop_clothes_id = ShopClothes.objects.create(
            image="/jisoo/js_1.png",
            webpage_url="https://www.amazon.com/Riders-Lee-Indigo-Womens-Boyfriend/dp/B0733SN59M/ref=sr_1_25?dchild=1&keywords=jeans&qid=1622598761&s=apparel&sr=1-25",
            lookbook_clothes=cls.lookbook,
        ).id

    def test_image_label(self):
        shop_clothes = ShopClothes.objects.get(id=self.shop_clothes_id)
        field_label = shop_clothes._meta.get_field("image").verbose_name
        self.assertEquals(field_label, "쇼핑몰 의류 이미지")

    def test_webpage_url_label(self):
        shop_clothes = ShopClothes.objects.get(id=self.shop_clothes_id)
        field_label = shop_clothes._meta.get_field("webpage_url").verbose_name
        self.assertEquals(field_label, "웹 페이지 URL")

    def test_webpage_url_label(self):
        shop_clothes = ShopClothes.objects.get(id=self.shop_clothes_id)
        field_label = shop_clothes._meta.get_field("lookbook_clothes").verbose_name
        self.assertEquals(field_label, "룩북 의류")

    def test_image_value(self):
        shop_clothes = ShopClothes.objects.get(id=self.shop_clothes_id)
        self.assertEquals(shop_clothes.image.url, "/media/jisoo/js_1.png")

    def test_webpage_url_value(self):
        shop_clothes = ShopClothes.objects.get(id=self.shop_clothes_id)
        self.assertEquals(
            shop_clothes.webpage_url,
            "https://www.amazon.com/Riders-Lee-Indigo-Womens-Boyfriend/dp/B0733SN59M/ref=sr_1_25?dchild=1&keywords=jeans&qid=1622598761&s=apparel&sr=1-25",
        )

    def test_lookbook_clothes_value(self):
        shop_clothes = ShopClothes.objects.get(id=self.shop_clothes_id)
        self.assertEquals(shop_clothes.lookbook_clothes, self.lookbook)

    def test_lookbook_clothes_is_set_to_null_on_delete(self):
        self.lookbook.delete()
        shop_clothes = ShopClothes.objects.get(id=self.shop_clothes_id)
        self.assertEquals(shop_clothes.lookbook_clothes, None)


class UserUploadClothesTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.color = Color.objects.create(hex_code="FFFFFF")
        cls.member = BlackpinkMember.objects.create(name="JENNIE", color=cls.color)
        cls.category = ClothesCategory.objects.create(name_en="Blouse", name_ko="블라우스")
        cls.attribute1 = ClothesAttribute.objects.create(
            name_en="chiffon", name_ko="쉬폰"
        )
        cls.attribute2 = ClothesAttribute.objects.create(name_en="cotton", name_ko="면")
        cls.attribute3 = ClothesAttribute.objects.create(
            name_en="crew_neckline", name_ko="크루넥"
        )

        cls.lookbook = LookbookClothes.objects.create(
            image="/jennie/jn_1.png",
            member=cls.member,
            color=cls.color,
            category=cls.category,
        )
        cls.user = Fsuser.objects.create(email="user@fashion.com")

        cls.user_upload_clothes = UserUploadClothes.objects.create(
            image="/rose/rs_1.png", user=cls.user, lookbook_clothes=cls.lookbook
        )

        cls.user_upload_clothes_id = cls.user_upload_clothes.id

    def test_image_label(self):
        user_upload_clothes = UserUploadClothes.objects.get(
            id=self.user_upload_clothes_id
        )
        field_label = user_upload_clothes._meta.get_field("image").verbose_name
        self.assertEquals(field_label, "사용자 요청 이미지")

    def test_webpage_url_label(self):
        user_upload_clothes = UserUploadClothes.objects.get(
            id=self.user_upload_clothes_id
        )
        field_label = user_upload_clothes._meta.get_field("user").verbose_name
        self.assertEquals(field_label, "사용자")

    def test_webpage_url_label(self):
        user_upload_clothes = UserUploadClothes.objects.get(
            id=self.user_upload_clothes_id
        )
        field_label = user_upload_clothes._meta.get_field(
            "lookbook_clothes"
        ).verbose_name
        self.assertEquals(field_label, "룩북 의류")

    def test_image_value(self):
        user_upload_clothes = UserUploadClothes.objects.get(
            id=self.user_upload_clothes_id
        )
        self.assertEquals(user_upload_clothes.image.url, "/media/rose/rs_1.png")

    def test_user_url_value(self):
        user_upload_clothes = UserUploadClothes.objects.get(
            id=self.user_upload_clothes_id
        )
        self.assertEquals(user_upload_clothes.user, self.user)

    def test_lookbook_clothes_value(self):
        user_upload_clothes = UserUploadClothes.objects.get(
            id=self.user_upload_clothes_id
        )
        self.assertEquals(user_upload_clothes.lookbook_clothes, self.lookbook)

    def test_user_is_set_to_null_on_delete(self):
        self.user.delete()
        user_upload_clothes = UserUploadClothes.objects.get(
            id=self.user_upload_clothes_id
        )
        self.assertEquals(user_upload_clothes.user, None)

    def test_lookbook_clothes_is_set_to_null_on_delete(self):
        self.lookbook.delete()
        user_upload_clothes = UserUploadClothes.objects.get(
            id=self.user_upload_clothes_id
        )
        self.assertEquals(user_upload_clothes.lookbook_clothes, None)
