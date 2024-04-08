const jwt = require("jsonwebtoken");
const { Quiz, User } = require("../models");
const fs = require("fs");

const secret = process.env.SECRET;

const createQuiz = async (req, res) => {
  const { quizResults, quizName } = req.body;
  console.log(quizName);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, secret, {}, async (error, info) => {
      if (error) throw error;
      const quizDoc = await Quiz.create({
        quizResults: quizResults,
        quizName: quizName,
        userId: info.id,
      });

      res.json(quizDoc);
    });
  }
};

const getQuizzes = async (req, res) => {
  const quizzes = await Quiz.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  res.json(quizzes);
};

const getQuizById = async (req, res) => {
  const { id } = req.params;

  const quiz = await Quiz.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  });

  if (quiz) {
    res.json(quiz.toJSON());
  } else {
    res.status(400).json("Couldn't find post with that id");
  }
};

module.exports = { createQuiz, getQuizzes, getQuizById };
