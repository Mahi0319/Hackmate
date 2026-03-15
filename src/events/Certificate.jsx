import React, { useRef } from "react";
import html2canvas from "html2canvas";

function Certificate() {

  const certRef = useRef();

  const downloadCertificate = () => {

    html2canvas(certRef.current).then((canvas) => {

      const link = document.createElement("a");

      link.download = "certificate.png";
      link.href = canvas.toDataURL();

      link.click();

    });

  };

  const student =
    JSON.parse(localStorage.getItem("studentProfile")) || {};

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">

      <div
        ref={certRef}
        className="bg-white w-[800px] p-10 border-8 border-indigo-600 rounded-xl text-center shadow-xl"
      >

        <h1 className="text-4xl font-bold mb-6">
          Certificate of Participation
        </h1>

        <p className="text-lg mb-4">
          This certificate is proudly presented to
        </p>

        <h2 className="text-3xl font-semibold mb-4">
          {student.name || "Student Name"}
        </h2>

        <p className="text-lg mb-4">
          For participating in
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          HackMate Hackathon
        </h3>

        <p className="text-gray-500">
          Organized on HackMate Platform
        </p>

      </div>

      <button
        onClick={downloadCertificate}
        className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        Download Certificate
      </button>

    </div>

  );
}

export default Certificate;