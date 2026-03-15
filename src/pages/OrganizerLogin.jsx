import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function OrganizerLogin(){

  const navigate = useNavigate();

  const [data,setData]=useState({
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const organizers = JSON.parse(localStorage.getItem("organizers")) || [];

    const found = organizers.find(
      org => org.email === data.email && org.password === data.password
    );

    if(found){
      localStorage.setItem("currentOrganizer",JSON.stringify(found));
      navigate("/organizer-dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return(

    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-96 flex flex-col gap-4"
      >

        <h1 className="text-2xl font-bold text-center">Organizer Login</h1>

        <input name="email" placeholder="Email" onChange={handleChange}
        className="bg-white/10 border border-white/20 p-3 rounded-xl"/>

        <input type="password" name="password" placeholder="Password"
        onChange={handleChange}
        className="bg-white/10 border border-white/20 p-3 rounded-xl"/>

        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 py-3 rounded-xl">
          Login
        </button>

      </form>

    </div>

  );

}

export default OrganizerLogin;