const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plannerSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    maxstudents: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Planner", plannerSchema);
