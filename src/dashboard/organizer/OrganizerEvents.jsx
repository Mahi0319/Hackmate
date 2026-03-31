import React, { useEffect, useState } from "react";

function OrganizerEvents() {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem("events")) || []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">My Organized Events</h1>
      {events.length === 0 ? (
        <p>No events created yet</p>
      ) : (
        events.map((event, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4 flex justify-between">
            <div>
              <h2 className="font-semibold">{event.title}</h2>
              <p className="text-gray-500">{event.date}</p>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded" onClick={() => alert("Manage feature")}>
              Manage
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default OrganizerEvents;