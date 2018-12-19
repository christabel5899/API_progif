'use strict';

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.search = function(req, res) {

  MongoClient.connect(url, async function(err, client) {

    async function getResults(Recipes, query) {
      var results = await Recipes.find({$text: {$search : query}}); 
      return await results.toArray();
    }
    console.log("Connected succesfully to server");
    var db = client.db('api_abel');
    var Recipes = db.collection('Recipes');
    var query = req.query.q;
    var resArray = await getResults(Recipes, query);
    
    
    var jsonString = JSON.stringify(resArray);
    var jsonObj = JSON.parse(jsonString);
    res.send("<pre>" + JSON.stringify(jsonObj,null,2)+"</pre>");
    client.close();
  });
  
};

