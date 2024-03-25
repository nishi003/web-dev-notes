from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_tasks')
    title = models.CharField(max_length=256)
    due_date = models.DateTimeField()
    detail = models.TextField(blank=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return "%s: %s"%(self.user.username, self.title)
