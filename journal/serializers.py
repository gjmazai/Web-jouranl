from dataclasses import field
from rest_framework import serializers
from .models import Student, Group, StudentInGroup, Subject, Lesson, Progress


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
        id = serializers.ModelField(
            model_field=Student._meta.get_field('id'), required=False)


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'
        id = serializers.ModelField(
            model_field=Group._meta.get_field('id'), required=False)


class StudentInGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentInGroup
        fields = '__all__'


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
        id = serializers.ModelField(
            model_field=Lesson._meta.get_field('id'), required=False)


class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = '__all__'
        id = serializers.ModelField(
            model_field=Progress._meta.get_field('id'), required=False)


class FiltersSerializer(serializers.Serializer):
    module = SubjectSerializer(many=True)

    class Meta:
        model: Lesson
        fields = '__all__'
