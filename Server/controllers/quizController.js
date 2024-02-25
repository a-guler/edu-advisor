const {
  interest_questions,
  risk_questions,
  income_desire_questions,
} = require("./quizData");

const getQuestions = (req, res) => {
  res.json({ interest_questions, risk_questions, income_desire_questions });
};

module.exports = { getQuestions };
