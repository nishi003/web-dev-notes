from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Topic, Reply

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class TopicSerializer(serializers.ModelSerializer):
    num_replies = serializers.SerializerMethodField()
    user = UserSerializer(read_only=True)

    def get_num_replies(self, topic):
        return topic.replies.all().count()

    class Meta:
        model = Topic
        fields = '__all__'
        read_only_fields = ['last_active']
        extra_kwargs = {'text': {'write_only': True}}

#
# TODO: complete the ReplySerializer so that when deserializing, 
#       i.e., receiving request, it will accept only the text field.
#

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['text']
        read_only_fields = ['create_time']

#
# TODO: complete the TopicReplySerializer so that when serializing,
#       i.e., sending response, it will include all fields in the
#       Topic model. In addition, it should have a 'replies' field
#       which should be an array of all Reply objects that belong to
#       this topic. Lastly, all User objects in the Topic and Reply 
#       models should be nested (see handout for an example).
# HINT: Take a look at the TopicSerializer for an example of nesting
#       a User object. 

class TopicReplySerializer(serializers.ModelSerializer):
    replies = ReplySerializer(many=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Topic
        fields = '__all__'