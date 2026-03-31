import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-[#0b0f1a]">
      {/* Gradient + Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-90"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[140px] opacity-30 top-[-150px] left-[-150px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[140px] opacity-30 bottom-[-150px] right-[-150px]"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-400 rounded-full blur-[120px] opacity-20 top-[40%] left-[20%]"></div>

      {/* Marquee replacement */}
      <div className="absolute top-0 w-full overflow-hidden bg-white text-black font-semibold tracking-wide">
        <div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            padding: "0.75rem 0",
            animation: "marquee 15s linear infinite",
          }}
        >
          Welcome to HackMate 🚀 Find Hackathons, Workshops and Events Across Colleges
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      {/* Main Hero Card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0px_20px_80px_rgba(0,0,0,0.6)] rounded-[40px] p-14 max-w-3xl text-center">
        <h1 className="text-7xl font-bold mb-6 tracking-tight">HackMate</h1>
        <p className="text-gray-200 text-xl mb-12 leading-relaxed">
          India's College Event Platform
          <br />
          Join Hackathons • Build Teams • Discover Opportunities
        </p>

        {/* Buttons */}
        <div className="flex gap-8 justify-center">
          <button
            className="bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:scale-110 hover:shadow-white/30 transition duration-300"
            onClick={() => navigate("/student-auth")}
          >
            Join Events
          </button>

          <button
            className="bg-gradient-to-r from-blue-500 to-indigo-500 px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:scale-110 transition duration-300"
            onClick={() => {
              const currentOrganizer = JSON.parse(localStorage.getItem("currentOrganizer"));
              const loggedIn = localStorage.getItem("organizerLoggedIn");

              if (currentOrganizer && loggedIn) {
                navigate("/organizer-dashboard");
              } else {
                const hasAccount = window.confirm(
                  "Do you already have an Organizer account?\nPress OK for Login, Cancel for Sign Up"
                );
                if (hasAccount) {
                  navigate("/organizer-login");
                } else {
                  navigate("/organizer-signup");
                }
              }
            }}
          >
            Organize Event
          </button>
        </div>

        <p className="text-gray-300 mt-10 text-sm">Built for Students • Designed for Colleges</p>
      </div>
    </div>
  );
}

export default Home;