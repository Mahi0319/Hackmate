// File: StudentDashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaCalendarAlt, FaUsers, FaClipboardList, FaCertificate } from "react-icons/fa";

function StudentDashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const [registrations, setRegistrations] = useState([]);
  const [approvedTeams, setApprovedTeams] = useState([]);
  const [pendingTeams, setPendingTeams] = useState([]);
  const [eventsAttended, setEventsAttended] = useState([]);

  const student = JSON.parse(localStorage.getItem("currentStudent")) || {};

  useEffect(() => {
    const storedRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];
    setRegistrations(storedRegistrations);

    const storedTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const storedRequests = JSON.parse(localStorage.getItem("teamRequests")) || [];

    const approved = storedTeams.filter(team => {
      const isLeader = team.leader === student.name;
      const accepted = storedRequests.find(
        req => req.teamId === team.id && req.studentName === student.name && req.status === "accepted"
      );
      return isLeader || accepted;
    });
    setApprovedTeams(approved);

    const pending = storedRequests.filter(
      req => req.studentName === student.name && req.status === "pending"
    );
    setPendingTeams(pending);

    // Events attended via NFC
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const attended = events.filter(ev => ev.attendance?.includes(student.nfcId));
    setEventsAttended(attended);
  }, [student.name, student.nfcId]);

  return (
    <div className="flex min-h-screen bg-[#0b0f1a] text-white">
      {/* Sidebar */}
      {open && (
        <div className="w-64 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-10 tracking-wider text-neon-blue">HackMate</h2>
          <ul className="space-y-6 text-lg">
            <li className="cursor-pointer hover:text-neon-blue transition" onClick={() => navigate("/student-dashboard")}>Dashboard</li>
            <li className="cursor-pointer hover:text-neon-pink transition" onClick={() => navigate("/explore-events")}>Explore Events</li>
            <li className="cursor-pointer hover:text-neon-green transition" onClick={() => navigate("/my-registrations")}>My Registrations</li>
            <li className="cursor-pointer hover:text-neon-purple transition" onClick={() => navigate("/explore-teams")}>Explore Teams</li>
            <li className="cursor-pointer hover:text-neon-yellow transition" onClick={() => navigate("/student-profile")}>Profile</li>
            <li className="cursor-pointer hover:text-neon-orange transition" onClick={() => navigate("/certificates")}>Certificates</li>
            <li
  className="cursor-pointer hover:text-neon-yellow transition"
  onClick={() => navigate("/my-certificates")}
>
  My Certificates
</li>
            <li className="cursor-pointer hover:text-red-500 transition" onClick={() => {
              localStorage.removeItem("currentStudent");
              localStorage.removeItem("studentLoggedIn");
              navigate("/");
            }}>Logout</li>
          </ul>
        </div>
      )}

      {/* Main Area */}
      <div className="flex-1">
        {/* Topbar */}
        <div className="flex items-center p-4 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 shadow-xl">
          <button className="text-2xl mr-4 text-white hover:text-neon-blue transition" onClick={() => setOpen(!open)}>
            <FaBars />
          </button>
          <h1 className="text-3xl font-bold text-neon-pink tracking-wide">Student Dashboard</h1>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 shadow-neon rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition transform">
              <FaCalendarAlt className="text-white text-3xl drop-shadow-lg" />
              <div>
                <h3 className="text-2xl font-bold">{registrations.length}</h3>
                <p className="text-white/80">Registered Events</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 shadow-neon rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition transform">
              <FaUsers className="text-white text-3xl drop-shadow-lg" />
              <div>
                <h3 className="text-2xl font-bold">{approvedTeams.length}</h3>
                <p className="text-white/80">Teams Joined</p>
                {pendingTeams.length > 0 && (
                  <p className="text-yellow-400 text-sm">{pendingTeams.length} pending request(s)</p>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-red-500 shadow-neon rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition transform">
              <FaClipboardList className="text-white text-3xl drop-shadow-lg" />
              <div>
                <h3 className="text-2xl font-bold">{registrations.filter(r => r.status === "approved").length}</h3>
                <p className="text-white/80">Approved Registrations</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-500 shadow-neon rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition transform">
              <FaCertificate className="text-white text-3xl drop-shadow-lg" />
              <div>
                <h3 className="text-2xl font-bold">{eventsAttended.length}</h3>
                <p className="text-white/80">Events Attended</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div onClick={() => navigate("/explore-events")} className="bg-gradient-to-br from-blue-600 to-indigo-600 shadow-neon p-6 rounded-xl cursor-pointer hover:scale-105 transition transform">
              <h2 className="text-2xl font-semibold mb-2 text-neon-blue">Explore Hackathons</h2>
              <p className="text-white/80">Discover new hackathons and join events.</p>
            </div>

            <div onClick={() => navigate("/my-registrations")} className="bg-gradient-to-br from-purple-600 to-pink-600 shadow-neon p-6 rounded-xl cursor-pointer hover:scale-105 transition transform">
              <h2 className="text-2xl font-semibold mb-2 text-neon-pink">My Registrations</h2>
              <p className="text-white/80">Track your event registration status.</p>
            </div>

            <div onClick={() => navigate("/explore-teams")} className="bg-gradient-to-br from-green-500 to-teal-500 shadow-neon p-6 rounded-xl cursor-pointer hover:scale-105 transition transform">
              <h2 className="text-2xl font-semibold mb-2 text-neon-green">Find Teams</h2>
              <p className="text-white/80">Join or create hackathon teams.</p>
            </div>

            <div onClick={() => navigate("/certificates")} className="bg-gradient-to-br from-yellow-500 to-orange-500 shadow-neon p-6 rounded-xl cursor-pointer hover:scale-105 transition transform">
              <h2 className="text-2xl font-semibold mb-2 text-neon-yellow">My Certificates</h2>
              <p className="text-white/80">View & Download Certificates</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .shadow-neon {
            box-shadow: 0 0 20px rgba(255,255,255,0.2), 0 0 40px rgba(0,255,255,0.3), 0 0 60px rgba(255,0,255,0.3);
          }
          .text-neon-blue { color: #00ffff; text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; }
          .text-neon-pink { color: #ff00ff; text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff; }
          .text-neon-green { color: #00ff00; text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00; }
          .text-neon-yellow { color: #ffff00; text-shadow: 0 0 10px #ffff00, 0 0 20px #ffff00; }
          .text-neon-purple { color: #9b59b6; text-shadow: 0 0 10px #9b59b6, 0 0 20px #9b59b6; }
          .text-neon-orange { color: #ffa500; text-shadow: 0 0 10px #ffa500, 0 0 20px #ffa500; }
        `}
      </style>
    </div>
  );
}

export default StudentDashboard;