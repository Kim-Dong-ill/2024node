const { upload } = require("../middlewares/imageUpload");
const { User } = require("../models/User");
const { Router } = require("express");
const userRouter = Router();

userRouter.post("/", async function (req, res) {
  try {
    const { username, useremail, password } = req.body;

    const user = new User(req.body);
    await user.save();
    return res.send({ user });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

userRouter.put("/:userId", upload.single("image"), async function (req, res) {
  try {
    console.log(req.file);

    const { userId } = req.params;
    console.log(userId);

    const { filename, originalname } = req.file;
    const image = { filename, originalname };
    console.log(image);

    const user = await User.findByIdAndUpdate(userId, { image }, { new: true });

    return res.send({ user });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//개별 아이디 get
userRouter.get("/:userId", async function (req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    return res.send({ user });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = { userRouter };
