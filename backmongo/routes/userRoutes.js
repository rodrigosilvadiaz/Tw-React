const express = require("express");
const userController = require("../controllers/userContoller");
const userRouter = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");

userRouter.get(
  "/",
  /* checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), */
  userController.index);

  userRouter.post("/",checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), userController.store);
;

module.exports = userRouter;
