# Generated by Django 4.2.5 on 2023-11-21 11:53

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="GlobalVariables",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("AppId", models.CharField(max_length=100)),
                ("SecretId", models.CharField(max_length=100)),
                ("AccessToken", models.CharField(default="UNDEFINED", max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("username", models.CharField(max_length=100)),
                ("password", models.CharField(max_length=100)),
                ("session", models.CharField(max_length=100)),
                ("role", models.CharField(max_length=100)),
            ],
        ),
    ]
