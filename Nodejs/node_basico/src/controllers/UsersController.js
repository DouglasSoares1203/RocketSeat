 const AppError = require("../utils/AppError")


class UsersController {
  // index  - GET para listar vários registros
  // show  - GET para exibir um  registro especifico
  // create  - POST para criar um registro
  // update  - PUT para atualizar um registro
  // delete  - DELETE para remover um registro

  create(req, res) {
    // const { page, limit } = req.query;

    // res.send(`Pagina: ${page}. Mostrar o limite: ${limit} `)

    const { name, email, password } = req.body;
    // res.send(`${name} - ${email} - ${password}`);

if (!name) {
  throw new AppError('Nome é obrigatório')
}


    res.status(201).json({ name, email, password }); // Devolve no formato JSON
  }
}

module.exports = UsersController;
