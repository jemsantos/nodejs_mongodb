var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor, function (erro, db) {
    if (erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else
        console.log("Conexão estabelecida com sucesso.");

    var colecao = db.collection("topicos");

    // var filtro = { };
    var filtro = { _id: 1 };
    
    colecao.find(filtro).toArray(function (erro, documentos) {
        documentos.forEach(function(doc) {
            console.log("Título: " + doc.titulo);
            console.log("Conteúdo: " + doc.conteudo);
            console.log("Tags: " + doc.tags);
            console.log(" .... ");
        }, this);
    });

    db.close();
});