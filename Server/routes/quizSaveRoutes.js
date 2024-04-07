const express = require("express");
const {
  createQuiz,
  getQuizzes,
  getQuizById,
} = require("../controllers/quizSaveController");

const router = express.Router();

router.post("/quiz", createQuiz);
router.get("/quiz", getQuizzes);
router.get("/quiz/:id", getQuizById);

module.exports = router;
