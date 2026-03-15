import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ExploreEvents() {

  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);

  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-center mb-12">
        Explore Events
      </h1>

      {events.length === 0 && (
        <p className="text-center text-gray-400">
          No events available yet.
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-8">

        {events.map((event) => (

          <motion.div
            key={event.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl"
          >

            {event.poster && (
              <img
                src={event.poster}
                alt="poster"
                className="h-48 w-full object-cover"
              />
            )}

            <div className="p-6">

              <h2 className="text-xl font-bold mb-2">
                {event.title}
              </h2>

              <p className="text-sm text-gray-300 mb-3">
                {event.type}
              </p>

              <p className="text-sm mb-2">
                📍 {event.location}
              </p>

              <p className="text-sm mb-2">
                👥 Team Size: {event.teamSize}
              </p>

              <p className="text-sm mb-4">
                🏆 Prize: {event.prize}
              </p>

              <div className="flex gap-3">

                <button
                  onClick={() => navigate(`/event-details/${event.id}`)}
                  className="flex-1 bg-indigo-500 py-2 rounded-lg hover:bg-indigo-600"
                >
                  View Details
                </button>

                <button
                  onClick={() => navigate(`/join/${event.id}`)}
                  className="flex-1 bg-purple-500 py-2 rounded-lg hover:bg-purple-600"
                >
                  Register
                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default ExploreEvents; 