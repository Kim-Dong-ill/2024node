const express = require("express");
const app = express();

const mongoose = require("mongoose");
const { User } = require("./model/User.js");

const MON_URL =
  "mongodb+srv://ehddlf289344:KNNxGy7M2DcDoKX4@mongodb.g8f7dmy.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB";
const users = [];

const server = async function () {
  try {
    await mongoose.connect(MON_URL);
    console.log("db connected");
    app.use(express(JSON));

    app.get("/user", async function (req, res) {
      try {
        const user = User.find({});
        return res.send({ user });
      } catch (error) {
        return res.status(500), send({ error: error.message });
      }
    });

    app.post("/user", async function (req, res) {
      const user = new User(req.body); //스키마에 담긴 바디를 new로 저장
      await user.save();
      res.send({ sucess: true });
    });
  } catch (error) {
    return res.status(500), send({ error: error.message });
  }

  app.link(3000);
};

server();
