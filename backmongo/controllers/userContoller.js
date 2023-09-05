const User = require("../models/User");
const mongoose = require("mongoose");
const Tweet = require("../models/Tweet");

const userController = {
  index: async (req, res) => {
    const users = await User.find().populate("tweets");
    res.json(users);
  },
};

module.exports = userController;
