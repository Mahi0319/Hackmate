import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function JoinEventForm() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    leaderName:"",
    rollNo:"",
    email:"",
    ideaTitle:"",
    ideaDescription:"",
    mvpLink:"",
    hostedLink:"",
    college:"",
    location:"",
    teamSize:""
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    submissions.push({
      eventId:id,
      ...formData
    });

    localStorage.setItem("submissions", JSON.stringify(submissions));

    alert("Submission Successful 🚀");

    navigate("/student-dashboard");
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-10">

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Join Event 🚀
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-6">

          <input
            type="text"
            name="leaderName"
            placeholder="Team Leader Name"
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="rollNo"
            placeholder="College Roll Number"
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email ID"
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="ideaTitle"
            placeholder="Idea Title"
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

          <textarea
            name="ideaDescription"
            placeholder="Idea Description"
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none h-28"
          />

          <input
            type="url"
            name="mvpLink"
            placeholder="MVP / GitHub Link"
            onChange={handleChange}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="url"
            name="hostedLink"
            placeholder="Hosted Project Link"
            onChange={handleChange}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="college"
            placeholder="College Name"
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="location"
            placeholder="College Location"
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="number"
            name="teamSize"
            placeholder="Team Size"
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Submit Application
          </button>

        </form>

      </div>

    </div>

  );
}

export default JoinEventForm;