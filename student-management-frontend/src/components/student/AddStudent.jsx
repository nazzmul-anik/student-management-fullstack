import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddStudent = () => {

    let navigate = useNavigate();
    const[student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });
    const {firstName, lastName, email, department}=student;
    const handlInputeChange=(e)=>{
        setStudent({...student, [e.target.name] : e.target.value})
    };

    const saveStudent= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/students", student);
        navigate("/view-students");
    }

  return (
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h2 className='mb-3 text-center'>Add Student</h2>
        <form onSubmit={(e)=>saveStudent(e)}>
            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='firstName'>First Name</label>
                <input type="text" name='firstName' id='firstName' onChange={(e)=>handlInputeChange(e)} required value={firstName} className='form-control col-sm-6' />
            </div>

            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='lastName'>Last Name</label>
                <input type="text" name='lastName' id='lastName' onChange={(e)=>handlInputeChange(e)} required value={lastName} className='form-control col-sm-6' />
            </div>

            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='email'>Email</label>
                <input type="email" name='email' id='email' onChange={(e)=>handlInputeChange(e)} required value={email} className='form-control col-sm-6' />
            </div>

            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='department'>Department</label>
                <input type="text" name='department' id='department' onChange={(e)=>handlInputeChange(e)} required value={department} className='form-control col-sm-6' />
            </div>

            <div className="row mb-5 gap-5">
                <div className="col-sm-2">
                    <button type='submit' className='btn btn-outline-success btn-lg'>Save</button>
                </div>

                <div className="col-sm-2">
                    <Link to={"/view-students"} className='btn btn-outline-warning btn-lg'>Cancel</Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddStudent