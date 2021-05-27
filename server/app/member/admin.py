from django.contrib import admin
from .models import BlackpinkMember


class BlackpinkMemberAdmin(admin.ModelAdmin):
    list_display = ("id", "member_name", "color_id")


admin.site.register(BlackpinkMember, BlackpinkMemberAdmin)
