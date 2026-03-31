// File: OrganizerDashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaCalendarPlus, FaTrophy, FaClipboardList, FaCertificate } from "react-icons/fa";

function OrganizerDashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  const currentOrganizer = JSON.parse(localStorage.getItem("currentOrganizer")) || {};

  const fetchData = () => {
    const allEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(allEvents.filter(ev => ev.organizer === currentOrganizer.name));

    setRegistrations(JSON.parse(localStorage.getItem("registrations")) || []);
  };

  useEffect(() => {
    fetchData();
    const handleStorage = () => fetchData();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0b0f1a] text-white">

      {/* Sidebar */}
      <div className={`bg-black ${open ? "w-64" : "w-16"} transition-all duration-300`}>
        <div className="flex items-center justify-between p-4">
          {open && <h1 className="text-xl font-bold text-neon-pink">HackMate</h1>}
          <FaBars className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>

        <div className="flex flex-col gap-4 p-4">

          <button onClick={() => navigate("/organizer-dashboard")} className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded">
            <FaClipboardList /> {open && "Dashboard"}
          </button>

          <button onClick={() => navigate("/create-event")} className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded">
            <FaCalendarPlus /> {open && "Create Event"}
          </button>

          <button onClick={() => navigate("/organizer-analytics")} className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded">
            <FaTrophy /> {open && "Analytics"}
          </button>

          {/* NEW — Certificate Builder */}
          <button onClick={() => navigate("/certificate-builder")} className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded">
            <FaCertificate /> {open && "Certificate Builder"}
          </button>

          {/* NEW — Issued Certificates */}
          <button onClick={() => navigate("/issued-certificates")} className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded">
            <FaCertificate /> {open && "Issued Certificates"}
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("currentOrganizer");
              navigate("/");
            }}
            className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded mt-4"
          >
            Logout
          </button>

        </div>
      </div>

      {/* MAIN PANEL */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8 text-neon-pink">Organizer Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-gradient-to-br from-purple-700 to-indigo-700 shadow-neon rounded-xl p-6 hover:scale-105 transition">
            <h2>Total Events</h2>
            <p className="text-3xl font-bold">{events.length}</p>
          </div>

          <div className="bg-gradient-to-br from-pink-700 to-red-600 shadow-neon rounded-xl p-6 hover:scale-105 transition">
            <h2>Total Registrations</h2>
            <p className="text-3xl font-bold">{registrations.length}</p>
          </div>

          <div className="bg-gradient-to-br from-green-700 to-teal-600 shadow-neon rounded-xl p-6 hover:scale-105 transition">
            <h2>Approved Registrations</h2>
            <p className="text-3xl font-bold">{registrations.filter(r => r.status === "approved").length}</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-600 to-orange-500 shadow-neon rounded-xl p-6 hover:scale-105 transition">
            <h2>Certificates Issued</h2>
            <p className="text-3xl font-bold">
              {JSON.parse(localStorage.getItem("issuedCertificates"))?.length || 0}
            </p>
          </div>
        </div>

        {/* Events List */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map(ev => (
            <div key={ev.id} className="bg-gradient-to-br from-blue-600 to-indigo-600 shadow-neon rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">{ev.title}</h2>
              <p className="text-white/80 mb-2">{ev.description}</p>
              <p className="text-white/80 mb-2"><strong>Date:</strong> {ev.date}</p>
              <p className="text-white/80 mb-2"><strong>Registrations:</strong> {registrations.filter(r => r.eventId === ev.id).length}</p>

              <button
                onClick={() => navigate(`/scan-nfc/${ev.id}`)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mt-2"
              >
                Scan Attendance
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrganizerDashboard;