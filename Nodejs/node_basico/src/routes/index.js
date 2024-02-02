const { Router } = require("express");

const usersRouter = require("./user.routes");

const routes = Router();
routes.use("/users", usersRouter); // contém todas as rotas de aplicação

module.exports = routes; //para várias rotas
