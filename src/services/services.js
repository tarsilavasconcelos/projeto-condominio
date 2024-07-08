const db = require("../database/db");

async function connect() {
  if (global.connection) return global.connection.connect();

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    password: process.env.DB_PASSWORD,
  });

  global.connection = pool;
  return pool.connect();
}

async function selectUsers() {
  var dbCondominos = require("../entities/condomino");
  var result = await dbCondominos.findAll();

  return result;
}

async function selectUser(id) {
  var dbCondominos = require("../entities/condomino");
  var condomino = await dbCondominos.findByPk(id);

  return condomino;
}

async function deleteUsers(id) {
  var dbCondominos = require("../entities/condomino");
  var condomino = await dbCondominos.findByPk(id);

  condomino.destroy();
}

async function insertUsers(condomino) {
  var dbCondominos = require("../entities/condomino");
  var result = await dbCondominos.create({
    nome: condomino.nome,
    apartamento: condomino.apartamento,
    Bloco: condomino.Bloco,
    telefone: condomino.telefone,
  });

  return result;
}

async function updateUsers(id, condomino) {
  var dbCondominos = require("../entities/condomino");
  const dbCondomino = await dbCondominos.findByPk(id);

  dbCondomino.nome = condomino.nome;
  dbCondomino.apartamento = condomino.apartamento;
  dbCondomino.Bloco = condomino.Bloco;
  dbCondomino.telefone = condomino.telefone;

  return await dbCondomino.save();
}

module.exports = {
  selectUsers: selectUsers,
  connect: connect,
  selectUser: selectUser,
  deleteUsers: deleteUsers,
  insertUsers: insertUsers,
  updateUsers: updateUsers,
};
