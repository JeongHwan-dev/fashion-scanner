from django.urls import path
from . import views

urlpatterns = [
    path("matching", views.UserMemberMatchingAPIView.as_view()),
    path("request", views.UserRequestImageAPIView.as_view()),
]
