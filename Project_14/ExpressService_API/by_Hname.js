var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);
app.use(express.static(__dirname));

app.get('/:hname',function(req,res){
  db.hospital.find({"Hospital_Name":req.params.hname},function(err,docs){
    res.json(docs);
  })
});

app.listen(3000);
console.log("server on");
