from django.db import models

class BlackpinkMember(models.Model):
    id = models.AutoField(primary_key=True)
    member_name = models.CharField(max_length=32, blank=False, null=False)
    color = models.OneToOneField("clothes_style.Color", related_name="member", on_delete=models.CASCADE, db_column="color_id")

    class Meta:
        db_table = 'blakpink_member'
        verbose_name = '의류 카테고리'
        verbose_name_plural = '의류 카테고리'
