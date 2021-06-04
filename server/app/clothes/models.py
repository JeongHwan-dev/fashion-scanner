import os
import uuid
from django.db import models


def image_upload_to(instance, filename):
    return os.path.join(instance.UPLOAD_PATH, f"{filename}")


def image_upload_to_with_uuid(instance, filename):
    ext = filename.split(".")[-1]
    return os.path.join(instance.UPLOAD_PATH, f"{uuid.uuid4()}.{ext}")


class LookbookClothes(models.Model):
    UPLOAD_PATH = "lookbook"

    image = models.ImageField(
        upload_to=image_upload_to,
        verbose_name="룩북 이미지",
    )
    registered_date = models.DateTimeField(auto_now_add=True, verbose_name="등록 날짜")
    member = models.ForeignKey(
        "member.BlackpinkMember",
        related_name="lookbook_clothes",
        on_delete=models.SET_NULL,
        null=True,
        db_column="member_id",
        verbose_name="블랙핑크 멤버",
    )
    color = models.ForeignKey(
        "clothes_style.Color",
        related_name="lookbook_clothes",
        on_delete=models.SET_NULL,
        null=True,
        db_column="color_id",
        verbose_name="의류 색상",
    )
    category = models.ForeignKey(
        "clothes_style.ClothesCategory",
        related_name="lookbook_clothes",
        on_delete=models.SET_NULL,
        null=True,
        db_column="clothes_category_id",
        verbose_name="의류 카테고리",
    )
    attributes = models.ManyToManyField(
        "clothes_style.ClothesAttribute",
        related_name="lookbook_clothes",
        db_column="clothes_attributes",
        verbose_name="의류 속성",
    )

    def __str__(self):
        return f"룩북 의류({self.id})"

    class Meta:
        db_table = "lookbook_clothes"
        verbose_name = "룩북 의류"
        verbose_name_plural = "룩북 의류"
        ordering = ["registered_date"]


class ShopClothes(models.Model):
    UPLOAD_PATH = "shop-crawling"

    image = models.ImageField(
        upload_to=image_upload_to,
        default=f"{UPLOAD_PATH}/data.png",
        verbose_name="쇼핑몰 의류 이미지",
    )
    webpage_url = models.TextField(blank=False, null=False, verbose_name="웹 페이지 URL")
    lookbook_clothes = models.ForeignKey(
        "LookbookClothes",
        related_name="shop_clothes",
        on_delete=models.SET_NULL,
        null=True,
        db_column="lookbook_clothes_id",
        verbose_name="룩북 의류",
    )

    def __str__(self):
        return f"쇼핑몰 의류({self.id})"

    class Meta:
        db_table = "shop_clothes"
        verbose_name = "쇼핑몰 의류"
        verbose_name_plural = "쇼핑몰 의류"
        ordering = ["id"]


class UserUploadClothes(models.Model):
    UPLOAD_PATH = "user-upload"

    image = models.ImageField(
        upload_to=image_upload_to_with_uuid,
        verbose_name="사용자 요청 이미지",
    )
    upload_date = models.DateTimeField(auto_now_add=True, verbose_name="등록 날짜")
    user = models.ForeignKey(
        "fsuser.Fsuser",
        related_name="user_upload_clothes",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        db_column="user_id",
        verbose_name="사용자",
    )
    lookbook_clothes = models.ForeignKey(
        "LookbookClothes",
        related_name="user_upload_clothes",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        db_column="lookbook_clothes_id",
        verbose_name="룩북 의류",
    )

    def save(self, *args, **kwargs):
        self.full_clean()

        super().save(*args, **kwargs)

    def __str__(self):
        return f"사용자 요청 의류({self.id})"

    class Meta:
        db_table = "user_upload_clothes"
        verbose_name = "사용자 요청 의류"
        verbose_name_plural = "사용자 요청 의류"
        ordering = ["upload_date"]
