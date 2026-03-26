import { useState } from 'react'
import './App.css'
import StudentsView from './components/student/StudentsView'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/common/MyNavbar'
import { Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddStudent from './components/student/AddStudent';
import EditStudent from './components/student/EditStudent';
import StudentProfile from './components/student/StudentProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='container mt-5'>
        <MyNavbar/>
        <Routes>
          <Route excat path="/" element={<Home/>}></Route>
          <Route excat path="/view-students" element={<StudentsView/>}></Route>
          <Route excat path="/add-students" element={<AddStudent/>}></Route>
          <Route excat path={`/edit-student/:id`} element={<EditStudent/>}></Route>
          <Route excat path={`/student-profile/:id`} element={<StudentProfile/>}></Route>
        </Routes>
    </main>
  )
}

export default App
