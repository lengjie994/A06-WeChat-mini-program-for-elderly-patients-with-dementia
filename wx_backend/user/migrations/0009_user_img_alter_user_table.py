# Generated by Django 4.2.5 on 2023-12-24 11:58

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0008_doctor_nickname_guardian_nickname_patient_uid"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="img",
            field=models.ImageField(
                default="images/default.jpg", upload_to="lalallalalal"
            ),
        ),
        migrations.AlterModelTable(
            name="user",
            table="user",
        ),
    ]