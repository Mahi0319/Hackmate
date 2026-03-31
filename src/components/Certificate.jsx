// File: src/components/Certificate.jsx
import React, { useEffect, useState } from "react";

function Certificate() {
  const [certificates, setCertificates] = useState([]);
  const student = JSON.parse(localStorage.getItem("currentStudent")) || {};

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const myCerts = events.filter(
      ev => ev.attendance?.includes(student.nfcId)
    );
    setCertificates(myCerts);
  }, [student.nfcId]);

  if (!student.nfcId) return <div className="p-10 text-white">Student NFC ID not found.</div>;

  return (
    <div className="min-h-screen p-10 bg-[#0b0f1a] text-white">
      <h1 className="text-3xl font-bold mb-6 text-neon-blue">My Certificates</h1>

      {certificates.length === 0 ? (
        <p>No certificates available yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map(ev => (
            <div key={ev.id} className="bg-gradient-to-br from-purple-700 to-indigo-700 rounded-xl p-6 shadow-neon">
              <h2 className="text-2xl font-bold mb-2">{ev.title}</h2>
              <p className="text-white/80 mb-3">{ev.description}</p>
              <p className="text-white/80 mb-3"><strong>Date:</strong> {ev.date}</p>
              <button
                onClick={() => alert(`Download certificate for ${ev.title}`)}
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      )}
      
      <style>{`
        .shadow-neon {
          box-shadow: 0 0 20px rgba(255,255,255,0.2),
                      0 0 40px rgba(0,255,255,0.3),
                      0 0 60px rgba(255,0,255,0.3);
        }
        .text-neon-blue { color: #00ffff; text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; }
      `}</style>
    </div>
  );
}

export default Certificate;