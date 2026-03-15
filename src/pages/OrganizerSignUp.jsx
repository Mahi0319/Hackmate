import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrganizerSignup() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    spocName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Empty fields check
    if (!data.spocName || !data.email || !data.password || !data.confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    // Email validation
    if (!data.email.includes("@")) {
      alert("Enter a valid official email");
      return;
    }

    // Password length
    if (data.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // Password match
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const organizers =
      JSON.parse(localStorage.getItem("organizers")) || [];

    // Duplicate email check
    const exists = organizers.find(
      (org) => org.email === data.email
    );

    if (exists) {
      alert("Organizer already registered with this email");
      return;
    }

    const newOrganizer = {
      spocName: data.spocName,
      email: data.email,
      password: data.password
    };

    organizers.push(newOrganizer);

    localStorage.setItem(
      "organizers",
      JSON.stringify(organizers)
    );

    alert("Organizer Signup Successful 🎉");

    navigate("/organizer-login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl w-96 flex flex-col gap-5"
      >

        <h1 className="text-2xl font-bold text-center">
          Organizer Signup
        </h1>

        <input
          type="text"
          name="spocName"
          placeholder="SPOC Name"
          onChange={handleChange}
          className="bg-white/10 border border-white/20 p-3 rounded-xl outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Official Email"
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

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="bg-white/10 border border-white/20 p-3 rounded-xl outline-none"
        />

        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 py-3 rounded-xl font-semibold">
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-300">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/organizer-login")}
          >
            Login
          </span>
        </p>

      </form>

    </div>
  );
}

export default OrganizerSignup;