import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin(){

 const navigate = useNavigate();

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const handleLogin = (e)=>{
  e.preventDefault();

  const students = JSON.parse(localStorage.getItem("students")) || [];

  const user = students.find(
   s => s.email === email && s.password === password
  );

  if(user){
   localStorage.setItem("currentStudent", JSON.stringify(user));
   navigate("/student-dashboard");
  }else{
   alert("Invalid Credentials");
  }

 };

 return(

  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">

   <form
    onSubmit={handleLogin}
    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-[400px] space-y-6"
   >

    <h2 className="text-3xl font-bold text-center">Student Login</h2>

    <input
     placeholder="Email"
     onChange={(e)=>setEmail(e.target.value)}
     className="w-full p-3 rounded-xl bg-white/20 outline-none"
    />

    <input
     type="password"
     placeholder="Password"
     onChange={(e)=>setPassword(e.target.value)}
     className="w-full p-3 rounded-xl bg-white/20 outline-none"
    />

    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 py-3 rounded-xl font-semibold hover:scale-105 transition">
     Login
    </button>

   </form>

  </div>

 );

}

export default StudentLogin;