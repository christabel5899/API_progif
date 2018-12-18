'use strict';
module.exports = function(app) {
  var recipes = require('../controllers/controller.js');

  // todoList Routes
  app.route('/recipes')
    .get(recipes.search);


};