from django.contrib import admin
from .models import Topic, Reply

class ReplyInline(admin.TabularInline):
    model = Reply
    extra = 1

@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ['user', 'title', 'last_active']
    inlines = [
        ReplyInline,
    ]

@admin.register(Reply)
class ReplyAdmin(admin.ModelAdmin):
    list_display = ['user', 'topic', 'create_time']