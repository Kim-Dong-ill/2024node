const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const { userRouter } = require("./src/routes/userRouter.js");
const dotenv = require("dotenv");
const { phoneRouter } = require("./src/routes/phoneRouter.js");
const { fileRouter } = require("./src/routes/fileRouter.js");
dotenv.config();

const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types");

const server = async function () {
  mongoose.connect(process.env.MONGO_URL);
  console.log("db connected");
  mongoose.set("debug", true);
  app.use("/uploads", express.static("uploads"));

  //userRouter
  app.use("/user", userRouter);

  //phoneRouter
  app.use("/phone", phoneRouter);

  //fileRouter
  // app.use("/upload", fileRouter);
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
    fileFilter: function (req, file, cb) {},
  });

  app.post("/upload", upload.single("image"), async function (req, res) {
    try {
      console.log(req.file);
      return res.send(req.file);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  });

  app.listen(3000);
};
server();
