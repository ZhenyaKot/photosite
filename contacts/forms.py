from django import forms
from contacts.models import Client


class ContactForms(forms.ModelForm):
    name = forms.CharField(max_length=100, required=True)
    email = forms.EmailField(required=True)
    phone = forms.CharField(max_length=20, required=True)

    class Meta:
        model = Client
        fields = ('name', 'email', 'phone',)
