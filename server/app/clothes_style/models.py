from django.db import models


class ClothesCategory(models.Model):
    name_en = models.CharField(
        max_length=32, unique=True, verbose_name="의류 카테고리 영어"
    )
    name_ko = models.CharField(
        max_length=32, verbose_name="의류 카테고리 한국어"
    )

    def __str__(self):
        return f"{self.name_en}({self.name_ko})"

    class Meta:
        db_table = "clothes_category"
        verbose_name = "의류 카테고리"
        verbose_name_plural = "의류 카테고리"
        ordering = ["id"]


class ClothesAttribute(models.Model):
    name_en = models.CharField(
        max_length=32, unique=True, verbose_name="의류 속성 영어"
    )
    name_ko = models.CharField(
        max_length=32, verbose_name="의류 속성 한국어"
    )

    def __str__(self):
        return f"{self.name_en}({self.name_ko})"

    class Meta:
        db_table = "clothes_attribute"
        verbose_name = "의류 속성"
        verbose_name_plural = "의류 속성"
        ordering = ["id"]


class Color(models.Model):
    hex_code = models.CharField(
        max_length=6, unique=True, verbose_name="색상 코드"
    )

    def __str__(self):
        return f"{self.hex_code}({self.id})"

    class Meta:
        db_table = "color"
        verbose_name = "색상"
        verbose_name_plural = "색상"
        ordering = ["id"]
