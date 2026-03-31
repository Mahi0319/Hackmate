import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});


// ======================
// AUTH APIs
// ======================

// ✅ Student Signup
export const studentSignup = async (data) => {
  try {
    const res = await API.post("/auth/signup", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { message: "Signup Error" };
  }
};

// ✅ Student Login
export const studentLogin = async (data) => {
  try {
    const res = await API.post("/auth/login", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { message: "Login Error" };
  }
};

// ✅ Organizer Signup
export const organizerSignup = async (data) => {
  try {
    const res = await API.post("/organizer/signup", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { message: "Signup Error" };
  }
};

// ✅ Organizer Login
export const organizerLogin = async (data) => {
  try {
    const res = await API.post("/organizer/login", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { message: "Login Error" };
  }
};


// ======================
// EVENTS APIs
// ======================

// Create Event
export const createEvent = async (data) => {
  try {
    const res = await API.post("/events", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { message: "Error creating event" };
  }
};

// Get All Events
export const getEvents = async () => {
  try {
    const res = await API.get("/events");
    return res.data;
  } catch (error) {
    return [];
  }
};

// Get Single Event
export const getEventById = async (id) => {
  try {
    const res = await API.get(`/events/${id}`);
    return res.data;
  } catch (error) {
    return null;
  }
};


// ======================
// TEAM APIs
// ======================

// Create Team
export const createTeam = async (data) => {
  try {
    const res = await API.post("/teams", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { message: "Error creating team" };
  }
};

// Get Teams
export const getTeams = async () => {
  try {
    const res = await API.get("/teams");
    return res.data;
  } catch (error) {
    return [];
  }
};


// ======================
// REGISTRATION APIs
// ======================

// Join Event
export const joinEvent = async (data) => {
  try {
    const res = await API.post("/registrations", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { message: "Error joining event" };
  }
};