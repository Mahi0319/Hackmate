import React, { useState, useEffect } from "react";

function StudentProfile() {

  const [profile,setProfile] = useState({
    name:"",
    college:"",
    skills:"",
    github:"",
    linkedin:"",
    bio:""
  });

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("studentProfile"));
    if(saved){
      setProfile(saved);
    }
  },[]);

  const handleChange = (e)=>{
    setProfile({
      ...profile,
      [e.target.name]:e.target.value
    });
  };

  const saveProfile = ()=>{
    localStorage.setItem("studentProfile",JSON.stringify(profile));
    alert("Profile Updated 🚀");
  };

  return(

    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center p-10">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Student Profile
        </h1>

        <div className="flex flex-col gap-5">

          <input
            name="name"
            placeholder="Name"
            value={profile.name}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl"
          />

          <input
            name="college"
            placeholder="College"
            value={profile.college}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl"
          />

          <input
            name="skills"
            placeholder="Skills (React, AI, UI)"
            value={profile.skills}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl"
          />

          <input
            name="github"
            placeholder="Github Link"
            value={profile.github}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl"
          />

          <input
            name="linkedin"
            placeholder="LinkedIn Link"
            value={profile.linkedin}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl"
          />

          <textarea
            name="bio"
            placeholder="Short Bio"
            value={profile.bio}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl h-24"
          />

          <button
            onClick={saveProfile}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Save Profile
          </button>

        </div>

      </div>

    </div>

  )

}

export default StudentProfile;