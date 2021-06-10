from django.test import TestCase
from member.models import BlackpinkMember
from clothes_style.models import Color


class BlackpinkMemberTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.color = Color.objects.create(hex_code="FFFFFF")
        cls.member_id = BlackpinkMember.objects.create(name="JISOO", color=cls.color).id

    def test_name_label(self):
        member = BlackpinkMember.objects.get(id=self.member_id)
        field_label = member._meta.get_field("name").verbose_name
        self.assertEquals(field_label, "멤버 이름")

    def test_color_label(self):
        member = BlackpinkMember.objects.get(id=self.member_id)
        field_label = member._meta.get_field("color").verbose_name
        self.assertEquals(field_label, "상징색")

    def test_name_max_length(self):
        member = BlackpinkMember.objects.get(id=self.member_id)
        max_length = member._meta.get_field("name").max_length
        self.assertEquals(max_length, 32)

    def test_color_db_column(self):
        member = BlackpinkMember.objects.get(id=self.member_id)
        db_column = member._meta.get_field("color").db_column
        self.assertEquals(db_column, "color_id")

    def test_name_value(self):
        member = BlackpinkMember.objects.get(id=self.member_id)
        self.assertEquals(member.name, "JISOO")

    def test_member_color_hex_code(self):
        member = BlackpinkMember.objects.get(id=self.member_id)
        self.assertEquals(member.color.hex_code, "FFFFFF")

    def test_color_is_none(self):
        member = BlackpinkMember.objects.create(name="ROSE")
        self.assertEquals(member.color, None)

    def test_member_not_exist_exception(self):
        with self.assertRaises(BlackpinkMember.DoesNotExist):
            BlackpinkMember.objects.get(id=10)
