from django.urls import path
from . import views

urlpatterns = [
    path("<int:pk>/lookbook/", views.MemberLookbookAPIView.as_view()),
]
