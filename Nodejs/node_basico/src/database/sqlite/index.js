const sqlite3 = require("sqlite3"); //importar e de fato é o drive de armazenamento que estabelece a comunicação
const sqlite = require("sqlite"); //importar e tbm tem a função de conectar ao banco
const path = require("path"); // resolve a questão do endereço de acordo com ambiente

async function sqliteConnection() {
  // sincronizar e salvar o banco através do arquivo filename
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"), // endereçando no local parametrizado e nomeando o arquivo
    driver: sqlite3.Database,
  });

  return database;
}

module.exports = sqliteConnection;

//DDL - DATA DEFINITION LANGUAGE - CREATE/ALTER/DROP
//RENAME TO name - serve para alterar o nome da tabela
// ADD (coluna) VARCHAR - server para adicionar uma coluna
//RENAME COLUMN status TO active - serve para alterar o nome da coluna
// DROP COLUMN - serve para deletar a coluna.

//DML - DATA MANIPULATION LANGUAGE - CREATE(INSERT)/READ(SELECT)/UPDATE(UPDATE)/DELETE(DELETE)
//INSERT INTO users VALUES(dados do usuarios) - serve para inserir dados de usuarios
//SELECT * FROM users - Serve para selecionar e consultar as tabelas do Banco
//UPDATE:
// UPDATE users SET
// avatar = 'douglas.png'
// WHERE id = 1 - Atualizar uma coluna usando simplesmente o Id, pois se não usar o comando where a tendencia é atualizar todos os dados da coluna avatar
//DELETE:
//DELETE FROM users
//WHERE id =1 - Deleta dados usando o comando WHERE setando aonde deve ser deletado, pois aconteceria a mesma coisa com UPDATE, arriscando a exclusão permanente dos dados.
