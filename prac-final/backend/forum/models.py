from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    text = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    class Meta:
        abstract = True

class Topic(Post):
    title = models.CharField(max_length=255)
    last_active = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title

class Reply(Post):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, 
                              related_name='replies')
    create_time = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'replies'

    def __str__(self):
        return 'Re: ' + self.topic.title
