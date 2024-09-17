from django.shortcuts import render

from django.http import HttpResponse


context = {
    'title': 'Фотограф Meri Mazi',
    'content_1': 'Фотограф',
    'content_2': 'Meri Mazi',


}
def index(request):

    return render(request, 'main/index.html', context)
