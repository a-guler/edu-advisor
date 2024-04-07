const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Advisor, Graduate } = require("../models");
require("dotenv").config();
const salt = bcrypt.genSaltSync();
const secret = process.env.SECRET;

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc.toJSON());
  } catch (error) {
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({
    where: {
      username: username,
    },
  });

  if (userDoc) {
    const passwordResult = bcrypt.compareSync(password, userDoc.password);
    if (passwordResult) {
      //logged in
      jwt.sign(
        { username, id: userDoc.id, role: "Candidate" },
        secret,
        { expiresIn: "24h" },
        (err, token) => {
          if (err) throw err;
          else {
            res
              .cookie("token", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
              })
              .json({
                id: userDoc.id,
                username,
                role: "Candidate"
              });
          }
        }
      );
    } else {
      res.status(400).json("Wrong credentials");
    }
  } else {
    res.status(400).json("Wrong username.");
  }
};

const loginAdvisor = async (req, res) => {
  const { username, password } = req.body;
  const advisorDoc = await Advisor.findOne({
    where: {
      username: username,
    },
  });
  if (advisorDoc) {
    const passwordResult = bcrypt.compareSync(password, advisorDoc.password);
    if (passwordResult) {
      //logged in
      jwt.sign(
        { username, id: advisorDoc.id, role: "Advisor" },
        secret,
        { expiresIn: "24h" },
        (err, token) => {
          if (err) throw err;
          else {
            res
              .cookie("token", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
              })
              .json({
                id: advisorDoc.id,
                username,
                role: "Advisor"
              });
          }
        }
      );
    } else {
      res.status(400).json("Wrong credentials");
    }
  } else {
    res.status(400).json("Wrong username.");
  }
}

const loginGraduate = async (req, res) => {
  const { username, password } = req.body;
  const graduateDoc = await Graduate.findOne({
    where: {
      username: username,
    },
  });
  if (graduateDoc) {
    const passwordResult = bcrypt.compareSync(password, graduateDoc.password);
    if (passwordResult) {
      //logged in
      jwt.sign(
        { username, id: graduateDoc.id, role: "Graduate" },
        secret,
        { expiresIn: "24h" },
        (err, token) => {
          if (err) throw err;
          else {
            res
              .cookie("token", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
              })
              .json({
                id: graduateDoc.id,
                username,
                role: "Graduate"
              });
          }
        }
      );
    } else {
      res.status(400).json("Wrong credentials");
    }
  } else {
    res.status(400).json("Wrong username.");
  }
}

const profile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, secret, (error, info) => {
      if (error) throw error;
      res.json(info);
    });
  }
};

const logout = (req, res) => {
  res.cookie("token", "").json("ok");
};

module.exports = { register, login, loginAdvisor, loginGraduate, profile, logout };
