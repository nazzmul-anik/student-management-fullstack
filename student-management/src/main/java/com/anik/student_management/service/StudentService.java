package com.anik.student_management.service;

import com.anik.student_management.exception.StudentAlreadyExistsException;
import com.anik.student_management.exception.StudentNotFoundException;
import com.anik.student_management.model.Student;
import com.anik.student_management.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {

    private final StudentRepository  studentRepository;

    @Override
    public Student addStudent(Student student) {
        if(studentAlreadyExists(student.getEmail())){
            throw new StudentAlreadyExistsException(student.getEmail()+" already exists!");
        }
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student updateStudent(Long id, Student student) {
        return studentRepository.findById(id)
                .map(st -> {
                    st.setFirstName(student.getFirstName());
                    st.setLastName(student.getLastName());
                    st.setEmail(student.getEmail());
                    st.setDepartment(student.getDepartment());
                    return studentRepository.save(st);
                }).orElseThrow(()-> new StudentNotFoundException("Sorry, this student could not be found!!"));
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(()-> new StudentNotFoundException("Sorry, no student found with the ID : "+id));
    }

    @Override
    public void deleteStudent(Long id) {
        if(!studentRepository.existsById(id)){
            throw new StudentNotFoundException("Sorry, no student found with the ID : "+id);
        }
        studentRepository.deleteById(id);
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email)
                .isPresent();
    }
}
