import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Countdown from "react-countdown";

function EventDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const events = JSON.parse(localStorage.getItem("events")) || [];
  const event = events[id];

  if (!event) {
    return <div className="p-10 text-xl">Event not found</div>;
  }

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center p-10">

      <div className="bg-white shadow-xl rounded-xl max-w-3xl w-full overflow-hidden">

        {/* Event Poster */}

        <div className="h-60 bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
          {event.title}
        </div>

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-4">
            {event.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {event.description}
          </p>

          <p className="text-gray-500 mb-6">
            Event Date: {event.date}
          </p>

          {/* Countdown */}

          <div className="bg-gray-100 p-4 rounded-lg mb-6">

            <h2 className="text-lg font-semibold mb-2">
              Hackathon Starts In
            </h2>

            <Countdown date={new Date(event.date)} />

          </div>

          {/* Buttons */}

          <div className="flex gap-4">

            <button
              onClick={() => navigate(`/join/${id}`)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Register Now
            </button>

            <button
              onClick={() => navigate(`/create-team/${id}`)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Create Team
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default EventDetails;