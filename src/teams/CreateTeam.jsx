import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CreateTeam() {
  const { id } = useParams(); // event id
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [event, setEvent] = useState(null);
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("student"));
    if (!logged) return navigate("/student-login");
    setStudent(logged);

    const events = JSON.parse(localStorage.getItem("events")) || [];
    const ev = events.find((e) => String(e.id) === String(id));
    setEvent(ev);
  }, [id, navigate]);

  // Check already created team
  const alreadyHasTeam = () => {
    const teams = JSON.parse(localStorage.getItem("teams")) || [];
    return teams.some(
      (t) => t.eventId === id && t.leaderId === student.id
    );
  };

  const handleCreate = (e) => {
    e.preventDefault();

    if (alreadyHasTeam()) {
      alert("You already created a team!");
      return navigate("/my-teams");
    }

    let teams = JSON.parse(localStorage.getItem("teams")) || [];

    const newTeam = {
      id: Date.now(),
      eventId: id,
      leaderId: student.id,
      leaderName: student.name,
      teamName,
      members: [student],
      requests: []
    };

    localStorage.setItem("teams", JSON.stringify([...teams, newTeam]));

    alert("Team created successfully!");
    navigate("/my-teams");
  };

  if (!event) return <div className="p-10">Event not found.</div>;

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        
        <h1 className="text-3xl font-bold mb-4">Create Team</h1>
        <p className="text-gray-600 mb-6">
          Event: <strong>{event.title}</strong>
        </p>

        <form className="space-y-5" onSubmit={handleCreate}>
          <div>
            <label className="block text-gray-700">Team Name</label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded"
              placeholder="Enter your team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Create Team
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTeam;