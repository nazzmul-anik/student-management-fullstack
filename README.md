# 🎓 Student Management System (Full Stack)

A modern **Full Stack Student Management System** built with **Spring Boot + React**.  
This application allows users to manage student data efficiently with complete CRUD operations and a clean, scalable architecture.

---

## 🚀 Features

- ✅ Create Student Account  
- 📄 View All Students (List View)  
- 🔍 View Individual Student  
- 👤 Detailed Student Profile Page  
- ✏️ Update Student Information  
- ❌ Delete Student  
- ⚡ Fast API integration using Axios  
- 🛡️ Custom Exception Handling  
- 📦 Clean REST API using ResponseEntity  

---

## 🛠️ Tech Stack

### 🔙 Backend
- Java  
- Spring Boot  
- MySQL  
- Lombok  
- REST API (`@RestController`, `ResponseEntity`)  
- Custom Exception Handling  

### 🔜 Frontend
- React
- Bootstrap
- Axios  
- HTML, CSS  

---

## 📌 Project Architecture

Frontend (React)  
&nbsp;&nbsp;&nbsp;&nbsp;↓  
Axios HTTP Requests  
&nbsp;&nbsp;&nbsp;&nbsp;↓  
Spring Boot REST API  
&nbsp;&nbsp;&nbsp;&nbsp;↓  
Service Layer (Business Logic)  
&nbsp;&nbsp;&nbsp;&nbsp;↓  
Repository Layer (JPA)  
&nbsp;&nbsp;&nbsp;&nbsp;↓  
MySQL Database  

---

## ⚙️ Installation & Setup

### 🔧 Backend Setup

```bash
git clone https://github.com/nazzmul-anik/student-management-fullstack.git
cd backend
mvn spring-boot:run
