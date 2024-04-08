const express = require("express");
const {
  getAdvisors,
  getGraduatesById,
  getUserMessageList,
} = require("../controllers/advisorGraduateController");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/advisor", getAdvisors);
router.get("/graduate/:id", getGraduatesById);
router.get("/getUserMessageList/:toUserId/:isAdvisorChat", getUserMessageList);

module.exports = router;
