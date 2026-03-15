import React, { useState } from "react";

function Join() {

  const events = [
    { id: 1, name: "Hackathon 2026", date: "20 April", location: "Vijayawada" },
    { id: 2, name: "AI Bootcamp", date: "25 April", location: "Hyderabad" }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form, setForm] = useState({
    teamLead: "",
    collegeID: "",
    teamMembers: "",
    projectTitle: "",
    description: "",
    ppt: null,
    mvp: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentStudent =
      JSON.parse(localStorage.getItem("currentStudent"));

    let students =
      JSON.parse(localStorage.getItem("students")) || [];

    const index = students.findIndex(
      (s) => s.email === currentStudent.email
    );

    if (!students[index].registeredEvents) {
      students[index].registeredEvents = [];
    }

    students[index].registeredEvents.push({
      ...selectedEvent,
      submission: {
        projectTitle: form.projectTitle,
        description: form.description,
        pptFileName: form.ppt?.name,
        mvpLink: form.mvp
      }
    });

    localStorage.setItem("students", JSON.stringify(students));
    localStorage.setItem(
      "currentStudent",
      JSON.stringify(students[index])
    );

    alert("Registration Submitted Successfully 🎉");

    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <h2 className="text-3xl font-semibold mb-8">
        Browse Events
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold">
              {event.name}
            </h3>
            <p className="text-gray-500">{event.date}</p>
            <p className="text-gray-500">{event.location}</p>

            <button
              onClick={() => setSelectedEvent(event)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Register
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-8 rounded-2xl w-[500px]">

            <h3 className="text-2xl font-semibold mb-4">
              Register for {selectedEvent.name}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                placeholder="Team Lead Name"
                required
                className="p-3 border rounded"
                onChange={(e) => setForm({...form, teamLead: e.target.value})}
              />

              <input
                placeholder="College ID"
                required
                className="p-3 border rounded"
                onChange={(e) => setForm({...form, collegeID: e.target.value})}
              />

              <input
                placeholder="Team Members (comma separated)"
                className="p-3 border rounded"
                onChange={(e) => setForm({...form, teamMembers: e.target.value})}
              />

              <input
                placeholder="Project Title"
                required
                className="p-3 border rounded"
                onChange={(e) => setForm({...form, projectTitle: e.target.value})}
              />

              <textarea
                placeholder="Project Description"
                required
                className="p-3 border rounded"
                onChange={(e) => setForm({...form, description: e.target.value})}
              />

              <input
                type="file"
                required
                className="p-2"
                onChange={(e) => setForm({...form, ppt: e.target.files[0]})}
              />

              <input
                placeholder="MVP Link (optional)"
                className="p-3 border rounded"
                onChange={(e) => setForm({...form, mvp: e.target.value})}
              />

              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default Join;