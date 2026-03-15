import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RecommendedEvents() {

  const navigate = useNavigate();
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {

    const events = JSON.parse(localStorage.getItem("events")) || [];
    const student = JSON.parse(localStorage.getItem("studentProfile")) || {};

    if (!student.skills) {
      setRecommended(events.slice(0, 3));
      return;
    }

    const skills = student.skills.toLowerCase();

    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(skills) ||
      event.description?.toLowerCase().includes(skills)
    );

    if (filtered.length === 0) {
      setRecommended(events.slice(0, 3));
    } else {
      setRecommended(filtered);
    }

  }, []);

  return (

    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Recommended Hackathons
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {recommended.map((event, index) => (

          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6"
          >

            <h3 className="text-xl font-semibold mb-2">
              {event.title}
            </h3>

            <p className="text-gray-500 mb-4">
              {event.date}
            </p>

            <button
              onClick={() => navigate(`/event-details/${index}`)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              View Event
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default RecommendedEvents;