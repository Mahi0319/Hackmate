const User = require("../models/User");

exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = new User({ name, email, password, role });
  await user.save();

  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) return res.status(400).json({ msg: "Invalid" });

  res.json(user);
};