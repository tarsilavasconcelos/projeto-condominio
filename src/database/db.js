const Sequelize = require("sequelize");
const services = require("./../services/services");

const sequelize = new Sequelize(
  "postgres://postgres:euamoluna123@localhost:5432/Projeto_condominio",
  { dialect: "postgres" }
);

services.connect();
module.exports = sequelize;
