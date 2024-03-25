from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as login_user, \
                                logout as logout_user
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse, reverse_lazy
from django.views.generic.edit import FormView, CreateView, DeleteView
from django.views.generic.list import ListView
from .forms import LoginForm, SignupForm

class LoginView(FormView):
    form_class = LoginForm
    template_name = 'accounts/login.html'
    success_url = reverse_lazy('accounts:admin')
    def form_valid(self, form):
        login_user(self.request, form.cleaned_data['user'])
        return super().form_valid(form)

def logout(request):
    logout_user(request)
    request.session['from'] = 'logout'
    return redirect(reverse('accounts:welcome'))

class SignupView(CreateView):
    form_class = SignupForm
    template_name = 'accounts/signup.html'
    success_url = reverse_lazy('accounts:welcome')
    
    # note that ModelForm saves object automatically
    def form_valid(self, form):
        self.request.session['from'] = 'signup' 
        return super().form_valid(form)

@login_required(login_url=reverse_lazy('accounts:login'))
def admin(request):
    keyword = request.GET.get('filter', '')
    return render(request, "accounts/admin.html", {
        'user_list' : User.objects.filter(username__icontains=keyword),
    })

class DeleteUserView(LoginRequiredMixin, DeleteView):
    model = User
    login_url = reverse_lazy('accounts:login')
    success_url = reverse_lazy('accounts:admin')

def welcome(request):
    from_view = request.session.pop('from', '')
    if request.user.is_authenticated:
        return redirect(reverse('accounts:admin'))
    return render(request, "accounts/welcome.html", {
        'from' : from_view,
    })
