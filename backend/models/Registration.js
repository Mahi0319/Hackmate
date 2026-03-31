const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  eventId: String,
  teamLead: String,
  collegeID: String,
  teamMembers: String,
  projectTitle: String,
  description: String,
  ppt: String,
  mvp: String
});

module.exports = mongoose.model("Registration", registrationSchema);