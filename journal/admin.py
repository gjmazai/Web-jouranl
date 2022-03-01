from django.contrib import admin
from .models import Progress, Lesson, Subject, StudentInGroup, Group, Student


class StudentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')
    #lest_editable = () какие поля можем менять не входя в сам Обьект
    list_filter = ('name',)


class GroupAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')
    list_filter = ('name',)


class StudentInGroupAdmin(admin.ModelAdmin):
    list_display = ('id', 'input_Students', 'output_Students')
    list_display_links = ('id', 'input_Students', 'output_Students')
    search_fields = ('id', 'input_Students', 'output_Students')
    list_filter = ('input_Students', 'output_Students')


class SubjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'groups')
    list_display_links = ('id', 'name', 'groups')
    search_fields = ('id', 'name', 'groups')
    list_filter = ('name', 'groups')


class LessonAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'subjects', 'groups')
    list_display_links = ('id', 'date', 'subjects', 'groups')
    search_fields = ('id', 'date', 'subjects')
    list_filter = ('date', 'subjects')


class ProgressAdmin(admin.ModelAdmin):
    list_display = ('id', 'students', 'lessons', 'attendance', 'grade')
    list_display_links = ('id', 'students', 'lessons', 'attendance', 'grade')
    search_fields = ('id', 'students')
    list_filter = ('students',)


admin.site.register(Progress, ProgressAdmin)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Subject, SubjectAdmin)
admin.site.register(StudentInGroup, StudentInGroupAdmin)
admin.site.register(Group, GroupAdmin)
admin.site.register(Student, StudentAdmin)
