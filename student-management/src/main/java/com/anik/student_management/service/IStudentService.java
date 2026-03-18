package com.anik.student_management.service;

import com.anik.student_management.model.Student;

import java.util.List;

public interface IStudentService {
    Student addStudent(Student student);
    List<Student> getStudents();
    Student updateStudent(Long id, Student student);
    Student getStudentById(Long id);
    void deleteStudent(Long id);
}
