// File: events/ExploreEvents.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ExploreEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const handleRegister = (eventId) => {
    const student = JSON.parse(localStorage.getItem("currentStudent"));
    if (!student) {
      return navigate("/student-login"); // redirect if not logged in
    }
    navigate(`/join-event/${eventId}`);
  };

  return (
    <div className="p-10 bg-[#0b0f1a] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-neon-blue">Explore Events</h1>

      {events.length === 0 ? (
        <div className="bg-gray-900 p-6 rounded-xl shadow-neon text-gray-400">
          No events available.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-gradient-to-br from-purple-700 to-indigo-700 rounded-xl shadow-neon overflow-hidden hover:scale-105 transition transform">
              <img
                src={event.banner || "https://via.placeholder.com/400x200"}
                alt="event"
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-neon-pink mb-2">{event.title}</h2>
                <p className="text-white/80 text-sm mb-3">{event.description.substring(0, 80)}...</p>
                <p className="text-white/80"><strong>Date:</strong> {event.date}</p>
                <p className="text-white/80"><strong>Mode:</strong> {event.mode}</p>

                <button
                  onClick={() => handleRegister(event.id)}
                  className="mt-4 w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg transition"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>
        {`
          .shadow-neon {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2), 
                        0 0 40px rgba(0, 255, 255, 0.3), 
                        0 0 60px rgba(255, 0, 255, 0.3);
          }
          .text-neon-blue { color: #00ffff; text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; }
          .text-neon-pink { color: #ff00ff; text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff; }
        `}
      </style>
    </div>
  );
}

export default ExploreEvents;