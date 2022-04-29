const Opinion = require("../models/opinion");

const opinion_get = async (req, res) => {
  try {
    // gets all interview records sorted on basis of createdAt timestamps in desc order
    const opinions = await Opinion.find().sort({ createdAt: -1 });
    res.status(200).json({ opinions });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};

module.exports = {
  opinion_get,
};
