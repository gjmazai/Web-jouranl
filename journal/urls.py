from .api import StudentViewSet, StudentInGroupViewSet, GroupViewSet, SubjectViewSet, LessonViewSet, ProgressViewSet
from rest_framework import routers
from django.urls import path


router = routers.DefaultRouter()
router.register('Student', StudentViewSet, 'Student')
router.register('StudentInGroup', StudentInGroupViewSet, 'StudentInGroup')
router.register('Group', GroupViewSet, 'Group')
router.register('Subject', SubjectViewSet, 'Subject')
router.register('Lesson', LessonViewSet, 'Lesson')
router.register('Progress', ProgressViewSet, 'Progress')

urlpatterns = router.urls
