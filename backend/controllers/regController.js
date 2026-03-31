const Registration = require("../models/Registration");

exports.register = async (req, res) => {
  const reg = new Registration(req.body);
  await reg.save();
  res.json(reg);
};

exports.getMyRegs = async (req, res) => {
  const regs = await Registration.find({ studentId: req.params.id });
  res.json(regs);
};