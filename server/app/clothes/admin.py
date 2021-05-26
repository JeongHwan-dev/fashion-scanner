from django.contrib import admin
from .models import LookbookClothes, ShopClothes, UserRequestClothes


class LookbookClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "member_id", "category_id", "registered_date")


class ShopClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "lookbook_clothes_id")


class UserRequestClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "user_id", "request_date", "lookbook_clothes_id")


admin.site.register(LookbookClothes, LookbookClothesAdmin)
admin.site.register(ShopClothes, ShopClothesAdmin)
admin.site.register(UserRequestClothes, UserRequestClothesAdmin)
