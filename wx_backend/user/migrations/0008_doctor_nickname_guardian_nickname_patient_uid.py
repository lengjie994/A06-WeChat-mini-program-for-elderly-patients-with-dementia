# Generated by Django 4.2.5 on 2023-12-22 13:28

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0007_guardian_chatlist_guardian_flag"),
    ]

    operations = [
        migrations.AddField(
            model_name="doctor",
            name="Nickname",
            field=models.CharField(default="UNDEFINED", max_length=200),
        ),
        migrations.AddField(
            model_name="guardian",
            name="Nickname",
            field=models.CharField(default="UNDEFINED", max_length=200),
        ),
        migrations.AddField(
            model_name="patient",
            name="Uid",
            field=models.CharField(default="UNDEFINED", max_length=200),
        ),
    ]
