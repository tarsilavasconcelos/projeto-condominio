require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const app = express();
const database = require("./src/database/db");
const services = require("./src/services/services");
const porteiroService = require("./src/services/porteiroService");
const porteiro = require("./src/entities/porteiro");
const notificacoesService = require("./src/services/notificacoesService");
const Notificacoes = require("./src/entities/notificacoes");
const { FORCE } = require("sequelize/lib/index-hints");

app.use(express.json());
app.get("/", (req, res) => res.json({ message: "Funcionando!" }));
app.listen(port);
console.log("API funcionando!");

(async () => {
  try {
    const resultado = await database.sync({ force: false });
    console.log(`resultado sync ${resultado}`);
  } catch (error) {
    console.log(error);
  }
})();

app.get("/condomino", async (req, res) => {
  const customers = await services.selectUsers();
  res.json(customers);
});

app.get("/condomino/:id", async (req, res) => {
  const customer = await services.selectUser(req.params.id);
  res.json(customer);
});

app.delete("/condomino/:id", async (req, res) => {
  await services.deleteUsers(req.params.id);
  res.sendStatus(200);
});

app.use(express.urlencoded({ extended: true }));

app.post("/condomino", async (req, res) => {
  await services.insertUsers(req.body);
  res.sendStatus(201);
});

app.patch("/condomino/:id", async (req, res) => {
  await services.updateUsers(req.params.id, req.body);
  res.sendStatus(200);
});

//requisicoes do porteiro:

app.get("/porteiro", async (req, res) => {
  const customers = await porteiroService.select();
  res.json(customers);
});

app.get("/porteiro/:id", async (req, res) => {
  const customer = await porteiroService.selectPorteiro(req.params.id);
  res.json(customer);
});

app.delete("/porteiro/:id", async (req, res) => {
  await porteiroService.deletePorteiro(req.params.id);
  res.sendStatus(200);
});

app.post("/porteiro", async (req, res) => {
  await porteiroService.insertPorteiro(req.body);
  res.sendStatus(201);
});

app.patch("/porteiro/:id", async (req, res) => {
  await porteiroService.updatePorteiro(req.params.id, req.body);
  res.sendStatus(200);
});

//requisicoes das notificacoes:

app.get("/notificacoes", async (req, res) => {
  const customers = await notificacoesService.selectNotificacoes();
  res.json(customers);
});

app.get("/notificacoes/:id", async (req, res) => {
  const customer = await notificacoesService.selectNotificacao(req.params.id);
  res.json(customer);
});

app.post("/notificacoes", async (req, res) => {
  await notificacoesService.insertNotificacao(req.body);
  res.sendStatus(201);
});
