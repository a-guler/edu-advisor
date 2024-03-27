const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./models");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const quizRoutes = require("./routes/quizRoutes");
const advisorGraduateRoutes = require("./routes/advisorGraduateRoutes");

const app = express();

// Checking database connection
const connectDb = async () => {
  console.log("Checking db connection");

  try {
    await sequelize.authenticate();
    console.log("Connected to db");
  } catch (error) {
    console.log("Failed to connect to db");
  }
};

(async () => {
  await connectDb();
  console.log("Attempting to run server on port 4000");
  app.listen(4000, () => {
    console.log("App listening on port 4000");
  });
})();

// Middleware setup
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

// Routes
app.use(authRoutes);
app.use(postRoutes);
app.use(quizRoutes);
app.use(advisorGraduateRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

module.exports = app;
