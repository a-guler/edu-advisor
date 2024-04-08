const jwt = require("jsonwebtoken");
const { Graduate, Advisor, sequelize } = require("../models");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

const secret = process.env.SECRET;


const getAdvisors = async (req, res) => {
  const advisors = await Advisor.findAll({
    order: [["id", "DESC"]],
    limit: 20,
  });
  res.json(advisors);
};

const getGraduatesById = async (req, res) => {
  const { id } = req.params;

  const post = await Graduate.findAll({
    where: {
      school_name: id,
    },
    order: [["id", "DESC"]],
    limit: 20
  });

  if (post) {
    res.json(post);
  } else {
    res.status(400).json("Couldn't find graduate with that id");
  }
};

const getUserMessageList = async (req, res) => {
  const { isAdvisorChat, toUserId } = req.params
  console.log(toUserId)
  const response = await sequelize.query(`select distinct username, id from edu_advisor.messages, edu_advisor.users where fromUserId = id and isAdvisorChat=${isAdvisorChat === 'true'} and toUserId=${toUserId}`);
  console.log(response)
  res.json(response[0])
}

module.exports = { getAdvisors, getGraduatesById, getUserMessageList };
