const express = require("express");
const app = express();

/* Rotas */
app.get("/", function(require, respost) {
    respost.send("<h1>Bem vindo ao NodeJS!</h1>");
});

app.get("/sobre", function(require, respost) {
    respost.send("<h1>Página sobre</h1>");
});

app.get("/blog", function(require, respost) {
    respost.send("<h1>Página Blog</h1>");
});

/* Rota com parâmetro */
app.get("/blog/:developer", function(require, respost) {
    respost.send("<h1>Página Blog</h1>" + `<h3> Aprendendo NodeJS para ser um ${require.params.developer} Full-Stack</h3>`);
});


/* A linha abaixo tem que ser a última */
app.listen(7890, function(){
    console.log("Servidor rodando em http://localhost:7890");
});
