const express = require("express");
const router = express.Router();

// Example signup route
router.post("/signup", (req, res) => {
  const { name, email, password, role } = req.body;
  // TODO: Add DB logic here
  res.json({ message: "Signup successful", user: { name, email, role } });
});

module.exports = router;