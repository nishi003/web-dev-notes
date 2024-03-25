from django import forms
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ValidationError

class LoginForm(forms.Form):
    username = forms.CharField(max_length=150)
    password = forms.CharField(widget=forms.PasswordInput())

    def clean(self):
        data = super().clean()
        user = authenticate(username=data.get('username'), password=data.get('password'))
        if not user:
            raise ValidationError({
                'username' : 'Invalid username and password combination'}
            )
        data['user'] = user
        return data

class SignupForm(UserCreationForm):   
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
        error_messages = {
            'email' : {
                'invalid' : "Your email address makes no sense.",
            }
        }
