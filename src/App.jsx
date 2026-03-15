import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import StudentAuth from "./pages/StudentAuth";
import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import OrganizerLogin from "./pages/OrganizerLogin";
import OrganizerSignup from "./pages/OrganizerSignup";

/* Dashboards */
import OrganizerDashboard from "./dashboard/organizer/OrganizerDashboard";
import StudentDashboard from "./dashboard/student/StudentDashboard";
import MyEvents from "./dashboard/student/MyEvents";
import MyRegistrations from "./dashboard/student/MyRegistrations";
import OrganizerEvents from "./dashboard/organizer/OrganizerEvents";
import ManageEvent from "./dashboard/organizer/ManageEvent";
import RecommendedEvents from "./components/RecommendedEvents";
import OrganizerAnalytics from "./dashboard/organizer/OrganizerAnalytics";

/* Events */
import CreateEvent from "./events/CreateEvent";
import ExploreEvents from "./events/ExploreEvents";
import EventDetails from "./events/EventDetails";
import JoinEventForm from "./events/JoinEventForm";
import ViewParticipants from "./events/ViewParticipants";
import Certificate from "./events/Certificate";

/* Teams */
import CreateTeam from "./teams/CreateTeam";
import ExploreTeams from "./teams/ExploreTeams";
import MyTeams from "./teams/MyTeams";
import TeamRequests from "./teams/TeamRequests";

/* Profile */
import StudentProfile from "./profile/StudentProfile";

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

        {/* Events */}
        <Route path="/explore-events" element={<ExploreEvents />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
        <Route path="/join/:id" element={<JoinEventForm />} />
        <Route path="/participants/:id" element={<ViewParticipants />} />
        <Route path="/certificate/:id" element={<Certificate />} />

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
        <Route path="/organizer-signup" element={<OrganizerSignup />} />

        {/* Organizer */}
        <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/organizer-events" element={<OrganizerEvents />} />
        <Route path="/manage-event/:id" element={<ManageEvent />} />
        <Route path="/organizer-analytics" element={<OrganizerAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;