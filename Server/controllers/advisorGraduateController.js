const jwt = require("jsonwebtoken");
const { Graduate, Advisor } = require("../models");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

const secret = process.env.SECRET;


const getAdvisors = async (req, res) => {
  const advisors = await Advisor.findAll({
    order: [["id", "ASC"]],
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
    order: [["id", "ASC"]],
    limit: 20
  });

  if (post) {
    res.json(post);
  } else {
    res.status(400).json("Couldn't find graduate with that id");
  }
};

module.exports = { getAdvisors, getGraduatesById };
