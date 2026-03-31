const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// GET events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// CREATE event (for organizer)
router.post("/", async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json(event);
});

module.exports = router;