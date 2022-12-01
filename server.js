//requerimento
const express = require("express");
//objeto do express
const server = express();
//PORTA
const PORTA = 4000;

//método GET
server.get("/", (req, res) => {
  res.send(
    '<p style="background-color:pink">Essa é a api do método get do meu projeto em Nodejs</p>'
  );
});

//listen
server.listen(PORTA, () => {
  console.log(`Esta aplicação está escutando a porta ${PORTA}`);
});
