//Express Queries
var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 var mongojs = require('mongojs');
 var db = mongojs('project',['hotel']);
 app.use(express.static(__dirname));
 var cors = require('cors');
 app.use(cors())

 //1. list
 app.get('/list',function(req,res){
   db.hotel.find(function(err,docs){
    res.json(docs);})
});
app.get('/list/:id',function(req,res){
  console.log(req.params.id);
  db.hotel.find({"uniq_id":req.params.id},function(err,docs){
    res.json(docs);
  });
});
app.listen(3000);
console.log("Sever Running");
