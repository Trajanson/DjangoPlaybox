from django.conf.urls import include, url
from .                import views

urlpatterns = [
    url(r'^$', views.landing),
    url(r'^comment/$', views.register_new_comment),
]
