import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TeamRequests() {
  const [searchParams] = useSearchParams();
  const teamId = Number(searchParams.get("team"));
  const navigate = useNavigate();

  const [team, setTeam] = useState(null);

  useEffect(() => {
    const allTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const found = allTeams.find((t) => t.id === teamId);
    if (!found) return navigate("/my-teams");
    setTeam(found);
  }, [teamId, navigate]);

  const updateTeam = (updated) => {
    let all = JSON.parse(localStorage.getItem("teams")) || [];
    all = all.map((t) => (t.id === teamId ? updated : t));
    localStorage.setItem("teams", JSON.stringify(all));
    setTeam(updated);
  };

  const accept = (req) => {
    const updated = {
      ...team,
      members: [...team.members, req],
      requests: team.requests.filter((r) => r.studentId !== req.studentId),
    };
    updateTeam(updated);
  };

  const reject = (req) => {
    const updated = {
      ...team,
      requests: team.requests.filter((r) => r.studentId !== req.studentId),
    };
    updateTeam(updated);
  };

  if (!team) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Team Requests</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold">{team.teamName}</h2>
        <p className="text-gray-600 mt-2">
          Members: {team.members.length}
        </p>

        <h3 className="text-lg font-bold mt-6">Pending Requests</h3>

        {team.requests.length === 0 ? (
          <p className="text-gray-500">No pending requests.</p>
        ) : (
          team.requests.map((req) => (
            <div
              key={req.studentId}
              className="flex justify-between bg-gray-100 p-3 rounded mt-3"
            >
              <span>{req.name}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => accept(req)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Accept
                </button>

                <button
                  onClick={() => reject(req)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TeamRequests;