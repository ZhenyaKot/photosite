from django.urls import path
from gallerys import views

app_name = 'gallerys'

urlpatterns = [
    path('catalog/<slug:category_slug>/', views.catalog, name='catalog'),
    path('photo/<slug:photoshoot_slug>/', views.photo, name='photo'),
    path('genre/', views.genre, name='genre'),
]
