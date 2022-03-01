from .api import StudentViewSet, StudentInGroupViewSet, GroupViewSet, SubjectViewSet, LessonViewSet, ProgressViewSet
from rest_framework import routers
from django.urls import path

router = routers.DefaultRouter()
router.register('api/Student', StudentViewSet, 'Student')
router.register('api/StudentInGroup', StudentInGroupViewSet, 'StudentInGroup')
router.register('api/Group', GroupViewSet, 'Group')
router.register('api/Subject', SubjectViewSet, 'Subject')
router.register('api/Lesson', LessonViewSet, 'Lesson')
router.register('api/Progress', ProgressViewSet, 'Progress')

urlpatterns = router.urls
