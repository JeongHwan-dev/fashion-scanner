from django.contrib import admin
from .models import ClothesCategory, ClothesAttribute, Color


class ClothesCategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "category_name_en", "category_name_kr")


class ClothesAttributeAdmin(admin.ModelAdmin):
    list_display = ("id", "attribute_name_en", "attribute_name_kr")


class ColorAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "hex_code",
    )


admin.site.register(ClothesCategory, ClothesCategoryAdmin)
admin.site.register(ClothesAttribute, ClothesAttributeAdmin)
admin.site.register(Color, ColorAdmin)
