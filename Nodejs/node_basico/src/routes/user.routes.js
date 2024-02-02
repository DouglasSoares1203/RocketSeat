const { Router } = require("express"); // chamo o Router de express
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router(); //inicializando o Router

function myMiddleware(req, res, next) {
  console.log("Você passou pelo Middleware!");// chamar somente o middleware acarreta um erro, pois é necessário chamar o next() como destino.

  next()
} //Middleware extrair a requisição, resposta, e o destino encaminhar para o destino do fluxo

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;