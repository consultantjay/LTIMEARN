var mongojs = require('mongojs');
var db = mongojs('pizza_res',['res']);

var cors = require('cors');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname));

app.get('/getRestaurantDetails',function(req,res){
	db.res.find(function(err,docs){
		if(err) console.log(err);
		res.json(docs);
	});
});

app.get('/getPizzaDetails/:restaurant_name',function(req,res){
	db.res.find({name:req.params.restaurant_name},function(err,docs){
		if(err) console.log(err);
		res.json(docs);
	});
});

app.listen(3000);
console.log("Server start");