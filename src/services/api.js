const BASE_URL = "http://localhost:5000/api";

// STUDENT AUTH
export const studentSignup = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, role: "student" }),
  });
  return res.json();
};

export const studentLogin = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// ORGANIZER AUTH
export const organizerSignup = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, role: "organizer" }),
  });
  return res.json();
};

export const organizerLogin = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// EVENTS
export const createEvent = async (data) => {
  const res = await fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getEvents = async () => {
  const res = await fetch(`${BASE_URL}/events`);
  return res.json();
};

// REGISTER EVENT
export const registerEvent = async (data) => {
  const res = await fetch(`${BASE_URL}/registrations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};