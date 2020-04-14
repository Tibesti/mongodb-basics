const assert = require('assert');
const updateDoc = function (db, callback){
  const collection = db.collection('myMovies');
  collection.updateOne(
    {
     movie:"The Banker"
    },
    { $set: {
       movie:"Sing",
       year:2016,
        rating:7.8
      }
    },
    function(err, docs){
      assert.equal(err,null);
      console.log("Updated first document");
      console.log(docs);
    }
  )
};

module.exports = updateDoc ;
