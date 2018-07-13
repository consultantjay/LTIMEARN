var express = require('express');
var cors = require('cors');
var app=express();
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('final',['doctor']);
app.use(express.static(__dirname));


app.get('/list',function(req,res){
db.doctor.find(function(err,docs){res.json(docs);})
});

app.get('/list/:sno',function(req,res){
db.doctor.find({"sno":parseInt(req.params.sno)},function(err,docs){res.json(docs);})
});


app.listen(3000);
console.log("server running on port 3000");
