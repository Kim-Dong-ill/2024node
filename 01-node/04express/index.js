const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const { Color } = require("./src/model/Color.js");
const dotenv = require("dotenv");
dotenv.config();
// const MON_URL =
//   "mongodb+srv://ehddlf289344:KNNxGy7M2DcDoKX4@mongodb.g8f7dmy.mongodb.net/color_tbl?retryWrites=true&w=majority&appName=MongoDB";

const server = async function () {
  mongoose.connect(process.env.MON_URL);
  console.log("db connected");

  app.get("/color", async function (req, res) {
    const color = await Color.find({});
    res.send({ color });
  });

  app.post("/color", async function (req, res) {
    const color = new Color(req.body);
    await color.save();
    res.send({ color: color });
  });

  app.delete("/color/:userId", async function (req, res) {
    let { userId } = req.params;
    const color = await Color.findByIdAndDelete({ _id: userId });
    res.send({ color });
  });

  app.put("/color/:userId", async function (req, res) {
    let { userId } = req.params;
    let { name, index, like } = req.body;
    const color = await Color.findByIdAndUpdate(
      userId,
      { $set: { name, index, like } },
      { new: true }
    );
    res.send({ color });
  });

  app.listen(3000);
};

server();
