import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const StudentProfile = () => {

    let navigate = useNavigate();
    const{id} = useParams();
    const[student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });
    const {firstName, lastName, email, department}=student;

    useEffect(() =>{
        loadStudent();
    }, []);
    const loadStudent = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/students/student/${id}`);
        setStudent(result.data);
    };

  return (
    <div className='text-center d-flex justify-content-center '>
    <Card style={{ width: '18rem' }} className='text-center '>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" />
      <Card.Body>
        <Card.Title>ID: {`${student.id}`}</Card.Title>
        <Card.Title>{`${student.firstName} ${student.lastName}`}</Card.Title>
        <Card.Title>Email: {`${student.email}`}</Card.Title>
        <Card.Title>Department: {`${student.department}`}</Card.Title>
        <Link to={"/view-students"} className='btn btn-info'>View Students</Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default StudentProfile