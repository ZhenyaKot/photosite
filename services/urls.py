from django.urls import path
from services import views

app_name = 'services'

urlpatterns = [
    path('', views.index, name='index'),
    path('shooting_type/<slug:category_slug>/', views.shooting_type, name='shooting_type'),
]
