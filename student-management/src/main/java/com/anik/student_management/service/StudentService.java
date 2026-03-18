package com.anik.student_management.service;

import com.anik.student_management.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService implements IStudentService {
    @Override
    public Student addStudent(Student student) {
        return null;
    }

    @Override
    public List<Student> getStudents() {
        return List.of();
    }

    @Override
    public Student updateStudent(Long id, Student student) {
        return null;
    }

    @Override
    public Student getStudentById(Long id) {
        return null;
    }

    @Override
    public void deleteStudent(Long id) {

    }
}
