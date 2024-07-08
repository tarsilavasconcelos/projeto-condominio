const Sequelize = require("sequelize");
const database = require("../database/db");
const Condominos = database.define("condominos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apartamento: {
    type: Sequelize.STRING,
  },
  Bloco: {
    type: Sequelize.STRING,
  },
  telefone: {
    type: Sequelize.STRING,
  },
});

module.exports = Condominos;
