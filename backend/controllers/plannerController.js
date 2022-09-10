const Planner = require("../models/plannerModel");
const mongoose = require("mongoose");

// get all plans
const getPlans = async (req, res) => {
  const plans = await Planner.find({}).sort({ createdAt: -1 });

  res.status(200).json(plans);
};

// get a single plan
const getPlan = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Plan" });
  }

  const plan = await Planner.findById(id);

  if (!plan) {
    return res.status(404).json({ error: "No such plan" });
  }

  res.status(200).json(plan);
};

// create a new plan
const createPlan = async (req, res) => {
  const { title, subject, start, end, maxstudents } = req.body;

  // add to the database
  try {
    const plan = await Planner.create({
      title,
      subject,
      start,
      end,
      maxstudents,
    });
    res.status(200).json(plan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPlans,
  getPlan,
  createPlan,
};
