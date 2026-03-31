// File: src/components/NFCAttendanceScan.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function NFCAttendanceScan() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [nfcInput, setNfcInput] = useState("");
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const found = events.find(ev => String(ev.id) === String(eventId));
    if (!found) return navigate("/organizer-dashboard");
    setEvent(found);
    setAttendance(found.attendance || []);
  }, [eventId, navigate]);

  const handleScan = () => {
    if (!nfcInput) return alert("Enter NFC ID");
    if (attendance.includes(nfcInput)) {
      alert("Student already scanned");
      setNfcInput("");
      return;
    }

    const updatedAttendance = [...attendance, nfcInput];
    setAttendance(updatedAttendance);

    // Update localStorage
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const updatedEvents = events.map(ev =>
      ev.id === event.id ? { ...ev, attendance: updatedAttendance } : ev
    );
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    alert("Attendance recorded!");
    setNfcInput("");
  };

  if (!event) return <div className="p-10 text-white">Event not found.</div>;

  return (
    <div className="min-h-screen p-10 bg-[#0b0f1a] text-white">
      <h1 className="text-3xl font-bold mb-6 text-neon-pink">Scan NFC for {event.title}</h1>

      <div className="mb-6">
        <input
          type="text"
          value={nfcInput}
          onChange={(e) => setNfcInput(e.target.value)}
          placeholder="Enter NFC ID"
          className="p-3 rounded-lg w-80 text-black"
        />
        <button
          onClick={handleScan}
          className="ml-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Scan
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Scanned Students</h2>
        {attendance.length === 0 ? (
          <p>No students scanned yet.</p>
        ) : (
          <ul className="list-disc list-inside">
            {attendance.map((id, idx) => (
              <li key={idx} className="text-neon-green">{id}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NFCAttendanceScan;