from django.contrib import admin
from .models import LookbookClothes, ShopClothes, UserUploadClothes


class LookbookClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "member", "category", "registered_date")


class ShopClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "lookbook_clothes")


class UserUploadClothesAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "upload_date", "lookbook_clothes")


admin.site.register(LookbookClothes, LookbookClothesAdmin)
admin.site.register(ShopClothes, ShopClothesAdmin)
admin.site.register(UserUploadClothes, UserUploadClothesAdmin)
