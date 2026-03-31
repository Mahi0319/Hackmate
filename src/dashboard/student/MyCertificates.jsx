import React, { useEffect, useState } from "react";

function MyCertificates() {
  const [certificates, setCertificates] = useState([]);
  const student = JSON.parse(localStorage.getItem("currentStudent")) || {};

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("certificates")) || [];
    const myCertificates = stored.filter(c => c.studentId === student.id);
    setCertificates(myCertificates);
  }, [student.id]);

  return (
    <div className="p-10 bg-[#0b0f1a] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 text-neon-blue">My Certificates</h1>

      {certificates.length === 0 ? (
        <p className="text-gray-400">No certificates available yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-gray-900 p-6 rounded-xl shadow-neon">
              <h2 className="text-2xl font-semibold text-neon-purple">{cert.eventName}</h2>
              <p className="text-gray-300 mt-2">Awarded for participation</p>

              <a
                href={`/certificate/${cert.id}`}
                className="inline-block mt-4 bg-neon-blue px-4 py-2 rounded-lg text-black font-bold"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCertificates;