from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=45, verbose_name="ФИО")

    class Meta:
        verbose_name = "Студент"
        verbose_name_plural = "Студенты"

    def __str__(self):
        return self.name


class Group(models.Model):
    name = models.SmallIntegerField(verbose_name="Номер группы")

    class Meta:
        verbose_name = "Группа"
        verbose_name_plural = "Группы"

    def __str__(self):
        return f'{self.name}'


class StudentInGroup(models.Model):
    input_Students = models.DateField(verbose_name="Студент вступил в группу")
    output_Students = models.DateField(
        verbose_name="Студент покинул группу", blank=True, null=True)
    students = models.ManyToManyField(
        Student, verbose_name="Студент", related_name="Group")
    groups = models.ManyToManyField(
        Group, verbose_name="Группа", related_name="StudentInGroup")

    class Meta:
        verbose_name: 'Студент в группе'
        verbose_name_plural: "Студенты в группе"

    def __str__(self):
        return f'{self.students.name} {self.groups.name}'


class Subject(models.Model):
    name = models.CharField(max_length=50, verbose_name="Название предмета")
    groups = models.ForeignKey(Group, on_delete=models.PROTECT)

    class Meta:
        verbose_name: "Предмет"
        verbose_name_plural: "Предметы"

    def __str__(self):
        return self.name


class Lesson(models.Model):
    date = models.CharField(
        max_length=15, verbose_name="Дата занятия", blank=True)
    subjects = models.ForeignKey(
        Subject, verbose_name="Проведенные занятия", blank=True, on_delete=models.PROTECT)
    groups = models.ForeignKey(
        Group, verbose_name="Группа на занятии", blank=True, on_delete=models.PROTECT)

    class Meta:
        verbose_name: 'Занятие которое проводилось'
        verbose_name_plural: "Занятия которые проводились"

    def __str__(self):
        return f'{self.date} {self.subjects.name} {self.groups.name}'


class Progress(models.Model):
    students = models.ForeignKey(
        Student, on_delete=models.PROTECT, verbose_name="Студент", blank=True)
    lessons = models.ForeignKey(
        Lesson, on_delete=models.CASCADE, verbose_name="Занятия", blank=True)
    attendance = models.CharField(
        max_length=3, default='Да', verbose_name='Присутсвие')
    grade = models.PositiveSmallIntegerField(
        verbose_name='Оценка за занятие', default=0)
    # из замечаний на сдаче курсовых, кто-то любит заполнять звездочками

    class Meta:
        verbose_name = "Успеваемость"
        verbose_name_plural = "Успеваемость"

    def __str__(self):
        return f'{self.students.name} {self.lessons.subjects.name} {self.lessons.date}'
