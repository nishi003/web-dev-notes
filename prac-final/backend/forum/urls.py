from django.urls import path
from .views import TopicListCreate, ReplyCreate, TopicRetrieve

urlpatterns = [
    path('', TopicListCreate.as_view()),
    path('<int:pk>/', TopicRetrieve.as_view()),
    path('<int:pk>/reply/', ReplyCreate.as_view()),
]
