import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaCalendarAlt, FaUsers, FaClipboardList } from "react-icons/fa";

function StudentDashboard() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
  const teams = JSON.parse(localStorage.getItem("teams")) || [];

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}

      {open && (

        <div className="w-64 bg-gradient-to-b from-indigo-700 to-purple-700 text-white p-6">

          <h2 className="text-2xl font-bold mb-10">
            HackMate
          </h2>

          <ul className="space-y-6 text-lg">

            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => navigate("/student-dashboard")}
            >
              Dashboard
            </li>

            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => navigate("/explore-events")}
            >
              Explore Events
            </li>

            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => navigate("/my-registrations")}
            >
              My Registrations
            </li>

            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => navigate("/explore-teams")}
            >
              Explore Teams
            </li>

            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => navigate("/student-profile")}
            >
              Profile
            </li>

            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => navigate("/")}
            >
              Logout
            </li>

          </ul>

        </div>

      )}

      {/* Main Area */}

      <div className="flex-1">

        {/* Topbar */}

        <div className="flex items-center p-4 bg-white shadow">

          <button
            className="text-xl mr-4"
            onClick={() => setOpen(!open)}
          >
            <FaBars />
          </button>

          <h1 className="text-2xl font-bold">
            Student Dashboard
          </h1>

        </div>

        {/* Dashboard Content */}

        <div className="p-8">

          {/* Stats Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">

              <FaCalendarAlt className="text-indigo-600 text-3xl" />

              <div>

                <h3 className="text-xl font-bold">
                  {registrations.length}
                </h3>

                <p className="text-gray-500">
                  Registered Events
                </p>

              </div>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">

              <FaUsers className="text-purple-600 text-3xl" />

              <div>

                <h3 className="text-xl font-bold">
                  {teams.length}
                </h3>

                <p className="text-gray-500">
                  Teams Joined
                </p>

              </div>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">

              <FaClipboardList className="text-pink-600 text-3xl" />

              <div>

                <h3 className="text-xl font-bold">
                  {
                    registrations.filter(r => r.status === "approved").length
                  }
                </h3>

                <p className="text-gray-500">
                  Approved Registrations
                </p>

              </div>

            </div>

          </div>

          {/* Quick Actions */}

          <div className="grid md:grid-cols-2 gap-6">

            <div
              onClick={() => navigate("/explore-events")}
              className="bg-white shadow-lg p-6 rounded-xl cursor-pointer hover:shadow-xl transition"
            >

              <h2 className="text-xl font-semibold mb-2">
                Explore Hackathons
              </h2>

              <p className="text-gray-500">
                Discover new hackathons and join events.
              </p>

            </div>

            <div
              onClick={() => navigate("/my-registrations")}
              className="bg-white shadow-lg p-6 rounded-xl cursor-pointer hover:shadow-xl transition"
            >

              <h2 className="text-xl font-semibold mb-2">
                My Registrations
              </h2>

              <p className="text-gray-500">
                Track your event registration status.
              </p>

            </div>

            <div
              onClick={() => navigate("/explore-teams")}
              className="bg-white shadow-lg p-6 rounded-xl cursor-pointer hover:shadow-xl transition"
            >

              <h2 className="text-xl font-semibold mb-2">
                Find Teams
              </h2>

              <p className="text-gray-500">
                Join or create hackathon teams.
              </p>

            </div>

            <div
              onClick={() => navigate("/student-profile")}
              className="bg-white shadow-lg p-6 rounded-xl cursor-pointer hover:shadow-xl transition"
            >

              <h2 className="text-xl font-semibold mb-2">
                My Profile
              </h2>

              <p className="text-gray-500">
                Update your profile and skills.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default StudentDashboard;