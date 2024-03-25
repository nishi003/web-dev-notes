from rest_framework.serializers import ModelSerializer, DateTimeField, ListField, \
    PrimaryKeyRelatedField, HyperlinkedRelatedField
from .models import Store, Product

class ProductSerializer(ModelSerializer):
    store = PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Product
        fields = '__all__'

class ProductInlineSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'price']

class BaseStoreSerializer(ModelSerializer):
    created_date = DateTimeField(read_only=True)
   
    class Meta:
        model = Store
        fields = '__all__'

class AdminStoreSerializer(BaseStoreSerializer):
    pass

class UserStoreSerializer(BaseStoreSerializer):
    owner = PrimaryKeyRelatedField(read_only=True)
    products = ListField(child=ProductInlineSerializer(), write_only=True, required=False)

