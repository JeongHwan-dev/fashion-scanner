from django.test import TestCase
from member.models import BlackpinkMember
from clothes_style.models import Color


class BlackpinkMemberTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        _color = Color.objects.create(hex_code="8057AE")
        BlackpinkMember.objects.create(name="JISOO", color=_color)
        BlackpinkMember.objects.create(name="ROSE")

    def test_name_label(self):
        member = BlackpinkMember.objects.get(id=1)
        field_label = member._meta.get_field("name").verbose_name
        self.assertEquals(field_label, "멤버 이름")

    def test_color_label(self):
        member = BlackpinkMember.objects.get(id=1)
        field_label = member._meta.get_field("color").verbose_name
        self.assertEquals(field_label, "상징색")

    def test_name_max_length(self):
        member = BlackpinkMember.objects.get(id=1)
        max_length = member._meta.get_field("name").max_length
        self.assertEquals(max_length, 32)

    def test_color_db_column(self):
        member = BlackpinkMember.objects.get(id=1)
        db_column = member._meta.get_field("color").db_column
        self.assertEquals(db_column, "color_id")

    def test_name_value(self):
        member = BlackpinkMember.objects.get(id=1)
        self.assertEquals(member.name, "JISOO")

    def test_color_hex_code(self):
        member = BlackpinkMember.objects.get(id=1)
        self.assertEquals(member.color.hex_code, "8057AE")

    def test_color_is_none(self):
        member = BlackpinkMember.objects.select_related("color").get(id=2)
        self.assertEquals(member.color, None)

    def test_member_not_exist_exception(self):
        with self.assertRaises(BlackpinkMember.DoesNotExist):
            BlackpinkMember.objects.get(id=3)
