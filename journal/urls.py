from .api import StudentViewSet, StudentInGroupViewSet, GroupViewSet, SubjectViewSet, LessonViewSet, ProgressViewSet
from rest_framework import routers
from django.urls import path
from . import views
from django.urls import path


router = routers.DefaultRouter()
router.register('Student', StudentViewSet, 'Student')
router.register('StudentInGroup', StudentInGroupViewSet, 'StudentInGroup')
router.register('Group', GroupViewSet, 'Group')
router.register('Subject', SubjectViewSet, 'Subject')
router.register('Lesson', LessonViewSet, 'Lesson')
router.register('Progress', ProgressViewSet, 'Progress')


urlpatterns = [
    path('subject', views.subject_list, name='subject_list'),
    path('subject_detail/<int:pk>', views.subject_detail, name='subject_detail'),
]

urlpatterns += router.urls
