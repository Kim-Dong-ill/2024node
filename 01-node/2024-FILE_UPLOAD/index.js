const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
const { testRouter } = require("./src/routers/test");
dotenv.config();
const { upload } = require("./src/middlewares/imageUpload.js");

const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types");

app.use("/uploads", express.static("uploads"));

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");

    app.post("/upload", upload.single("image"), async function (req, res) {
      try {
        console.log(req.file);
        return res.send(req.file);
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    });

    //Router
    // app.use("/test", testRouter);

    app.listen(3000);
  } catch (error) {
    console.log("db not connected");
  }
};

server();
