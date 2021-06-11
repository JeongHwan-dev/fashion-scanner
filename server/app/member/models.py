from django.db import models


class BlackpinkMember(models.Model):
    name = models.CharField(max_length=32, verbose_name="멤버 이름")
    color = models.OneToOneField(
        "clothes_style.Color",
        related_name="member",
        on_delete=models.SET_NULL,
        null=True,
        db_column="color_id",
        verbose_name="상징색",
    )

    def __str__(self):
        return f"{self.name}({self.id})"

    class Meta:
        db_table = "blackpink_member"
        verbose_name = "블랙핑크 멤버"
        verbose_name_plural = "블랙핑크 멤버"
        ordering = ["id"]
