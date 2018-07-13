
//1.Search all
var express = require('express')
var app = express();
var mongojs=require('mongojs');
var db = mongojs('Proj',['deb']);
var cors=require('cors')
app.use(cors())
app.use(express.static(__dirname));

app.get('/',function(err,res){
  db.deb.find().limit(500).toArray(function(err,docs){
                res.send(docs);
              }
            );
});
app.get('/:id',function(req,res){
  db.deb.aggregate([{$match:{uid:parseInt(req.params.id)}}
  ],function(err,data){
                res.send(data);
              }
            );
});

app.listen(3000);
console.log("server running on port 3000");
