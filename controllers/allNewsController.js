const Stat = require("../models/stat");
const Interview = require("../models/interview");
const Opinion = require("../models/opinion");
const Spotlight = require("../models/spotlight");
const all_news_get = async (req, res) => {
  try {
    //   get records from all collections
    //   and return these as json.All the records are sorted basis of timestamps in desc order
    const stats = await Stat.find().sort({ createdAt: -1 });
    const interview = await Interview.find().sort({ createdAt: -1 });
    const opinions = await Opinion.find().sort({ createdAt: -1 });
    const spotlight = await Spotlight.find().sort({ createdAt: -1 });
    res.status(200).json({ stats, interview, opinions, spotlight });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};

module.exports = {
  all_news_get,
};
