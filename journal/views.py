from urllib.request import Request
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student, Group, StudentInGroup, Subject, Lesson, Progress
from .serializers import StudentInGroupSerializer, StudentSerializer, GroupSerializer, SubjectSerializer, LessonSerializer, ProgressSerializer
import os


def front(request):
    context = {}
    return render(request, "index.html", context)


@api_view(['GET'])
def subject_list(request):
    if request.method == 'GET':
        subject = Subject.objects.order_by('name')
        serializer = SubjectSerializer(subject, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def subject_detail(request, pk):
    with open("log.txt", 'a') as f:
        print(f"DEBUG: {request} {pk} \n", file=f)
        # print("me", file=f)

    subjects = Subject.objects.get(pk=pk)
    lessons = subjects.lesson_set.order_by('id')
    view_progreses = []
    for lesson in lessons:
        for progress in lesson.progress_set.all():
            view_progreses.append(progress)

    group = subjects.groups
    relationships = group.StudentInGroup.all()
    view_students = []
    # for relationship in relationships:
    #     student = relationship.students.all()
    #     view_students.append(student)

    for relationship in relationships:
        for student in relationship.students.all():
            view_students.append(student)

    if request.method == 'GET':

        subjects_serializer = SubjectSerializer(subjects)  # many=True
        lessons_serializer = LessonSerializer(lessons, many=True)
        students_serializer = StudentSerializer(view_students, many=True)
        progreses_serializer = ProgressSerializer(view_progreses, many=True)

        response_results = {
            'subject': subjects_serializer.data,
            'lesson': lessons_serializer.data,
            'progress': progreses_serializer.data,
            'student': students_serializer.data,

        }
        return Response(response_results)

    if request.method == 'POST':
        lesson_serializer = LessonSerializer(data=request.data.lesson)
        progress_serializer = ProgressSerializer(data=request.data.progress)
        # надо все серилизовать в отдельности или вместе,а потом засейвить
        if lesson_serializer.is_valid():
            lesson_serializer.save()
            if progress_serializer.is_valid():
                progress_serializer.save()
                response_results = {
                    'lesson': lesson_serializer.data,
                    'progress': progress_serializer.data,
                }
                return Response(response_results)
            else:
                return Response(progress_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(lesson_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
