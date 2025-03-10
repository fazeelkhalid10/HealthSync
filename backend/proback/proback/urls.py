"""
URL configuration for proback project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include


from myapp import views
from myapp.views import getDoctor
from myapp.views import getDoctorbyId
urlpatterns = [
    path('admin/', admin.site.urls),
   path('getUser/',views.getUser,name="getUser"),
   path('getUsername/',views.getUsername,name="getUsername"),
   path('insertpatient/',views.insertpatient,name="insertpatient"),
   path('signupDoctor/',views.signupDoctor,name="signupDoctor"),
   path('getUser1/',views.getUser1,name="getUser1"),
    path('predict/', views.predict,name="predict"),

    path('getDoctor/', views.getDoctor, name='getDoctor'),
    path('getPatient/', views.getPatient, name='getPatient'),
    path('getDoctorfordesease/', views.getDoctorfordesease, name='getDoctorfordesease'),
    path('getbloodpressure/', views.getbloodpressure, name='getbloodpressure'),
    path('getbloodsugar/', views.getbloodsugar, name='getbloodsugar'),
    path('getDoctorbyId/<str:id>/', views.getDoctorbyId, name='getDoctorbyId'),
    path('insetschedule/', views.insetschedule, name='insetschedule'),
    path('api/medical-chatbot/', views.medical_chatbot, name='medical-chatbot'),
    



    


   





    
]
