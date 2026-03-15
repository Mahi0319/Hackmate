import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentSignup() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check empty fields
    if (!data.name || !data.email || !data.password) {
      alert("Please fill all fields");
      return;
    }

    // Email validation
    if (!data.email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    // Password length check
    if (data.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const students = JSON.parse(localStorage.getItem("students")) || [];

    // Check if email already exists
    const userExists = students.find(
      (student) => student.email === data.email
    );

    if (userExists) {
      alert("Account already exists with this email");
      return;
    }

    students.push(data);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Signup Successful 🎉");

    navigate("/student-login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl w-96 flex flex-col gap-5"
      >

        <h1 className="text-2xl font-bold text-center">
          Student Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="bg-white/10 border border-white/20 p-3 rounded-xl outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="bg-white/10 border border-white/20 p-3 rounded-xl outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="bg-white/10 border border-white/20 p-3 rounded-xl outline-none"
        />

        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-500 py-3 rounded-xl font-semibold"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-300">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/student-login")}
          >
            Login
          </span>
        </p>

      </form>

    </div>
  );
}

export default StudentSignup;