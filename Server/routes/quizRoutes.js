const express = require("express");
const { getQuestions } = require("../controllers/quizController");
const router = express.Router();

router.get("/questions", getQuestions);

module.exports = router;
