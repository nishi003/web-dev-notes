from django.db import models
from .store import Store

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=0., help_text="How much is it?")
    store = models.ForeignKey(Store, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.name}"
