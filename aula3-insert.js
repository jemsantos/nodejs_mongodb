var MongoClient = require('mongodb').MongoClient;

/*
https://www.oracle.com/br/database/technologies/appdev/nodejs.html
https://vrsbrazil.wordpress.com/2018/07/28/serie-node-js-conectando-ao-oracle-db/
https://medium.com/@anderson.lucas.caldeira10/conectando-com-banco-de-dados-oracle-191ef905f028


ótimo.... estudar, URGENTE.....
https://jsao.io/2018/03/creating-a-rest-api-with-node-js-and-oracle-database/
https://oracle.github.io/node-oracledb/
*/

/* "mongodb": "^3.5.9" versao auto install - deu erro. tive que voltar pra versao do vídeo = "mongodb": "^2.2.11" */
var servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor, function (erro, db) {
    if (erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else
        console.log("Conexão estabelecida com sucesso.");

    /* var topico = {
        titulo: "Erro de compilação",
        conteudo: "Não consigo compilar meu projeto",
        tags: ["Java", "Android", "Mobile"]
    }; */

    var usuarios = [
        {login: "joel", senha: "123"},
        {login: "antonio", senha: "456"},
        {login: "maria", senha: "789"}
    ];

    // var colecao = db.collection("topicos");
    var colecao = db.collection("usuarios");

    //colecao.insertOne(topico, function (erro, resultado) {
    colecao.insertMany(usuarios, function (erro, resultado) {
        if (erro)
            console.log("Erro ao inserir documento: " + erro);
        else
            //console.log("Documento inserido com sucesso");
            console.log(resultado.insertedCount + "documentos inseridos com sucesso");
    });

    db.close();
});