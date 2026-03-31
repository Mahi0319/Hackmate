const Team = require("../models/Team");

exports.createTeam = async (req, res) => {
  const team = new Team(req.body);
  await team.save();
  res.json(team);
};

exports.getTeams = async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
};