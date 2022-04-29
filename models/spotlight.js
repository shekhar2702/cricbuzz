const mongoose = require("mongoose");
const spotLightSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    spotLightHeading: {
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
      default: "Spotlight",
    },
  },
  { timestamps: true }
);

const Spotlight = mongoose.model("spotlight", spotLightSchema);
module.exports = Spotlight;
