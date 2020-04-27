var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/twitter', {useNewUrlParser: true});
var conn=mongoose.connection;
var twitterSchema = new mongoose.Schema({
    "name": String,
    "text": String,
  });

  var twitterModelTech =  mongoose.model('twitter', twitterSchema, 'technology');
  var twitterModelSports =  mongoose.model('twitter', twitterSchema, 'sports');
  var twitterModelFoodFashion =  mongoose.model('twitter', twitterSchema, 'foodFahion');
  var twitterModelTravelTrek =  mongoose.model('twitter', twitterSchema, 'traveltrek');
  var twitterModelPolitics =  mongoose.model('twitter', twitterSchema, 'politics');
  module.exports= {twitterModelTech, twitterModelSports, twitterModelFoodFashion, twitterModelTravelTrek, twitterModelPolitics};
