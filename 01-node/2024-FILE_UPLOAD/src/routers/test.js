const { Router } = require("express");
const testRouter = Router();

testRouter.get("/", async function (req, res) {
  try {
    console.log("as");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = { testRouter };
