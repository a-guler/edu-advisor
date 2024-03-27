const express = require("express");
const {
  getMessages,
  
} = require("../controllers/messageController");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/messages/:id/:userId/:isAdvisor", getMessages);
module.exports = router;
