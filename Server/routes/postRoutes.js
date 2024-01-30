const express = require("express");
const {
  createPost,
  getPosts,
  getPostById,
} = require("../controllers/postController");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/post", uploadMiddleware.single("file"), createPost);
router.get("/post", getPosts);
router.get("/post/:id", getPostById);

module.exports = router;
