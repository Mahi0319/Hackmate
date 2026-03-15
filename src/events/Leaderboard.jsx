import React, { useEffect, useState } from "react";

function Leaderboard() {

  const [leaders, setLeaders] = useState([]);

  useEffect(() => {

    const storedLeaders =
      JSON.parse(localStorage.getItem("leaderboard")) || [];

    setLeaders(storedLeaders);

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Hackathon Leaderboard
      </h1>

      {leaders.length === 0 ? (

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            No winners announced yet.
          </p>
        </div>

      ) : (

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full text-left">

            <thead className="bg-indigo-600 text-white">

              <tr>
                <th className="p-4">Rank</th>
                <th className="p-4">Team</th>
                <th className="p-4">Project</th>
                <th className="p-4">Score</th>
              </tr>

            </thead>

            <tbody>

              {leaders.map((team, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4 font-semibold">
                    {index + 1}
                  </td>

                  <td className="p-4">
                    {team.team}
                  </td>

                  <td className="p-4">
                    {team.project}
                  </td>

                  <td className="p-4">
                    {team.score}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );
}

export default Leaderboard;