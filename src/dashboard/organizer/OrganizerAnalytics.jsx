import React, { useEffect, useState } from "react";

function OrganizerAnalytics() {

  const [events, setEvents] = useState(0);
  const [teams, setTeams] = useState(0);
  const [participants, setParticipants] = useState(0);
  const [registrations, setRegistrations] = useState(0);

  useEffect(() => {

    const storedEvents =
      JSON.parse(localStorage.getItem("events")) || [];

    const storedTeams =
      JSON.parse(localStorage.getItem("teams")) || [];

    const storedRegistrations =
      JSON.parse(localStorage.getItem("registrations")) || [];

    const storedRequests =
      JSON.parse(localStorage.getItem("teamRequests")) || [];

    setEvents(storedEvents.length);
    setTeams(storedTeams.length);
    setParticipants(storedRequests.length);
    setRegistrations(storedRegistrations.length);

  }, []);

  return (

    <div className="grid md:grid-cols-4 gap-6 mt-10">

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-gray-500">Total Events</h2>
        <p className="text-3xl font-bold mt-2">{events}</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-gray-500">Teams Created</h2>
        <p className="text-3xl font-bold mt-2">{teams}</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-gray-500">Team Requests</h2>
        <p className="text-3xl font-bold mt-2">{participants}</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-gray-500">Registrations</h2>
        <p className="text-3xl font-bold mt-2">{registrations}</p>
      </div>

    </div>

  );
}

export default OrganizerAnalytics;