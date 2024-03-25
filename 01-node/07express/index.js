const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const { userRouter } = require("./src/routes/userRouter.js");
const dotenv = require("dotenv");
const { phoneRouter } = require("./src/routes/phoneRouter.js");
dotenv.config();

const server = async function () {
  mongoose.connect(process.env.MONGO_URL);
  console.log("db connected");
  mongoose.set("debug", true);

  //userRouter
  app.use("/user", userRouter);

  //phoneRouter
  app.use("/phone", phoneRouter);

  app.listen(3000);
};
server();
