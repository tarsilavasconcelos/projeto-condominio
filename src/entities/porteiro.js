const Sequelize = require("sequelize");
const database = require("../database/db");
const porteiros = database.define("porteiros", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_completo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dt_nascimento: {
    type: Sequelize.STRING,
  },
  cpf: {
    type: Sequelize.STRING,
  },
  rg: {
    type: Sequelize.STRING,
  },
  endereco_residencial: {
    type: Sequelize.STRING,
  },
  escala: {
    type: Sequelize.STRING,
  },
  telefone: {
    type: Sequelize.STRING,
  },
});

module.exports = porteiros;
