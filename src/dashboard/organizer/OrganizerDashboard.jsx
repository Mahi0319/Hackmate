import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaCalendarPlus, FaUsers, FaTrophy, FaClipboardList } from "react-icons/fa";

function OrganizerDashboard() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const events = JSON.parse(localStorage.getItem("events")) || [];
  const teams = JSON.parse(localStorage.getItem("teams")) || [];
  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}

      <div className={`bg-black text-white ${open ? "w-64" : "w-16"} transition-all duration-300`}>

        <div className="flex items-center justify-between p-4">

          {open && <h1 className="text-xl font-bold">HackMate</h1>}

          <FaBars
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />

        </div>

        <div className="flex flex-col gap-4 p-4">

          <button
            onClick={() => navigate("/organizer-dashboard")}
            className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"
          >
            <FaClipboardList /> {open && "Dashboard"}
          </button>

          <button
            onClick={() => navigate("/create-event")}
            className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"
          >
            <FaCalendarPlus /> {open && "Create Event"}
          </button>

          <button
            onClick={() => navigate("/leaderboard")}
            className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"
          >
            <FaTrophy /> {open && "Leaderboard"}
          </button>

        </div>

      </div>

      {/* Main Dashboard */}

      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-8">
          Organizer Dashboard
        </h1>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow-xl rounded-xl p-6 hover:scale-105 transition">

            <h2 className="text-gray-500">Total Events</h2>

            <p className="text-3xl font-bold mt-2">
              {events.length}
            </p>

          </div>

          <div className="bg-white shadow-xl rounded-xl p-6 hover:scale-105 transition">

            <h2 className="text-gray-500">Teams Created</h2>

            <p className="text-3xl font-bold mt-2">
              {teams.length}
            </p>

          </div>

          <div className="bg-white shadow-xl rounded-xl p-6 hover:scale-105 transition">

            <h2 className="text-gray-500">Registrations</h2>

            <p className="text-3xl font-bold mt-2">
              {registrations.length}
            </p>

          </div>

        </div>

        {/* Events Section */}

        <div className="mt-12">

          <h2 className="text-2xl font-semibold mb-6">
            Your Events
          </h2>

          {events.length === 0 ? (

            <p className="text-gray-500">
              No events created yet.
            </p>

          ) : (

            <div className="grid md:grid-cols-2 gap-6">

              {events.map((event, index) => (

                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-6"
                >

                  <h3 className="text-xl font-semibold">
                    {event.title}
                  </h3>

                  <p className="text-gray-500">
                    {event.date}
                  </p>

                  <button
                    onClick={() => navigate(`/manage-event/${index}`)}
                    className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
                  >
                    Manage Event
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default OrganizerDashboard;