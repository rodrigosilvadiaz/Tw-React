const User = require("../models/User");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Tweet = require("../models/Tweet");
const bcrypt = require("bcrypt");

const authController = {
  tokens: async (req, res) => {
    console.log(req.body);
    // Verificamos credenciales
    // Verificar usuario en DB
    const user = await User.findOne({ username: req.body.username }).populate(
      "tweets"
    );
    if (!user) return res.json({ error: "Wrong credentials..." });

    // Verificar contraseña (la contraseña en db hace match con la recibida)
    const validatePassword = user.password === req.body.password;

    if (!validatePassword) return res.json({ error: "Wrong credentials..." });

    // Genero token
    const token = jwt.sign(
      { sub: user.id, username: user.username },
      process.env.JWT_SECRET
    );

    /* y le agrego los datos del usuario para q aparezca en el Redux junto con el Token */
    res.json({
      token,
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      frontpage: user.frontPage,
      biography: user.biography,
      followers: user.followers,
      followings: user.followings,
      tweets: user.tweets,
    });
  },
  register: async (req, res) => {
    try {
      const { firstname, lastname, email, username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: hashedPassword,
      });

      await newUser.save();
      /*       const token = jwt.sign(
        { sub: newUser.id, username: newUser.username },
        process.env.JWT_SECRET
      ); */

      res.json({
        /* token, */
        id: newUser.id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        avatar: newUser.avatar,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = authController;
