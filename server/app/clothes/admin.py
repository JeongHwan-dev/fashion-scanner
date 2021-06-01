from django.contrib import admin
from .models import LookbookClothes, ShopClothes, UserRequestClothes


class LookbookClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "member", "category", "registered_date")


class ShopClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "lookbook_clothes")


class UserRequestClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "request_date", "lookbook_clothes")


admin.site.register(LookbookClothes, LookbookClothesAdmin)
admin.site.register(ShopClothes, ShopClothesAdmin)
admin.site.register(UserRequestClothes, UserRequestClothesAdmin)