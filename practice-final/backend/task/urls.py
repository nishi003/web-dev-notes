from django.urls import path
from .views import TaskListCreate

urlpatterns = [
    path('', TaskListCreate.as_view()),
  
    # TODO: add an endpoint that allows user to update the completed field of a task
     
]