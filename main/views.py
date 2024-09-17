from django.shortcuts import render

from django.http import HttpResponse



def index(request):
    context = {
        'title': 'Фотограф Meri Mazi',
        'content_1': 'Фотограф',
        'content_2': 'Meri Mazi',

    }
    return render(request, 'main/index.html', context)
