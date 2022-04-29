const mongoose = require("mongoose");
const opinionSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    opinionHeading: {
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
      default: "Opinion",
    },
  },
  { timestamps: true }
);

const Opinion = mongoose.model("opinion", opinionSchema);
module.exports = Opinion;
