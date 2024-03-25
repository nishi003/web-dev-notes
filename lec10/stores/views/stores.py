from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAdminUser
from ..models import Store, Product
from ..serializers import AdminStoreSerializer, UserStoreSerializer, BaseStoreSerializer, \
    ProductSerializer

class UserStoresRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    # we allow the user to switch the owner to someone else
    serializer_class = BaseStoreSerializer
    def get_object(self):
        return get_object_or_404(Store, id=self.kwargs['pk'], owner=self.request.user)

class UserStoresListCreate(ListCreateAPIView):
    serializer_class = UserStoreSerializer
    
    def get_queryset(self):
        return Store.objects.filter(owner=self.request.user)
    
    def perform_create(self, serializer):
        # remove products from the form data
        products = serializer.validated_data.pop('products', tuple())

        # save the store first (otherwise products won't have a store to refer to)
        store = Store.objects.create(**serializer.validated_data, owner=self.request.user)

        # for each product in products, create new product
        for product_data in products:
            Product.objects.create(**product_data, store=store)
        
class UserProductsListCreate(ListCreateAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(store=self.kwargs['pk'])
    
    def perform_create(self, serializer):
        store = get_object_or_404(Store, pk=self.kwargs['pk'])
        serializer.save(store=store)

class AdminStoresListCreate(ListCreateAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = AdminStoreSerializer
    queryset = Store.objects.all()

class AdminStoresRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = AdminStoreSerializer
    def get_object(self):
        return get_object_or_404(Store, id=self.kwargs['pk'])
