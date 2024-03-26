const { Router } = require("express");
const userRouter = Router();
const { User } = require("../model/User");

userRouter.post("/", async function (req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    return res.send({ user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

userRouter.get("/", async function (req, res) {
  try {
    const user = await User.find();
    return res.send({ user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

//단일 get
userRouter.get("/:userId", async function (req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    return res.send({ user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

userRouter.delete("/:userId", async function (req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    return res.send({ user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

userRouter.put("/:userId", async function (req, res) {
  try {
    const { userId } = req.params;
    const { username, age, password } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { username, age, password } },
      { new: true }
    );
    return res.send({ user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = { userRouter };
