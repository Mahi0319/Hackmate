import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ManageEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem("events")) || []);
  const [submissions, setSubmissions] = useState(JSON.parse(localStorage.getItem("submissions")) || []);

  const event = events.find((e) => e.id === parseInt(id));
  const eventParticipants = submissions.filter((s) => s.eventId === parseInt(id));

  const deleteEvent = () => {
    const updatedEvents = events.filter((e) => e.id !== parseInt(id));
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    navigate("/organizer-dashboard");
  };

  if (!event) return <div className="p-10">Event not found</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Manage Event</h1>
      <div className="bg-white shadow-xl p-6 rounded-xl">
        <h2 className="text-xl font-semibold">{event.title}</h2>
        <p className="text-gray-500">{event.date}</p>
        <p className="mt-4">Participants Joined: <b>{eventParticipants.length}</b></p>
        <div className="mt-6 flex gap-4">
          <button onClick={() => navigate(`/participants/${id}`)} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            View Participants
          </button>
          <button onClick={deleteEvent} className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManageEvent;