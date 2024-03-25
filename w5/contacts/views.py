from django.shortcuts import render, redirect
from django.http import HttpResponseNotAllowed
from django.forms import ModelForm
from .models import Contact

class ContactForm(ModelForm):
    class Meta:
        model = Contact
        exclude = [ 'groups', ]
        labels = {
            'book' : "Address Book",
        }

def user_owns_address_book(request, form):
    return request.user == form.cleaned_data['book'].user

# this assumes user and address book already exists
def add_contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid() and user_owns_address_book(request, form):
            form.save()
            return redirect("contacts:create")
    elif request.method == "GET":
        form = ContactForm()
    else:
        return HttpResponseNotAllowed()
    return render(request, "contacts/create.html", {
        "form" : form,
    })

