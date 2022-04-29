const Spotlight = require("../models/spotlight");

const spotlight_get = async (req, res) => {
  try {
    // gets all interview records sorted on basis of createdAt timestamps in desc order
    const spotlight = await Spotlight.find().sort({ createdAt: -1 });
    res.status(200).json({ spotlight });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};

module.exports = {
  spotlight_get,
};
