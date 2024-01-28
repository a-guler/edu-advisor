require("dotenv").config();

const express = require("express");
const cors = require("cors");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const salt = bcrypt.genSaltSync();
const secret = "sdsaklşdlkas92319041209alksdjka90dasdas9";
const app = express();
const { sequelize, User, Post } = require("./models");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//gelen bodynin parse edilebilmesi için
app.use(express.json());
app.use(cookieParser());

const connectDb = async () => {
  console.log("checking db connection");

  try {
    await sequelize.authenticate();
    console.log("connected to db");
  } catch (error) {
    console.log("failed to db");
  }
};

(async () => {
  await connectDb();
  console.log("attempting to run server on port 4000");
  app.listen(4000, () => {
    console.log("App listening on port 4000");
  });
})();

app.post("/register", async (req, res) => {
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
});

app.post("/login", async (req, res) => {
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
      jwt.sign({ username, id: userDoc.id }, secret, {}, (err, token) => {
        if (err) throw err;
        else {
          res.cookie("token", token).json({
            id: userDoc.id,
            username,
          });
        }
      });
    } else {
      res.status(400).json("Wrong credentials");
    }
  } else {
    res.status(400).json("Wrong username.");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, secret, {}, (error, info) => {
      if (error) throw error;
      res.json(info);
    });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
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
});

app.get("/post", async (req, res) => {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
  });
  res.json(posts);
});
