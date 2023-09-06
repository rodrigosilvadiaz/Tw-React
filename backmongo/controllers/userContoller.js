const User = require("../models/User");
const mongoose = require("mongoose");
const Tweet = require("../models/Tweet");

const userController = {
  index: async (req, res) => {
    const users = await User.find().populate("tweets");
    res.json(users);
  },

  store: async (req, res) => {
    try {
      const { content } = req.body;
      const user = await User.findOne({ username: req.auth.username });
      console.log(user._id);

      const newTweet = new Tweet({
        content: content,
        author: user._id,
      });
      user.tweets.push(newTweet._id);

      await user.save();

      await newTweet.save();

      /*       await User.findByIdAndUpdate(req.body.id, {
        $push: { tweets: newTweet._id },
      }); */

      res.status(201).json({ message: "Tweet created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = userController;
