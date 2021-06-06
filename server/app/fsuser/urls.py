from django.urls import path
from . import views

urlpatterns = [
    path("request", views.UserRequestImageAPIView.as_view()),
]
