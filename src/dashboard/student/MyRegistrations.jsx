// File: MyRegistrations.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyRegistrations() {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState([]);
  const [student, setStudent] = useState(null);
  const [events, setEvents] = useState([]);
  const [deletedReg, setDeletedReg] = useState(null); // For undo

  useEffect(() => {
    const loggedStudent = JSON.parse(localStorage.getItem("currentStudent"));
    if (!loggedStudent) return navigate("/student-login");
    setStudent(loggedStudent);

    const regs = JSON.parse(localStorage.getItem("registrations")) || [];
    setRegistrations(regs.filter(r => r.studentId === loggedStudent.id));

    const evts = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(evts);
  }, [navigate]);

  const handleDeleteRegistration = (regId) => {
    const regToDelete = registrations.find(r => r.id === regId);
    setDeletedReg(regToDelete);

    const updatedRegs = registrations.filter(r => r.id !== regId);
    const allRegs = JSON.parse(localStorage.getItem("registrations")) || [];
    const filteredAllRegs = allRegs.filter(r => r.id !== regId);
    localStorage.setItem("registrations", JSON.stringify(filteredAllRegs));
    setRegistrations(updatedRegs);

    // Undo after 5 seconds
    setTimeout(() => {
      setDeletedReg(null);
    }, 5000);
  };

  const undoDelete = () => {
    if (!deletedReg) return;
    const allRegs = JSON.parse(localStorage.getItem("registrations")) || [];
    const updatedAll = [...allRegs, deletedReg];
    localStorage.setItem("registrations", JSON.stringify(updatedAll));
    setRegistrations([...registrations, deletedReg]);
    setDeletedReg(null);
  };

  const getEventTitle = (eventId) => {
    const event = events.find(e => e.id === eventId);
    return event ? event.title : "Event deleted";
  };

  const getStatusBadge = (status) => {
    if (status === "approved") {
      return (
        <span className="bg-green-500 text-black px-2 py-1 rounded-full text-sm shadow-neon-green">
          Approved
        </span>
      );
    }
    return (
      <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-sm shadow-neon-yellow">
        Pending
      </span>
    );
  };

  return (
    <div className="min-h-screen p-10 bg-[#0b0f1a] text-white">
      <h1 className="text-3xl font-bold mb-8 text-neon-pink">My Registrations</h1>

      {registrations.length === 0 ? (
        <p className="text-gray-400">No registrations found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {registrations.map(reg => (
            <div key={reg.id} className="bg-gradient-to-br from-purple-700 to-indigo-700 shadow-neon rounded-xl p-6 relative hover:scale-105 transition transform">
              <h3 className="text-xl font-bold mb-2">{getEventTitle(reg.eventId)}</h3>
              <p className="text-gray-300 mb-1"><strong>Name:</strong> {reg.name}</p>
              <p className="text-gray-300 mb-1"><strong>Email:</strong> {reg.email}</p>
              <p className="text-gray-300 mb-1"><strong>Mobile:</strong> {reg.mobile}</p>
              {reg.teamId && <p className="text-gray-300 mb-1"><strong>Team:</strong> {reg.teamId}</p>}

              <div className="absolute top-4 right-4 flex items-center gap-2">
                {getStatusBadge(reg.status)}
                <button
                  onClick={() => handleDeleteRegistration(reg.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-lg hover:scale-105 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Undo Notification */}
      {deletedReg && (
        <div className="fixed bottom-5 right-5 bg-gray-800 text-white p-4 rounded-xl shadow-lg flex items-center gap-4 animate-fadeIn">
          <span>Registration deleted.</span>
          <button
            onClick={undoDelete}
            className="bg-blue-600 px-3 py-1 rounded hover:scale-105 transition"
          >
            Undo
          </button>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          .shadow-neon {
            box-shadow: 0 0 20px rgba(255,255,255,0.2),
                        0 0 40px rgba(0,255,255,0.3),
                        0 0 60px rgba(255,0,255,0.3);
          }
          .shadow-neon-green { box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00; }
          .shadow-neon-yellow { box-shadow: 0 0 10px #ffff00, 0 0 20px #ffff00; }
          .text-neon-pink { color: #ff00ff; text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff; }
        `}
      </style>
    </div>
  );
}

export default MyRegistrations;