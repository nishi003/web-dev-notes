from django.urls import path
from . import views

urlpatterns = [ 
    path('user/stores/', views.UserStoresListCreate.as_view()),
    path('user/stores/<int:pk>/', views.UserStoresRetrieveUpdateDestroy.as_view()),
    path('user/stores/<int:pk>/products/', views.UserProductsListCreate.as_view()),
    path('super/stores/', views.AdminStoresListCreate.as_view()),
    path('super/stores/<int:pk>/', views.AdminStoresRetrieveUpdateDestroy.as_view()),
]
