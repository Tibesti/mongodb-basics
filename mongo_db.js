var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/tibesti";
MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log('Database created by Tibesti!');
    db.close();
});