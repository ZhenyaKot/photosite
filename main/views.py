from django.shortcuts import render

from django.http import HttpResponse


def index(request):
    context = {
        'title': 'Фотограф Meriii Mazi',

    }

    return render(request, 'main/index.html', context)
