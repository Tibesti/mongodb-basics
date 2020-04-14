const assert = require('assert');
const findDocument = function (db, callback){
    const collection = db.collection('myMovies');
    collection.findOne({}, function(err, docs){
        assert.equal(err,null);
        console.log("Found the first document");
        console.log(docs);
    });
};

const findRating7 = function (db, callback){
    const collection = db.collection('myMovies');
    collection.find({rating:7}).toArray(function(err, docs){
        assert.equal(err,null);
        console.log("Found movies with rating 7");
        console.log(docs);
    });
};

const findMovies = function (db, callback){
    const collection = db.collection('myMovies');
    collection.find({},{ projection: {_id:0, year:0, rating:0}}).toArray(function(err, docs){
        assert.equal(err,null);
        console.log("Displaying movie titles alone");
        console.log(docs);
    });
};

//module.exports = findDocument;
//module.exports = findRating7;
module.exports = findMovies;
