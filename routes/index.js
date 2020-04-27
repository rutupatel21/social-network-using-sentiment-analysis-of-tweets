var express = require('express');
var router = express.Router();
var twitterModel=require('../modules/twitter');
var twittertech=twitterModel.twitterModelTech.find().sort({$natural : -1}).limit(5);
var twittersports=twitterModel.twitterModelSports.find().sort({$natural : -1}).limit(5);
var twitter=twitterModel.twitterModelSports.find().sort({$natural : -1}).limit(5);
//let {PythonShell} = require('python-shell')
var python_process;
var path = require("path");
const exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  twitter.exec(function(err,data){
    if (err) throw err;
    res.render('index');
    const myShellScript = exec('sh /home/gaurav/Sumit/myapps/allscript.sh');
		myShellScript.stdout.on('data', (data)=>{
			console.log(data); 
			// do whatever you want here with data
			});
		myShellScript.stderr.on('data', (data)=>{
			console.error(data);
		 });
  });
  });

router.get('/technology', function(req, res, next) {
  twittertech.exec(function(err,data){
    if (err) throw err;
    res.render('technology');
  });
  });

router.get('/sports', function(req, res, next) {
  twittersports.exec(function(err,data){
    if (err) throw err;
    res.render('sports');
  });
  });
  

router.get('/travel', function(req, res, next) {
  twitter.exec(function(err,data){
    if (err) throw err;
    res.render('travel');
  });
  });
  
router.get('/politics', function(req, res, next) {
  twitter.exec(function(err,data){
    if (err) throw err;
    res.render('politics');
  });
  });
  router.get('/foodFashion', function(req, res, next) {
  twitter.exec(function(err,data){
    if (err) throw err;
    res.render('foodFashion');
  });
  });
  
module.exports = router;
