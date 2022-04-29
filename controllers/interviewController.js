const Interview = require("../models/interview");

const interview_get = async (req, res) => {
  try {
    // gets all interview records sorted on basis of createdAt timestamps in desc order
    const interview = await Interview.find().sort({ createdAt: -1 });
    res.status(200).json({ interview });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};

module.exports = {
  interview_get,
};
