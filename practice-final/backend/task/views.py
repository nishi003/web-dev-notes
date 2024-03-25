from rest_framework.generics import ListCreateAPIView
from .serializers import TaskSerializer


class TaskListCreate(ListCreateAPIView):
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        return user.my_tasks.all().order_by("completed", "due_date")

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# TODO: add an API view that updates the completed field of a Task
# NOTE: you will need to add more imports
