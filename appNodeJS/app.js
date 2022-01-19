const express = require("express");
const app = express();

/* Rotas  || Usar .send() somente uma vez em cada get() */
app.get("/", function(require, respost) {
    respost.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(require, respost) {
    respost.sendFile(__dirname + "/html/sobre.html");
});


/* A linha abaixo tem que ser a última */
app.listen(7890, function(){
    console.log("Servidor rodando em http://localhost:7890 || Nodemon Instalado");
});
