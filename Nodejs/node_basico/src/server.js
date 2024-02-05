require("express-async-errors");
// const database = require("./database/sqlite");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const express = require("express");
// const {usersRoutes} = require("./routes/user.routes");

const routes = require("./routes"); //código enxuto e limpo e por padrão carrega o arquivo invex.js

migrationsRun();

const app = express(); // chamar express
app.use(express.json()); // chama o json para testar no app de testes(ex:Insomnia)
// app.get("/message/:id/:user", (req, res) => {
//   const { id, user } = req.params; // Desestruturação dos parametros id e user, limpeza de código

//   res.send(
//     `Id da mensagem: ${id}.
//      Para o usuário: ${user}.`
//   );
// }); //eu busco a rota pelo get, pego a raiz do caminho para acessar através de uma requisição e depois recebo a resposta com o caminho enviando a mensagem(hello world)

app.use(routes);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    }); // status do erro baseado no codigo do HTTP, ERRO do cliente
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  }); // retorna o erro 500 caso a requisição venha a falhar, ERRO do servidor
});

const PORT = 3333; // porta que está chamando
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
