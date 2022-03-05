from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student, Group, StudentInGroup, Subject, Lesson, Progress
from .serializers import StudentInGroupSerializer, StudentSerializer, GroupSerializer, SubjectSerializer, LessonSerializer, ProgressSerializer


def front(request):

    context = {}
    return render(request, "index.html", context)


@api_view(['GET'])
def subject_list(request):
    if request.method == 'GET':
        subject = Subject.objects.order_by('name')
        serializer = SubjectSerializer(subject, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def subject_detail(request, pk):
    if request.method == 'GET':
        subjects = Subject.objects.get(pk=pk)
