const mongoose = require("mongoose");
const interviewSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    interviewHeading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    agenda: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "Interview",
    },
  },
  { timestamps: true }
);

const Interview = mongoose.model("interview", interviewSchema);
module.exports = Interview;
