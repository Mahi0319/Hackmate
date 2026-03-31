const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");
const upload = require("../middleware/upload");

// POST registration
router.post("/", upload.single("ppt"), async (req, res) => {
  const newRegistration = new Registration({
    eventId: req.body.eventId,
    teamLead: req.body.teamLead,
    collegeID: req.body.collegeID,
    teamMembers: req.body.teamMembers,
    projectTitle: req.body.projectTitle,
    description: req.body.description,
    ppt: req.file ? req.file.filename : "",
    mvp: req.body.mvp
  });

  await newRegistration.save();
  res.json({ message: "Registered Successfully" });
});

module.exports = router;