import React, { useState, useEffect } from "react";

function TeamRequests() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    const storedRequests =
      JSON.parse(localStorage.getItem("teamRequests")) || [];

    setRequests(storedRequests);

  }, []);

  const updateStatus = (index, status) => {

    const updatedRequests = [...requests];

    updatedRequests[index].status = status;

    setRequests(updatedRequests);

    localStorage.setItem(
      "teamRequests",
      JSON.stringify(updatedRequests)
    );

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Team Join Requests
      </h1>

      {requests.length === 0 ? (

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            No requests yet.
          </p>
        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {requests.map((req, index) => (

            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6"
            >

              <h2 className="text-xl font-semibold mb-2">
                {req.studentName}
              </h2>

              <p className="text-gray-500 mb-2">
                Skill: {req.skill}
              </p>

              <p className="text-gray-500 mb-4">
                Status: {req.status}
              </p>

              {req.status === "pending" && (

                <div className="flex gap-4">

                  <button
                    onClick={() => updateStatus(index, "accepted")}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => updateStatus(index, "rejected")}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Reject
                  </button>

                </div>

              )}

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default TeamRequests;