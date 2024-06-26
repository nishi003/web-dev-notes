from django.urls import path
from . import views

app_name="accounts"
urlpatterns = [ 
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('login/', views.LoginView.as_view(), name="login"),
    path('logout/', views.logout, name="logout"),
    path('admin/', views.admin, name="admin"),
    path('delete/<int:pk>/', views.DeleteUserView.as_view(), name='delete'),
    path('', views.welcome, name="welcome"),
]
