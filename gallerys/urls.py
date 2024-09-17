from django.urls import path
from gallerys import views

app_name = 'gallerys'

urlpatterns = [
    path('catalog/', views.catalog, name='catalog'),
    path('gallery/<int:photoshoot_id>', views.photo, name='photo'),
    path('genre/', views.genre, name='genre'),
]
