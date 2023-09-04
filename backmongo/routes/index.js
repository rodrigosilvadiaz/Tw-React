const pageRoutes = require("./pageRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

function routes(app) {
  app.use(pageRoutes);
  app.use(authRoutes);
  app.use("/users", userRoutes);
}

module.exports = routes;
