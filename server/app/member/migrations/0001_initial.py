# Generated by Django 3.2.3 on 2021-06-07 20:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clothes_style', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlackpinkMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, verbose_name='멤버 이름')),
                ('color', models.OneToOneField(db_column='color_id', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='member', to='clothes_style.color', verbose_name='상징색')),
            ],
            options={
                'verbose_name': '블랙핑크 멤버',
                'verbose_name_plural': '블랙핑크 멤버',
                'db_table': 'blackpink_member',
                'ordering': ['id'],
            },
        ),
    ]
