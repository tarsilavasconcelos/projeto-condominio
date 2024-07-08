async function select() {
  var dbNotificacoes = require("../entities/notificacoes");
  var result = await dbNotificacoes.findAll();

  return result;
}

async function selectNotificacoes(condominoId) {
  var notificacoesCondominos = require("../entities/notificacoes");
  var notificacaoCondomino = await notificacoesCondominos.findAll({
    where: {
      condominoId: condominoId,
    },
  });

  return notificacaoCondomino;
}

async function selectNotificacao(id) {
  var dbNotificacoes = require("../entities/notificacoes");
  var notificacao = await dbNotificacoes.findByPk(id);

  return notificacao;
}

async function insertNotificacao(notificacao) {
  var dbNotificacoes = require("../entities/notificacoes");
  var result = await dbNotificacoes.create({
    titulo: notificacao.titulo,
    mensagem: notificacao.mensagem,
    condominoId: notificacao.condominoId,
    porteiroId: notificacao.porteiroId,
  });

  return result;
}

module.exports = {
  selectNotificacoes: selectNotificacoes,
  selectNotificacao: selectNotificacao,
  insertNotificacao: insertNotificacao,
};
