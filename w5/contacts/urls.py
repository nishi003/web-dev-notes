from django.urls import path
from . import views

app_name="contacts"
urlpatterns = [ 
    path('create/', views.add_contact, name="create"),
]
