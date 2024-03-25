const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types");

const MON_URL =
  "mongodb+srv://ehddlf289344:KNNxGy7M2DcDoKX4@mongodb.g8f7dmy.mongodb.net/fileup?retryWrites=true&w=majority&appName=MongoDB";

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, uuid() + "." + mime.extension(file.mimetype));
  },
});

const upload = multer({
  storage,
  //   fileFilter: function (req, file, cb) {},
});

const server = async function () {
  try {
    await mongoose.connect(MON_URL);
    console.log("db connected");

    app.post("/upload", upload.single("image"), async function (req, res) {
      try {
        console.log(req.file);
        res.send(req.file);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
server();
