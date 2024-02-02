const { Router, response } = require("express"); // chamo o Router de express
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router(); //inicializando o Router
//Middleware intercepta requisições...
function myMiddleware(req, res, next) {
  console.log("Você passou pelo Middleware!"); // chamar somente o middleware acarreta um erro, pois é necessário chamar o next() como destino.
  console.log(req.body);
  if (!req.body.isAdmin) {
    //se a requisição não for autorizada pelo usuario certamente a mensagem vai aparecer na tela
    return res.json({ message: "user unauthorized" }); // usando isAdmin como falso a mensagem aparece como usuario não autorizado no teste.
  }
  next();
} //Middleware extrair a requisição, resposta, e o destino encaminhar para o destino do fluxo

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;
