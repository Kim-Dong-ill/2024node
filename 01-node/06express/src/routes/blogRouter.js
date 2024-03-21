const { Router } = require("express");
const { Blog } = require("../models/Blog");
const { Phone } = require("../models/Phone");
const blogRouter = Router();

blogRouter.post("/", async function (req, res) {
  try {
    const { title, user_id } = req.body;
    const user = await Phone.findById(user_id);
    if (!user) {
      return res.status(400).send({ err: "user없음" });
    }
    const { blog } = new Blog({ ...req.body, user });
    await blog.save();
    res.send({ blog });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

blogRouter.get("/", async function (req, res) {
  try {
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
blogRouter.put("/", async function (req, res) {
  try {
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
blogRouter.patch("/", async function (req, res) {
  try {
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = { blogRouter };
