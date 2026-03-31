const BASE_URL = "http://localhost:5000/api/tasks";

// GET all tasks
export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

// CREATE task
export const createTask = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

// UPDATE task
export const updateTask = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

// DELETE task
export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};