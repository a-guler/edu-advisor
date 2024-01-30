const jwt = require("jsonwebtoken");
const { Post, User } = require("../models");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

const secret = "sdsaklşdlkas92319041209alksdjka90dasdas9";

const createPost = async (req, res) => {
  const { originalname, path } = req.file;
  const fileParts = originalname.split(".");
  const fileExtension = fileParts[fileParts.length - 1];
  const newPath = path + "." + fileExtension;
  fs.renameSync(path, newPath);

  const { title, summary, content } = req.body;
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, secret, {}, async (error, info) => {
      if (error) throw error;
      const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        authorId: info.id,
      });

      res.json(postDoc);
    });
  }
};

const getPosts = async (req, res) => {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
    order: [["createdAt", "DESC"]],
    limit: 20,
  });
  res.json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findOne({
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

  if (post) {
    res.json(post.toJSON());
  } else {
    res.status(400).json("Couldn't find post with that id");
  }
};

module.exports = { createPost, getPosts, getPostById };
