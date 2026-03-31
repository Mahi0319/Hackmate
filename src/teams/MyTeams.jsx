import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyTeams() {
  const [teams, setTeams] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("student"));
    setStudent(logged);

    const allTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const my = allTeams.filter((t) => t.leaderId === logged?.id);
    setTeams(my);
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Teams</h1>

      {teams.length === 0 ? (
        <p className="text-gray-500">You have not created any teams.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {teams.map((team) => (
            <div key={team.id} className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold">{team.teamName}</h2>
              <p className="text-gray-600 mt-2">
                Members: {team.members.length}
              </p>
              <p className="text-gray-600 mt-1">
                Requests: {team.requests.length}
              </p>

              <Link
                to={`/team-requests?team=${team.id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
              >
                Manage Team
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyTeams;