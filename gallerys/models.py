import datetime

from django.db import models
from django.utils import timezone


# Create your models here.

class Categories(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название')
    slug = models.SlugField(max_length=150, unique=True, blank=True, null=True, verbose_name='URL')

    class Meta:
        db_table = 'category'
        verbose_name = 'Категорию'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name


class Photoshoot(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название')
    slug = models.SlugField(max_length=150, unique=True, blank=True, null=True, verbose_name='URL')
    description = models.TextField(blank=True, null=True, verbose_name='Описание')
    shooting_date = models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='Дата Съемки')
    category = models.ForeignKey(to=Categories, on_delete=models.CASCADE, verbose_name='Категория')

    class Meta:
        db_table = 'photoshoot'
        verbose_name = 'Фотосъемку'
        verbose_name_plural = 'Фотосъемки'

    def __str__(self):
        return self.name


class Photo(models.Model):
    image = models.ImageField(upload_to='gallerys_images/', blank=True, null=True, verbose_name='Фотография')
    photoshoot = models.ForeignKey(to=Photoshoot, related_name='photos', on_delete=models.CASCADE,
                                   verbose_name='Фотосъемка')

    class Meta:
        db_table = 'photo'
        verbose_name = 'Фотографию'
        verbose_name_plural = 'Фотографии'
        ordering = ('id',)

    def __str__(self):
        return f'Photo for {self.photoshoot.name}'
