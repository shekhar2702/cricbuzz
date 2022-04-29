const { Router } = require("express");
const router = Router();
const { stats_get } = require("../controllers/statController");
const { all_news_get } = require("../controllers/allNewsController");
const { interview_get } = require("../controllers/interviewController");
const { opinion_get } = require("../controllers/opinionController");
const { spotlight_get } = require("../controllers/spotlightController");

//Routes along with their controllers
router.get("/stat-list", stats_get);
router.get("/all-news-list", all_news_get);
router.get("/interview-list", interview_get);
router.get("/opinion-list", opinion_get);
router.get("/spotlight-list", spotlight_get);

module.exports = router;
