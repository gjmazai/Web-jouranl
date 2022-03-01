from .models import Student, Group, StudentInGroup, Subject, Lesson, Progress
from .serializers import StudentSerializer, GroupSerializer, StudentInGroupSerializer, SubjectSerializer, LessonSerializer, ProgressSerializer
from rest_framework import viewsets, permissions


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = StudentSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = GroupSerializer


class StudentInGroupViewSet(viewsets.ModelViewSet):
    queryset = StudentInGroup.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = StudentInGroupSerializer


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = SubjectSerializer


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = LessonSerializer


class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProgressSerializer
