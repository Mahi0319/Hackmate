import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ExploreTeams() {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("event");

  const [teams, setTeams] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("student"));
    if (!logged) return;
    setStudent(logged);

    const allTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const eventTeams = allTeams.filter((t) => String(t.eventId) === String(eventId));
    setTeams(eventTeams);
  }, [eventId]);

  const handleJoinRequest = (teamId) => {
    let allTeams = JSON.parse(localStorage.getItem("teams")) || [];

    allTeams = allTeams.map((team) => {
      if (team.id === teamId) {
        // Prevent duplicate request
        if (team.requests.some((r) => r.studentId === student.id)) {
          alert("Request already sent!");
          return team;
        }

        team.requests.push({
          studentId: student.id,
          name: student.name,
        });
      }
      return team;
    });

    localStorage.setItem("teams", JSON.stringify(allTeams));
    alert("Request sent successfully!");
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Explore Teams</h1>

      {teams.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow text-gray-500">
          No teams for this event yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div key={team.id} className="bg-white p-5 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold">{team.teamName}</h2>
              <p className="text-gray-600 mt-2">
                Leader: <strong>{team.leaderName}</strong>
              </p>
              <p className="text-gray-600">
                Members: {team.members.length}
              </p>

              <button
                onClick={() => handleJoinRequest(team.id)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
              >
                Send Join Request
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExploreTeams;