// File: events/EventDetails.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const found = events.find((ev) => String(ev.id) === String(id));
    setEvent(found);
  }, [id]);

  if (!event) {
    return (
      <div className="p-10">
        <h2 className="text-xl text-red-600">Event not found</h2>
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded-xl">
        
        {/* Banner */}
        <img
          src={event.banner || "https://via.placeholder.com/800x300"}
          className="w-full h-60 object-cover rounded"
          alt="Event Banner"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold mt-6">{event.title}</h1>

        {/* Info Section */}
        <div className="mt-4 text-gray-700 space-y-2">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Mode:</strong> {event.mode}</p>

          {event.mode === "Offline" && (
            <p><strong>Venue:</strong> {event.venue}</p>
          )}

          <p><strong>Type:</strong> {event.type}</p>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">About the Event</h2>
          <p className="text-gray-600 leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Register Button */}
        <div className="mt-8 flex justify-end">
          <Link
            to={`/join-event/${event.id}`}
            className="bg-blue-600 px-6 py-3 text-white rounded-lg text-lg"
          >
            Register Now
          </Link>
        </div>

      </div>

    </div>
  );
}

export default EventDetails;