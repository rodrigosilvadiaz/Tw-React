const { mongoose, Schema } = require("../dbInitialSetup");

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    bio: String,
    avatar: String,
    password: String,

    tweets: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
