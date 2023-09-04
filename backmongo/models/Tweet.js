const { mongoose, Schema } = require("../dbInitialSetup");;
const User = require("./User");

const tweetterSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tweet = mongoose.model("Tweet", tweetterSchema);

module.exports = Tweet;
