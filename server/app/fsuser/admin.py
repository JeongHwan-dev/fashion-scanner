from django.contrib import admin
from .models import Fsuser


class FsuserAdmin(admin.ModelAdmin):
    list_display = ("email", "registered_date")


admin.site.register(Fsuser, FsuserAdmin)
