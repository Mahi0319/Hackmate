import React, { useEffect, useState } from "react";

function MyTeams(){

  const [teams,setTeams] = useState([]);

  useEffect(()=>{

    const storedTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const student = JSON.parse(localStorage.getItem("currentStudent"));

    const myTeams = storedTeams.filter(team =>
      team.members.includes(student?.name)
    );

    setTeams(myTeams);

  },[]);

  return(

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        My Teams
      </h1>

      {teams.length === 0 ?(

        <p className="text-gray-400">No Teams Joined Yet</p>

      ):(
        <div className="grid grid-cols-3 gap-8">

          {teams.map((team)=>(
            <div
              key={team.id}
              className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
            >

              <h2 className="text-xl font-semibold mb-2">
                {team.teamName}
              </h2>

              <p className="text-gray-400 mb-2">
                Leader: {team.leader}
              </p>

              <p className="text-gray-400">
                Skills: {team.skills}
              </p>

            </div>
          ))}

        </div>
      )}

    </div>

  )

}

export default MyTeams;