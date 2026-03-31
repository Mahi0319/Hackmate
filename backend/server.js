const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Enable CORS for your frontend
app.use(cors({
  origin: "http://localhost:5180",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/registrations", require("./routes/registrationRoutes"));
app.use("/api/auth", require("./routes/authRoutes")); // make sure your signup route exists here

// Connect to MongoDB
mongoose.connect("mongodb+srv://Mahesh0319:Mahesh0319@hackmate.fqesneb.mongodb.net/hackmate")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});