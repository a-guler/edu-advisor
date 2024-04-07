const express = require("express");
const {
  register,
  login,
  loginAdvisor,
  profile,
  logout,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/loginAdvisor", loginAdvisor);
router.get("/profile", profile);
router.post("/logout", logout);

module.exports = router;
