from django.db import models
from django.utils.translation import gettext_lazy as _

class Fsuser(models.Model):

    class UserRole(models.TextChoices):
        USER = 'User', _('User')
        ADMIN = 'Admin', _('Admin')

    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True, verbose_name='이메일')
    password = models.CharField(max_length=128, verbose_name='비밀번호')
    registered_date = models.DateTimeField(auto_now_add=True, verbose_name='등록 날짜')
    role = models.CharField(max_length=5, choices=UserRole.choices, default=UserRole.USER, verbose_name='역할')

    def __str__(self):
        return f'{self.email}'

    class Meta:
        db_table = 'fs_user'
        verbose_name = '사용자'
        verbose_name_plural = '사용자'

