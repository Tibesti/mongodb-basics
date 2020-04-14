var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/tibesti";

const insertDocuments = require("./interns");
const findDocuments = require("./findInterns")
const updateDocuments = require("./updateInterns")

const dbName = "tibesti";
const client = new MongoClient (url,{ useUnifiedTopology: true, useNewUrlParser: true });
client.connect(function(err){
    if (err) throw err;
    const db = client.db(dbName);
    console.log("Database created by Tibesti");
    insertDocuments(db,function(result){
        console.log(result);
        client.close
    });
    findDocuments(db, function(){
        console.log(result);
        client.close;
    })
    updateDocuments(db, function(){
        console.log(result);
        client.close;
    })
});
