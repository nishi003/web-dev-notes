from rest_framework.generics import ListCreateAPIView, \
    CreateAPIView, RetrieveAPIView
from .serializers import TopicSerializer, ReplySerializer, \
    TopicReplySerializer
from .models import Topic
from django.shortcuts import get_object_or_404

class TopicListCreate(ListCreateAPIView):
    serializer_class = TopicSerializer

    def get_queryset(self):
        return Topic.objects.all().order_by('-last_active')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class TopicRetrieve(RetrieveAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicReplySerializer

#
# TODO: complete the ReplyCreate view
# HINT: understand what is implicit in the request, 
#       i.e., not sent as part of the request body.
#

class ReplyCreate(CreateAPIView):
    serializer_class = ReplySerializer

    def perform_create(self, serializer):
        topic = get_object_or_404(Topic, id=self.kwargs["pk"])
        topic.save()
        serializer.save(user=self.request.user, topic=topic)
        return super().perform_create(serializer)