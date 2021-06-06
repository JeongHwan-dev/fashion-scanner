from django.contrib import admin
from .models import BlackpinkMember


class BlackpinkMemberAdmin(admin.ModelAdmin):
    list_display = ("name", "color")


admin.site.register(BlackpinkMember, BlackpinkMemberAdmin)
