from django.db import models
from datetime import datetime


# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=20, verbose_name='Номер телефона')
    created_at = models.DateTimeField(default=datetime.now)  # Для хранения времени создания

    class Meta:
        db_table = 'client'
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'

    def __str__(self):
        return self.name
