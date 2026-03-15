import React from "react";
import { useNavigate } from "react-router-dom";

function MyRegistrations() {

  const navigate = useNavigate();

  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
  const events = JSON.parse(localStorage.getItem("events")) || [];

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        My Event Registrations
      </h1>

      {registrations.length === 0 ? (

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            You have not registered for any events yet.
          </p>

          <button
            onClick={() => navigate("/explore-events")}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Explore Events
          </button>
        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {registrations.map((reg, index) => {

            const event = events[reg.eventId];

            let statusColor = "bg-yellow-400";

            if (reg.status === "approved") statusColor = "bg-green-500";
            if (reg.status === "rejected") statusColor = "bg-red-500";

            return (

              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6"
              >

                <h2 className="text-xl font-semibold mb-2">
                  {event ? event.title : "Event"}
                </h2>

                <p className="text-gray-500 mb-2">
                  Team: {reg.teamName}
                </p>

                <p className="text-gray-500 mb-2">
                  Idea: {reg.ideaTitle}
                </p>

                <p className="text-gray-500 mb-4">
                  Leader: {reg.leader}
                </p>

                <span
                  className={`text-white px-3 py-1 rounded-full text-sm ${statusColor}`}
                >
                  {reg.status || "pending"}
                </span>

              </div>

            );

          })}

        </div>

      )}

    </div>

  );
}

export default MyRegistrations;