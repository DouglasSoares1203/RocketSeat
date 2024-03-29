const { hash } = require("bcryptjs"); // chamando a criptografia e o hash é o que vai chamar a função
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const { response } = require("express");

class UsersController {
  // index  - GET para listar vários registros
  // show  - GET para exibir um  registro especifico
  // create  - POST para criar um registro
  // update  - PUT para atualizar um registro
  // delete  - DELETE para remover um registro

  async create(req, res) {
    const { name, email, password } = req.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este e-mail já esta em uso."); //Significa que este email vai retornar essa mensagem se houver um email existe, caso contrario ele será criado
    }

    const hashedPassword = await hash(password, 8); // Uma promisse trabalha por debaixo dos panos criando uma criptografia apenas usando o await ele aplica essa ação

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return res.status(201).json();
    // const { page, limit } = req.query;

    // res.send(`Pagina: ${page}. Mostrar o limite: ${limit} `)

    //     const { name, email, password } = req.body;
    //     // res.send(`${name} - ${email} - ${password}`);

    // if (!name) {
    //   throw new AppError('Nome é obrigatório')
    // }

    //     res.status(201).json({ name, email, password }); // Devolve no formato JSON
    //   }
  }
}

module.exports = UsersController;
