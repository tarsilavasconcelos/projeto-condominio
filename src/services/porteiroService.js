async function select() {
  var dbPorteiros = require("../entities/porteiro");
  var result = await dbPorteiros.findAll();

  return result;
}

async function selectPorteiro(id) {
  var dbPorteiros = require("../entities/porteiro");
  var porteiro = await dbPorteiros.findByPk(id);

  return porteiro;
}

async function deletePorteiro(id) {
  var dbPorteiros = require("../entities/porteiro");
  var porteiro = await dbPorteiros.findByPk(id);

  porteiro.destroy();
}

async function insertPorteiro(porteiro) {
  var dbPorteiros = require("../entities/porteiro");
  var result = await dbPorteiros.create({
    nome_completo: porteiro.nome_completo,
    dt_nascimento: porteiro.dt_nascimento,
    cpf: porteiro.cpf,
    rg: porteiro.rg,
    endereco_residencial: porteiro.endereco_residencial,
    escala: porteiro.escala,
    telefone: porteiro.telefone,
  });

  return result;
}

async function updatePorteiro(id, porteiro) {
  var dbPorteiros = require("../entities/porteiro");
  const dbPorteiro = await dbPorteiros.findByPk(id);

  dbPorteiro.nome_completo = porteiro.nome_completo;
  dbPorteiro.dt_nascimento = porteiro.dt_nascimento;
  dbPorteiro.cpf = porteiro.cpf;
  dbPorteiro.rg = porteiro.rg;
  dbPorteiro.endereco_residencial = porteiro.endereco_residencial;
  dbPorteiro.escala = porteiro.escala;
  dbPorteiro.telefone = porteiro.telefone;

  return await dbPorteiro.save();
}

module.exports = {
  select: select,
  selectPorteiro: selectPorteiro,
  deletePorteiro: deletePorteiro,
  insertPorteiro: insertPorteiro,
  updatePorteiro: updatePorteiro,
};
