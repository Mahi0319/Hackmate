import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewParticipants() {

  const { id } = useParams();

  const [participants, setParticipants] = useState([]);

  useEffect(() => {

    const registrations =
      JSON.parse(localStorage.getItem("registrations")) || [];

    const eventParticipants = registrations.filter(
      (reg) => reg.eventId === id
    );

    setParticipants(eventParticipants);

  }, [id]);

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Event Participants
      </h1>

      {participants.length === 0 ? (

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            No participants registered yet.
          </p>
        </div>

      ) : (

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">

          <table className="w-full text-left">

            <thead className="bg-indigo-600 text-white">

              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">College</th>
                <th className="p-4">Skills</th>
              </tr>

            </thead>

            <tbody>

              {participants.map((p, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">{p.name}</td>
                  <td className="p-4">{p.email}</td>
                  <td className="p-4">{p.college}</td>
                  <td className="p-4">{p.skills}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );
}

export default ViewParticipants;