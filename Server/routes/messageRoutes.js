const express = require("express");
const {
  getMessages,
  createMessage
} = require("../controllers/messageController");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/messages/:id/:userId/:isAdvisor", getMessages);
router.post("/messages/:id/:userId/:isAdvisor", createMessage);

module.exports = router;
