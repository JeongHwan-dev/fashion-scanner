from django.db import models

class LookbookClothes(models.Model):
    id = models.AutoField(primary_key=True)
    file_path = models.TextField(blank=False, null=False)
    registered_date = models.DateField(auto_now_add=True)
    member = models.ForeignKey("member.BlackpinkMember", related_name="lookbook_clothes", on_delete=models.CASCADE, db_column="member_id")
    color = models.ForeignKey("clothes_style.Color", related_name="lookbook_clothes", on_delete=models.CASCADE, db_column="color_id")
    category = models.ForeignKey("clothes_style.ClothesCategory", related_name="lookbook_clothes", on_delete=models.CASCADE, db_column="clothes_category_id")
    attributes = models.ManyToManyField("clothes_style.ClothesAttribute", related_name="lookbook_clothes", db_column="clothes_attributes")


    class Meta:
        db_table = 'lookbook_clothes'
        verbose_name = '룩북 의류'
        verbose_name_plural = '룩북 의류'
        

class ShopClothes(models.Model):
    id = models.AutoField(primary_key=True)
    webpage_url = models.TextField(blank=False, null=False)
    lookbook_clothes = models.ForeignKey("LookbookClothes", related_name="shop_clothes", on_delete=models.CASCADE, db_column="lookbook_clothes_id")
    

    class Meta:
        db_table = 'shop_clothes'
        verbose_name = '쇼핑몰 의류'
        verbose_name_plural = '쇼핑몰 의류'


class UserRequestClothes(models.Model):
    id = models.AutoField(primary_key=True)
    file_path = models.TextField(blank=False, null=False)
    registered_date = models.DateField(auto_now_add=True)
    lookbook_clothes = models.ForeignKey("LookbookClothes", related_name="user_request_clothes", on_delete=models.CASCADE, db_column="lookbook_clothes_id")
    user = models.ForeignKey("fsuser.Fsuser", related_name="user_request_clothes", on_delete=models.CASCADE, db_column="user_id")

    class Meta:
        db_table = 'user_request_clothes'
        verbose_name = '사용자 요청 의류'
        verbose_name_plural = '사용자 요청 의류'
