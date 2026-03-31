// src/certificates/CertificateBuilder.jsx
import React, { useState, useEffect } from "react";
import CertificateTemplate from "./CertificateTemplate";

function CertificateBuilder() {
  const [studentName, setStudentName] = useState("");
  const [eventName, setEventName] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [collegeName, setCollegeName] = useState("Kits College");
  const [date, setDate] = useState("");

  const [dynamicFields, setDynamicFields] = useState({});
  const [newFieldKey, setNewFieldKey] = useState("");
  const [newFieldValue, setNewFieldValue] = useState("");

  useEffect(() => {
    // Auto-fill event & organizer if event is selected
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent"));
    const organizer = JSON.parse(localStorage.getItem("currentOrganizer"));

    if (currentEvent) setEventName(currentEvent.title);
    if (organizer) setOrganizerName(organizer.name);
  }, []);

  const addDynamicField = () => {
    if (newFieldKey.trim() === "" || newFieldValue.trim() === "") return;
    setDynamicFields((prev) => ({
      ...prev,
      [newFieldKey]: newFieldValue,
    }));
    setNewFieldKey("");
    setNewFieldValue("");
  };

  const saveCertificate = () => {
    const certificates = JSON.parse(localStorage.getItem("certificates")) || [];

    const newCert = {
      id: Date.now(),
      studentName,
      eventName,
      organizerName,
      collegeName,
      date,
      dynamicFields,
    };

    certificates.push(newCert);
    localStorage.setItem("certificates", JSON.stringify(certificates));

    alert("Certificate Created Successfully!");
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Create Certificate</h1>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
          <label className="block mb-2">Student Name</label>
          <input
            className="w-full p-2 rounded bg-[#1f2937]"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <label className="block mt-4 mb-2">Date</label>
          <input
            type="date"
            className="w-full p-2 rounded bg-[#1f2937]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="block mt-4 mb-2">Add Field Key</label>
          <input
            className="w-full p-2 rounded bg-[#1f2937]"
            value={newFieldKey}
            onChange={(e) => setNewFieldKey(e.target.value)}
          />

          <label className="block mt-4 mb-2">Add Field Value</label>
          <input
            className="w-full p-2 rounded bg-[#1f2937]"
            value={newFieldValue}
            onChange={(e) => setNewFieldValue(e.target.value)}
          />

          <button
            onClick={addDynamicField}
            className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Field
          </button>

          <button
            onClick={saveCertificate}
            className="mt-4 ml-4 bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Save Certificate
          </button>
        </div>

        {/* LIVE PREVIEW */}
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <CertificateTemplate
            studentName={studentName}
            eventName={eventName}
            organizerName={organizerName}
            collegeName={collegeName}
            date={date}
            dynamicFields={dynamicFields}
          />
        </div>
      </div>
    </div>
  );
}

export default CertificateBuilder;