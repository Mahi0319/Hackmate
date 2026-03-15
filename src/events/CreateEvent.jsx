import React, { useState } from "react";
import { motion } from "framer-motion";

function CreateEvent() {

  const [event, setEvent] = useState({
    title: "",
    type: "",
    description: "",
    teamSize: "",
    skills: "",
    location: "",
    deadline: "",
    date: "",
    prize: "",
    poster: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEvent({
      ...event,
      [name]: value
    });
  };

  const handlePoster = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setEvent({ ...event, poster: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const events = JSON.parse(localStorage.getItem("events")) || [];

    const newEvent = {
      ...event,
      id: Date.now()
    };

    events.push(newEvent);

    localStorage.setItem("events", JSON.stringify(events));

    alert("Event Created Successfully 🚀");

    setEvent({
      title: "",
      type: "",
      description: "",
      teamSize: "",
      skills: "",
      location: "",
      deadline: "",
      date: "",
      prize: "",
      poster: ""
    });
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-10 text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-4xl"
      >

        <h1 className="text-4xl font-bold mb-8 text-center">
          Create Event
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">

          {/* Event Title */}
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={event.title}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          {/* Event Type */}
          <select
            name="type"
            value={event.type}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
          >
            <option value="">Select Event Type</option>
            <option>Hackathon</option>
            <option>Workshop</option>
            <option>Ideathon</option>
            <option>Competition</option>
          </select>

          {/* Team Size */}
          <input
            type="number"
            name="teamSize"
            placeholder="Team Size"
            value={event.teamSize}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          {/* Skills */}
          <input
            type="text"
            name="skills"
            placeholder="Required Skills"
            value={event.skills}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={event.location}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          {/* Prize */}
          <input
            type="text"
            name="prize"
            placeholder="Prize Pool"
            value={event.prize}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          {/* Event Date */}
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          {/* Deadline */}
          <input
            type="date"
            name="deadline"
            value={event.deadline}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Event Description"
            value={event.description}
            onChange={handleChange}
            className="col-span-2 p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          {/* Poster Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handlePoster}
            className="col-span-2"
          />

          {/* Poster Preview */}
          {event.poster && (
            <img
              src={event.poster}
              alt="poster"
              className="col-span-2 rounded-xl max-h-60 object-cover"
            />
          )}

          {/* Submit */}
          <button
            type="submit"
            className="col-span-2 bg-gradient-to-r from-indigo-500 to-purple-500 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition"
          >
            Create Event
          </button>

        </form>

      </motion.div>

    </div>
  );
}

export default CreateEvent;