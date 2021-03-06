# Generated by Django 3.2.3 on 2021-06-07 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClothesAttribute',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_en', models.CharField(max_length=32, unique=True, verbose_name='의류 속성 영어')),
                ('name_ko', models.CharField(max_length=32, verbose_name='의류 속성 한국어')),
            ],
            options={
                'verbose_name': '의류 속성',
                'verbose_name_plural': '의류 속성',
                'db_table': 'clothes_attribute',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='ClothesCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_en', models.CharField(max_length=32, unique=True, verbose_name='의류 카테고리 영어')),
                ('name_ko', models.CharField(max_length=32, verbose_name='의류 카테고리 한국어')),
            ],
            options={
                'verbose_name': '의류 카테고리',
                'verbose_name_plural': '의류 카테고리',
                'db_table': 'clothes_category',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hex_code', models.CharField(max_length=6, unique=True, verbose_name='색상 코드')),
            ],
            options={
                'verbose_name': '색상',
                'verbose_name_plural': '색상',
                'db_table': 'color',
                'ordering': ['id'],
            },
        ),
    ]
