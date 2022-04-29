const Stat = require("../models/stat");

const stats_get = async (req, res) => {
  try {
    // gets all interview records sorted on basis of createdAt timestamps in desc order
    const stats = await Stat.find().sort({ createdAt: -1 });
    res.status(200).json({ stats });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};

module.exports = {
  stats_get,
};
