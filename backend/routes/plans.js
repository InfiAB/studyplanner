const express = require("express");
const {
  getPlans,
  getPlan,
  createPlan,
} = require("../controllers/plannerController");
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth)

// GET all workouts
router.get("/", getPlans);

// GET a single workout
router.get("/:id", getPlan);

// POST a new workout
router.post("/", createPlan);

module.exports = router;
