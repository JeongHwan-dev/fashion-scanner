from django.test import TestCase
from django.db import IntegrityError
from fsuser.models import Fsuser


class FsuserTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user_id = Fsuser.objects.create(email="user@fashion.com").id
        cls.staff_id = Fsuser.objects.create(email="staff@fashion.com", role="Staff").id
        cls.superuser_id = Fsuser.objects.create(
            email="superuser@fashion.com", role="Superuser"
        ).id

    def test_email_label(self):
        user = Fsuser.objects.get(id=self.user_id)
        field_label = user._meta.get_field("email").verbose_name
        self.assertEquals(field_label, "사용자 이메일")

    def test_password_label(self):
        user = Fsuser.objects.get(id=self.user_id)
        field_label = user._meta.get_field("password").verbose_name
        self.assertEquals(field_label, "비밀번호")

    def test_role_label(self):
        user = Fsuser.objects.get(id=self.user_id)
        field_label = user._meta.get_field("role").verbose_name
        self.assertEquals(field_label, "역할")

    def test_email_max_length(self):
        user = Fsuser.objects.get(id=self.user_id)
        max_length = user._meta.get_field("email").max_length
        self.assertEquals(max_length, 255)

    def test_password_max_length(self):
        user = Fsuser.objects.get(id=self.user_id)
        max_length = user._meta.get_field("password").max_length
        self.assertEquals(max_length, 128)

    def test_role_max_value(self):
        user = Fsuser.objects.get(id=self.user_id)
        max_length = user._meta.get_field("role").max_length
        self.assertEquals(max_length, 10)

    def test_email_value(self):
        user = Fsuser.objects.get(id=self.user_id)
        self.assertEquals(user.email, "user@fashion.com")

    def test_password_value(self):
        user = Fsuser.objects.get(id=self.user_id)
        self.assertEquals(user.password, "")

    def test_role_is_user(self):
        user = Fsuser.objects.get(id=self.user_id)
        self.assertEquals(user.role, "User")

    def test_role_is_staff(self):
        staff = Fsuser.objects.get(id=self.staff_id)
        self.assertEquals(staff.role, "Staff")

    def test_role_is_superuser(self):
        superuser = Fsuser.objects.get(id=self.superuser_id)
        self.assertEquals(superuser.role, "Superuser")

    def test_user_already_exist_exception(self):
        with self.assertRaises(IntegrityError):
            Fsuser.objects.create(email="user@fashion.com")

    def test_user_not_exist_exception(self):
        with self.assertRaises(Fsuser.DoesNotExist):
            Fsuser.objects.get(id=10)
