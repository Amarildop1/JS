const Sequelize = require("sequelize");

const sequelize = new Sequelize("teste_sequelize", "root", "senhaDoBDaqui", {
    host: "localhost", /* Local que o Server ta rodando */
    dialect: "mysql" /* Informando qual o SGBD */
});
/* Os parâmetros do new Sequelize() são: 
    nome do banco de dados, 
    usuário do BD, 
    senha do BD, 
    um objeto com localhost e dialect */


/* ***** MODEL Postagem ***** */
const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING /* STRING tem limite de caracter */
    },
    conteudo: {
        type: Sequelize.TEXT /* TEXT é sem limite de caracter */
    }
});

//Postagem.sync({force: true}); 
/* force: true -> para Forçar a sincronização 
e garantir a criação da tabela com base no Model */

Postagem.create({
    titulo: "Primeiro Post",
    conteudo: "Conteúdo do primeiro post - Aprendendo NodeJS"
});
/* create --> Povoando os campos da tabela postagens */


/* ***** MODEL Usuario ***** */
/* usuarios é a tabela que o sequelize vai gerar no SGBD */
const Usuario = sequelize.define("usuarios", {
    nome: {     /* <-- Coluna da tabela usuarios */
        type: Sequelize.STRING
    },
    sobrenome: { /* <-- Coluna da tabela usuarios */
        type: Sequelize.STRING
    },
    idade: {    /* <-- Coluna da tabela usuarios */
        type: Sequelize.INTEGER
    },
    email: {    /* <-- Coluna da tabela usuarios */
        type: Sequelize.STRING
    }
});

Usuario.sync({force: true}); 
/* force: true -> para Forçar a sincronização 
e garantir a criação da tabela com base no Model */




sequelize.authenticate().then(function(){
    console.log("\nConectado com sucesso! \n");
}).catch(function(erro){
    console.log("\n Falha ao se conectar com o BD: " + erro);
});
