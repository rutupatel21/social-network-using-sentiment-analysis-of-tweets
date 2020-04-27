var express = require('express');
var router = express.Router();
var twitterModel=require('../modules/twitter');
var twitter=twitterModel.twitterModelTech.find().sort({$natural : -1}).limit(10);
const {spawn} = require('child_process');
let {PythonShell} = require("python-shell");
/*Technology*/
var childProcess = require("child_process");
var path = require("path");
const exec = require('child_process').exec;


PythonShell.run('/home/gaurav/Sumit/myapps/graphs/python/graph.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});

router.get('/technologydata', function(req, res, next) {
  twitter.exec(function(err,data){
	  		
		//var cp = childProcess.fork(path.join(__dirname, "xx.js"));
	  if (err) throw err;
	  const python = spawn('python3', ['/home/gaurav/Sumit/myapps/graphs/python/twitter_mongo_technology.py']);
	  /*const pythongr = spawn('python3', ['/home/sumit/twitterfetch/Sumit_Finals/myapps/graphs/python/technology.py']);*/
	  twitterModel.twitterModelTech.find().distinct('_id', function(err, Response) {
		  if (err) return next(err);
		  res.render('frame_technology', { title: 'Streaming Technology Tweet',records: data, record1:Response.length});
		  //Response = res.json(Response.length);
		  console.log(Response.length);
		  
  });
  var cp = childProcess.fork(path.join("/home/gaurav/Sumit/myapps/graphs/python/Chat", "server.js"));
		cp.on("exit", function (code, signal) {
		console.log("Exited", {code: code, signal: signal});
		cp.on("error", console.error.bind(console));
		});        
    });
  });
  
/*Sports*//*
PythonShell.run('/home/sumit/twitterfetch/Sumit_Finals/myapps/graphs/technology/sports.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});
*/
router.get('/sportsdata', function(req, res, next) {
  twitter.exec(function(err,data){
	  if (err) throw err;
	  const python = spawn('python3', ['/home/gaurav/Sumit/myapps/graphs/python/twitter_mongo_sports.py']);
	  /*const pythongr = spawn('python3', ['/home/sumit/twitterfetch/Sumit_Finals/myapps/graphs/python/graph.py']);*/
	  twitterModel.twitterModelSports.find().distinct('_id', function(err, Response) {
		  if (err) return next(err);
		  res.render('frame_technology', { title: 'Streaming Sports Tweet',records: data, record1:Response.length});
		  //Response = res.json(Response.length);
		  console.log(Response.length);
		  
  });
  var cp = childProcess.fork(path.join("/home/gaurav/Sumit/myapps/graphs/python/Chat", "server.js"));
		cp.on("exit", function (code, signal) {
		console.log("Exited", {code: code, signal: signal});
		cp.on("error", console.error.bind(console));
		});           
    });
  });

/*Food and Fashion*/
router.get('/foodFashiondata', function(req, res, next) {
  twitter.exec(function(err,data){
	  if (err) throw err;
	  const python = spawn('python3', ['/home/gaurav/Sumit/myapps/graphs/python/twitter_mongo_food_fashion.py']);
	  /*const pythongr = spawn('python3', ['/home/sumit/twitterfetch/Sumit_Finals/myapps/graphs/python/graph.py']);*/
	  twitterModel.twitterModelFoodFashion.find().distinct('_id', function(err, Response) {
		  if (err) return next(err);
		  res.render('frame_technology', { title: 'Streaming Food and Fashion Tweets',records: data, record1:Response.length});
		  //Response = res.json(Response.length);
		  console.log(Response.length);
		  
  });
  var cp = childProcess.fork(path.join("/home/gaurav/Sumit/myapps/graphs/python/Chat", "server.js"));
		cp.on("exit", function (code, signal) {
		console.log("Exited", {code: code, signal: signal});
		cp.on("error", console.error.bind(console));
		});           
    });
  });

/*Travel and Trek*/
router.get('/travelTrekdata', function(req, res, next) {
  twitter.exec(function(err,data){
	  if (err) throw err;
	  const python = spawn('python3', ['/home/gaurav/Sumit/myapps/graphs/python/twitter_mongo_travel_trek.py']);
	  /*const pythongr = spawn('python3', ['/home/sumit/twitterfetch/Sumit_Finals/myapps/graphs/python/graph.py']);*/
	  twitterModel.twitterModelTravelTrek.find().distinct('_id', function(err, Response) {
		  if (err) return next(err);
		  res.render('frame_technology', { title: 'Streaming Travel and Trekking Tweets',records: data, record1:Response.length});
		  //Response = res.json(Response.length);
		  console.log(Response.length);
		  
  });
  var cp = childProcess.fork(path.join("/home/gaurav/Sumit/myapps/graphs/python/Chat", "server.js"));
		cp.on("exit", function (code, signal) {
		console.log("Exited", {code: code, signal: signal});
		cp.on("error", console.error.bind(console));
		});           
    });
  });

/*Politics*/
router.get('/politicsdata', function(req, res, next) {
  twitter.exec(function(err,data){
	  if (err) throw err;
	  const python = spawn('python3', ['/home/gaurav/Sumit/myapps/graphs/python/twitter_mongo_politics.py']);
	  /*const pythongr = spawn('python3', ['/home/sumit/twitterfetch/Sumit_Finals/myapps/graphs/python/graph.py']);*/
	  twitterModel.twitterModelPolitics.find().distinct('_id', function(err, Response) {
		  if (err) return next(err);
		  res.render('frame_technology', { title: 'Streaming Political Tweets',records: data, record1:Response.length});
		  //Response = res.json(Response.length);
		  console.log(Response.length);
		  
  });
  var cp = childProcess.fork(path.join("/home/gaurav/Sumit/myapps/graphs/python/Chat", "server.js"));
		cp.on("exit", function (code, signal) {
		console.log("Exited", {code: code, signal: signal});
		cp.on("error", console.error.bind(console));
		});           
    });
  });

module.exports = router;
