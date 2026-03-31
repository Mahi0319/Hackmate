const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  eventId: String,
  name: String,
  leader: String,
  skills: String,
  teamSize: String,
  members: [String]
});

module.exports = mongoose.model("Team", teamSchema);