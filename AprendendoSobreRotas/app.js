const express = require("express");
const app = express();

/* Rota */
app.get("/", function(require, res) {
    res.sendFile(__dirname + "/html/index.html");
});
/* __dirname guarda o caminho absoluto do diretório padrão do projeto. */




/* A linha abaixo tem que ser a última */
app.listen(7890, function(){
    console.log("Servidor rodando em http://localhost:7890 || Nodemon Instalado ");
});
