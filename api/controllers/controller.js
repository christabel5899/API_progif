'use strict';

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.search = function(req, res) {
  MongoClient.connect(url, function(err, client) {
    console.log("Connected succesfully to server");
    var db = client.db('api_abel');
    var Recipes = db.collection('Recipes');
    console.log(req.query.q);
    var query = req.query.q;
    var result = Recipes.find({$text: {$search : query}});
    var resArray = [];
    while(result.hasNext()){
      resArray.push(JSON.stringify(result.next()));
    }
      
    
    console.log(resArray);
    res.json(resArray);
    client.close();
  });
  
};

