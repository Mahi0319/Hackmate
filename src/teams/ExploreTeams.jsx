import React from "react";
import { useNavigate } from "react-router-dom";

function ExploreTeams() {

  const navigate = useNavigate();

  const teams = JSON.parse(localStorage.getItem("teams")) || [];

  const sendRequest = (teamId) => {

    const requests = JSON.parse(localStorage.getItem("teamRequests")) || [];

    const studentName = prompt("Enter your name");
    const skill = prompt("Enter your skill");

    if (!studentName) return;

    requests.push({
      teamId,
      studentName,
      skill,
      status: "pending"
    });

    localStorage.setItem("teamRequests", JSON.stringify(requests));

    alert("Request sent successfully!");

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Explore Teams
      </h1>

      {teams.length === 0 ? (

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            No teams created yet.
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

          {teams.map((team, index) => (

            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6"
            >

              <h2 className="text-xl font-semibold mb-2">
                {team.name}
              </h2>

              <p className="text-gray-500 mb-1">
                Leader: {team.leader}
              </p>

              <p className="text-gray-500 mb-1">
                Skills Needed: {team.skills}
              </p>

              <p className="text-gray-500 mb-1">
                Team Size: {team.teamSize}
              </p>

              <p className="text-gray-500 mb-4">
                Description: {team.description}
              </p>

              <button
                onClick={() => sendRequest(index)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Request to Join
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default ExploreTeams;