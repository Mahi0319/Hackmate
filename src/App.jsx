// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import StudentAuth from "./pages/StudentAuth";
import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import OrganizerLogin from "./pages/OrganizerLogin";
import OrganizerSignUp from "./pages/OrganizerSignUp";

/* Dashboards */
import OrganizerDashboard from "./dashboard/organizer/OrganizerDashboard";
import StudentDashboard from "./dashboard/student/StudentDashboard";
import MyEvents from "./dashboard/student/MyEvents";
import MyRegistrations from "./dashboard/student/MyRegistrations";
import OrganizerEvents from "./dashboard/organizer/OrganizerEvents";
import ManageEvent from "./dashboard/organizer/ManageEvent";
import RecommendedEvents from "./components/RecommendedEvents";
import OrganizerAnalytics from "./dashboard/organizer/OrganizerAnalytics";
import MyCertificates from "./dashboard/student/MyCertificates";

/* Events */
import CreateEvent from "./events/CreateEvent";
import ExploreEvents from "./events/ExploreEvents";
import EventDetails from "./events/EventDetails";
import JoinEventForm from "./events/JoinEventForm";
import ViewParticipants from "./events/ViewParticipants";

/* Teams */
import CreateTeam from "./teams/CreateTeam";
import ExploreTeams from "./teams/ExploreTeams";
import MyTeams from "./teams/MyTeams";
import TeamRequests from "./teams/TeamRequests";

/* Profile */
import StudentProfile from "./profile/StudentProfile";

/* NFC */
import NFCAttendanceScan from "./components/NFCAttendanceScan";

/* Certificates */
import Certificate from "./components/Certificate";  
import CertificateBuilder from "./certificates/CertificateBuilder";    // ✅ NEW

function App() {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Student Auth */}
        <Route path="/student-auth" element={<StudentAuth />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-signup" element={<StudentSignup />} />

        {/* Student Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Explore & Event System */}
        <Route path="/explore-events" element={<ExploreEvents />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/join-event/:id" element={<JoinEventForm />} />
        <Route path="/participants/:id" element={<ViewParticipants />} />

        {/* Student Certificates */}
        <Route path="/my-certificates" element={<MyCertificates />} />
        <Route path="/certificate/:id" element={<Certificate />} />

        {/* Certificate Builder (Organizer) */}
        <Route path="/certificate-builder" element={<CertificateBuilder />} />

        {/* Teams */}
        <Route path="/create-team/:id" element={<CreateTeam />} />
        <Route path="/explore-teams" element={<ExploreTeams />} />
        <Route path="/team-requests" element={<TeamRequests />} />
        <Route path="/my-teams" element={<MyTeams />} />
        <Route path="/recommended-events" element={<RecommendedEvents />} />

        {/* Student Profile */}
        <Route path="/student-profile" element={<StudentProfile />} />

        {/* Student Data */}
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/my-registrations" element={<MyRegistrations />} />

        {/* Organizer Auth */}
        <Route path="/organizer-login" element={<OrganizerLogin />} />
        <Route path="/organizer-signup" element={<OrganizerSignUp />} />

        {/* Organizer Dashboard */}
        <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/organizer-events" element={<OrganizerEvents />} />
        <Route path="/manage-event/:id" element={<ManageEvent />} />
        <Route path="/organizer-analytics" element={<OrganizerAnalytics />} />

        {/* NFC Attendance */}
        <Route path="/scan-nfc/:eventId" element={<NFCAttendanceScan />} />

      </Routes>
    </Router>
  );
}

export default App;