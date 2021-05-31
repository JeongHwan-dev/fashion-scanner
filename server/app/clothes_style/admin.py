from django.contrib import admin
from .models import ClothesCategory, ClothesAttribute, Color


class ClothesCategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name_en", "name_kr")


class ClothesAttributeAdmin(admin.ModelAdmin):
    list_display = ("id", "name_en", "name_kr")


class ColorAdmin(admin.ModelAdmin):
    list_display = ("id", "hex_code",)


admin.site.register(ClothesCategory, ClothesCategoryAdmin)
admin.site.register(ClothesAttribute, ClothesAttributeAdmin)
admin.site.register(Color, ColorAdmin)
