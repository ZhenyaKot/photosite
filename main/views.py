from django.shortcuts import render, redirect
from contacts.models import Client
from contacts.forms import ContactForms
from django.http import HttpResponse
from django.contrib import messages
from django.core.mail import send_mail



def index(request):
    if request.method == 'POST':
        form = ContactForms(data=request.POST)
        if form.is_valid():
            name = request.POST['name']
            email = request.POST['email']
            phone = request.POST['phone']
            form.save()
            messages.success(request, f'заявка подана, я свяжусь с вами в скором времени')
    else:
        form = ContactForms()

    context = {
        'title': 'Фотограф Meri Mazi',
        'content_1': 'Фотограф',
        'content_2': 'Meri Mazi',
        'form': form
    }
    return render(request, 'main/index.html', context)
