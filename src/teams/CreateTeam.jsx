import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateTeam() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [teamName, setTeamName] = useState("");
  const [leader, setLeader] = useState("");
  const [skills, setSkills] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const teams = JSON.parse(localStorage.getItem("teams")) || [];

    teams.push({
      eventId: id,
      name: teamName,
      leader,
      skills,
      teamSize,
      description,
      members: 1
    });

    localStorage.setItem("teams", JSON.stringify(teams));

    navigate("/explore-teams");

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">

        <h1 className="text-2xl font-bold mb-6">
          Create Team
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Team Leader"
            value={leader}
            onChange={(e) => setLeader(e.target.value)}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Required Skills (React, AI, UI/UX)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Team Size"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Team Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Create Team
          </button>

        </form>

      </div>

    </div>

  );
}

export default CreateTeam;