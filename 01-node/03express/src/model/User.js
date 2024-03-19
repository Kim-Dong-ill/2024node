const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  location: {
    type: String,
  },
  gender: {
    type: String,
    require: true,
  },
});
const User = mongoose.model("user", userSchema);
module.exports = { User };
