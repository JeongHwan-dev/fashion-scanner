from django.contrib import admin
from .models import LookbookClothes, ShopClothes, UserRequestClothes


class LookbookClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "member", "category")


class ShopClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "lookbook_clothes")


class UserRequestClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "registered_date")


admin.site.register(LookbookClothes, LookbookClothesAdmin)
admin.site.register(ShopClothes, ShopClothesAdmin)
admin.site.register(UserRequestClothes, UserRequestClothesAdmin)
