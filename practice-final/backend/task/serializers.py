from rest_framework.serializers import ModelSerializer, BooleanField
from .models import Task

class TaskSerializer(ModelSerializer):
    completed = BooleanField(read_only=True)
    class Meta:
        model = Task
        exclude = [ 'user', ]

# TODO: add a serializer that only updates a Task's completed field