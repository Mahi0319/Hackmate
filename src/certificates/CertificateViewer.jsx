// src/certificates/CertificateViewer.jsx
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CertificateTemplate from "./CertificateTemplate";
import html2canvas from "html2canvas";

function CertificateViewer() {
  const { id } = useParams(); // event or certificate ID
  const [certificate, setCertificate] = useState(null);

  const certRef = useRef();

  useEffect(() => {
    const certificates = JSON.parse(localStorage.getItem("certificates")) || [];
    const found = certificates.find((c) => c.id == id);
    setCertificate(found);
  }, [id]);

  const downloadPNG = async () => {
    const canvas = await html2canvas(certRef.current);
    const link = document.createElement("a");
    link.download = `Certificate_${certificate.studentName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (!certificate) {
    return (
      <div className="text-center text-red-600 p-10">
        Certificate Not Found
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <div ref={certRef}>
        <CertificateTemplate
          studentName={certificate.studentName}
          eventName={certificate.eventName}
          organizerName={certificate.organizerName}
          collegeName={certificate.collegeName}
          date={certificate.date}
          dynamicFields={certificate.dynamicFields || {}}
        />
      </div>

      <button
        onClick={downloadPNG}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
      >
        Download Certificate
      </button>
    </div>
  );
}

export default CertificateViewer;