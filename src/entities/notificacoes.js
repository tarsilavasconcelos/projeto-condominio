const Sequelize = require("sequelize");
const database = require("../database/db");

const notificacoes = database.define("notificacoes", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
  },
  mensagem: {
    type: Sequelize.STRING,
  },
  condominoId: {
    type: Sequelize.INTEGER,
  },
  porteiroId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = notificacoes;
