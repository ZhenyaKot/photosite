from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from contacts.forms import ContactForms
from django.contrib import messages
from django.urls import reverse

from contacts.models import Client


# Create your views here.

def contact(request):
    if request.method == 'POST':
        form = ContactForms(data=request.POST)
        if form.is_valid():
            # contact_request = {
            #     'name': form.cleaned_data['name'],  # Используем очищенные данные формы
            #     'email': form.cleaned_data['email'],
            #     'phone': form.cleaned_data['phone']
            # }
            # new_contact = Client(**contact_request)
            # new_contact.save()  # Сохраняем данные в модель
            name = request.POST['name']
            email = request.POST['email']
            phone = request.POST['phone']
            form.save()
            messages.success(request, f'заявка подана, я свяжусь с вами в скором времени')
    else:
        form = ContactForms()

    context = {'form': form}

    return render(request, 'contacts/contacts.html', context)
