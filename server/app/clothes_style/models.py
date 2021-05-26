from django.db import models

class ClothesCategory(models.Model):
    id = models.AutoField(primary_key=True)
    category_name_en = models.CharField(max_length=32, blank=False, null=False)
    category_name_kr = models.CharField(max_length=32, blank=False, null=False)

    class Meta:
        db_table = 'clothes_category'
        verbose_name = '의류 카테고리'
        verbose_name_plural = '의류 카테고리'


class ClothesAttributes(models.Model):
    id = models.AutoField(primary_key=True)
    attribute_name_en = models.CharField(max_length=32, blank=False, null=False)
    attribute_name_kr = models.CharField(max_length=32, blank=False, null=False)

    class Meta:
        db_table = 'clothes_attribute'
        verbose_name = '의류 속성'
        verbose_name_plural = '의류 속성'


class Color(models.Model):
    id = models.AutoField(primary_key=True)
    hex_code = models.CharField(max_length=32, blank=False, null=False)

    class Meta:
        db_table = 'color'
        verbose_name = '색상'
        verbose_name_plural = '색상'
