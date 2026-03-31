// File: events/JoinEventForm.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function JoinEventForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [student, setStudent] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    teamOption: "solo",
    teamName: "",
  });

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const found = events.find((ev) => String(ev.id) === String(id));
    setEvent(found);

    const logged = JSON.parse(localStorage.getItem("currentStudent"));
    if (!logged) return navigate("/student-login");
    setStudent(logged);

    setForm((f) => ({ ...f, name: logged.name, email: logged.email }));
  }, [id, navigate]);

  if (!event) return <div className="p-10 text-white">Event not found.</div>;

  const alreadyRegistered = () => {
    const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    return registrations.some(
      (r) => r.eventId === event.id && r.studentId === student.id
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (alreadyRegistered()) {
      alert("You are already registered for this event.");
      return navigate("/my-registrations");
    }

    const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    const newReg = {
      id: Date.now(),
      eventId: event.id,
      studentId: student.id,
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      teamOption: form.teamOption,
      teamName: form.teamOption === "create" ? form.teamName : "",
      status: "pending",
    };

    localStorage.setItem("registrations", JSON.stringify([...registrations, newReg]));

    alert("Registration successful!");
    navigate("/my-registrations");
  };

  return (
    <div className="min-h-screen p-10 bg-[#0b0f1a] text-white">
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-xl shadow-neon">
        <h1 className="text-3xl font-bold mb-6 text-neon-pink">
          Register for {event.title}
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.name}
            disabled
            className="w-full p-3 rounded bg-gray-900 text-white"
          />
          <input
            type="email"
            value={form.email}
            disabled
            className="w-full p-3 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            required
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            className="w-full p-3 rounded bg-gray-800 text-white"
          />

          {event.type === "Hackathon" && (
            <div>
              <select
                value={form.teamOption}
                onChange={(e) => setForm({ ...form, teamOption: e.target.value })}
                className="w-full p-3 rounded bg-gray-800 text-white"
              >
                <option value="solo">Solo Participation</option>
                <option value="create">Create Team</option>
                <option value="join">Join Existing Team</option>
              </select>

              {form.teamOption === "create" && (
                <input
                  type="text"
                  required
                  placeholder="Team Name"
                  value={form.teamName}
                  onChange={(e) => setForm({ ...form, teamName: e.target.value })}
                  className="w-full p-3 rounded bg-gray-800 text-white mt-3"
                />
              )}

              {form.teamOption === "join" && (
                <button
                  type="button"
                  onClick={() => navigate(`/explore-teams?event=${event.id}`)}
                  className="mt-3 w-full bg-blue-600 py-2 rounded"
                >
                  Explore Teams
                </button>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 py-3 rounded-lg font-semibold mt-4 hover:bg-green-600 transition"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinEventForm;