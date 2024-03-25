from django.contrib.auth.models import User
from django.db import models

class AddressBook(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.name}"

class ContactGroup(models.Model):
    name = models.CharField(max_length=255)
    book = models.ForeignKey(AddressBook, on_delete=models.CASCADE)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, 
                               null=True, blank=True)

class Contact(models.Model):
    name = models.CharField(max_length=255)
    fax = models.CharField(max_length=32)
    email = models.EmailField()
    method = models.CharField(max_length=32, blank=True)
    book = models.ForeignKey(AddressBook, on_delete=models.CASCADE)
    groups = models.ManyToManyField(ContactGroup, blank=True)