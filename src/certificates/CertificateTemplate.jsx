// src/certificates/CertificateTemplate.jsx
import React from "react";

const CertificateTemplate = ({
  studentName,
  eventName,
  organizerName,
  collegeName = "KITS College",
  date,
  dynamicFields = {},
}) => {
  return (
    <div
      id="certificate"
      className="w-full max-w-3xl mx-auto p-10 bg-white shadow-xl border-8 border-blue-700 rounded-xl"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,1), rgba(230,240,255,0.7))",
      }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700">Certificate of Participation</h2>
        <p className="text-gray-700 mt-2 text-lg">{collegeName}</p>
      </div>

      {/* Main Content */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-700">This is to certify that</p>

        <h1 className="text-4xl font-semibold mt-2 text-gray-900">
          {studentName}
        </h1>

        <p className="text-lg text-gray-700 mt-4">has successfully participated in</p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-2">
          {eventName}
        </h2>

        {/* Dynamic Fields */}
        <div className="mt-6">
          {Object.keys(dynamicFields).map((key) => (
            <p key={key} className="text-gray-700 text-lg">
              <span className="font-semibold">{key}: </span>
              {dynamicFields[key]}
            </p>
          ))}
        </div>

        {/* Date */}
        <p className="text-gray-600 mt-6">Date: {date}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-10 px-8">
        <div className="text-center">
          <p className="text-gray-700 font-semibold">{organizerName}</p>
          <p className="text-gray-500 text-sm">Organizer</p>
        </div>

        <div className="text-center">
          <p className="text-gray-700 font-semibold">HackMate Team</p>
          <p className="text-gray-500 text-sm">System Generated</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;