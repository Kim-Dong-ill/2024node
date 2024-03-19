const mongoose = require("mongoose");
const colorSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  index: {
    type: Number,
    require: true,
  },
  like: {
    type: String,
  },
});
const Color = mongoose.model("color", colorSchema);
module.exports = { Color };
