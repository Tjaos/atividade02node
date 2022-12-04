//requerimento
const express = require("express");
const mysql = require("mysql2");
const connect = require("./conexao.js");
//objeto do express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DELETE
app.delete(
  "/clientes/:id",

  (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    return connect.execSQLQuery(
      "delete from cliente where id=" + req.params.id,
      res
    );
  }
);

//POST
app.post(
  "/clientes/",

  (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    return connect.execSQLQuery(
      "insert into cliente (nome) value('" + req.body.nome + "')",
      res
    );
  }
);

//Método PUT
app.put(
  "/clientes/:id",

  (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    return connect.execSQLQuery(
      "update cliente set nome='" +
        req.body.nome +
        "' where id=" +
        req.params.id,
      res
    );
  }
);

//PORTA
const PORTA = 5000;

//método GET
app.get("/", (req, res) => {
  res.send(
    '<p style="background-color:pink">Essa é a api do método get do meu projeto em Nodejs</p>'
  );
});
//usando p GET para selecionar uma tabela
app.get(
  "/clientes",

  (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    return connect.execSQLQuery("select * from cliente", res);
  }
);

//usando a cláusula Where para filtrar por id
app.get(
  "/clientes/:id",

  (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    return connect.execSQLQuery(
      "select * from cliente where id=" + req.params.id,
      res
    );
  }
);

//listen
app.listen(PORTA, () => {
  console.log(`Esta aplicação está escutando a porta ${PORTA}`);
});
