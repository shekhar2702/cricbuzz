const mongoose = require("mongoose");
const statSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    statHeading: {
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
      default: "Stat",
    },
  },
  { timestamps: true }
);

const Stat = mongoose.model("stat", statSchema);
module.exports = Stat;
