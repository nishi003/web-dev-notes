from django.contrib import admin
from .models import Contact, ContactGroup, AddressBook

# Register your models here.
admin.site.register(Contact)
admin.site.register(ContactGroup)
admin.site.register(AddressBook)