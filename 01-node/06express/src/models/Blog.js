const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "phone",
    },
  },
  {
    timestamps: true,
  }
);
const Blog = mongoose.model("blog", BlogSchema);
module.exports = { Blog };
