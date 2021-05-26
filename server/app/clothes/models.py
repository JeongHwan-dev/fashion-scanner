from django.db import models


class LookbookClothes(models.Model):
    id = models.AutoField(primary_key=True)
    file_path = models.TextField(blank=False, null=False, verbose_name="이미지 경로")
    registered_date = models.DateField(auto_now_add=True, verbose_name="등록 날짜")
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


class ShopClothes(models.Model):
    id = models.AutoField(primary_key=True)
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


class UserRequestClothes(models.Model):
    id = models.AutoField(primary_key=True)
    file_path = models.TextField(blank=False, null=False, verbose_name="이미지 경로")
    registered_date = models.DateField(auto_now_add=True, verbose_name="등록 날짜")
    user = models.ForeignKey(
        "fsuser.Fsuser",
        related_name="user_request_clothes",
        on_delete=models.SET_NULL,
        null=True,
        db_column="user_id",
        verbose_name="사용자",
    )
    lookbook_clothes = models.ForeignKey(
        "LookbookClothes",
        related_name="user_request_clothes",
        on_delete=models.SET_NULL,
        null=True,
        db_column="lookbook_clothes_id",
        verbose_name="룩북 의류",
    )

    def __str__(self):
        return f"사용자 요청 의류({self.id})"

    class Meta:
        db_table = "user_request_clothes"
        verbose_name = "사용자 요청 의류"
        verbose_name_plural = "사용자 요청 의류"
