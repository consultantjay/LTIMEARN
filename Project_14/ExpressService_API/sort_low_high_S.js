
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);
app.use(express.static(__dirname));

app.get('/:state/high-to-low',function(req,res){
  db.hospital.aggregate([{$match:{
                                  "State":req.params.state,"Hospital overall rating":{$ne:"Not Available"}}},
                         {$sort:{
                                  "Hospital overall rating":1
                                }}],function(err,docs){
                                                        res.json(docs);
                                                      });
                        });
app.listen(3000);
console.log("server on");
