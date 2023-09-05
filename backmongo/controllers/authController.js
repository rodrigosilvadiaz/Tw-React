const User = require("../models/User");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

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
      username: user.ussername,
      email: user.email,
      avatar: user.avatar,
      frontpage: user.frontPage,
      biography: user.biography,
      followers: user.followers,
      followings: user.followings,
      tweets: user.tweets,
    });
  },
};

module.exports = authController;
