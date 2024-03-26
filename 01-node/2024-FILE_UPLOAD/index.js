const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();

const { imageRouter } = require("./src/routes/imageRouter");

app.use("/uploads", express.static("uploads"));

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");

    //imageRouter
    app.use("/upload", imageRouter);

    app.listen(3000);
  } catch (error) {
    console.log("db not connected");
  }
};

server();
