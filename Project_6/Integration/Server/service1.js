var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var app=express();
var mongo=require('mongojs');
var db=mongo('Project',['property']);
app.use(express.static(__dirname));
app.use(cors());


//1. Returns complete list of properties


 app.get('/displayAll',function(err,res){
   db.property.find().limit(43).toArray(function(err,docs){

                      res.json(docs);
                     }
                    );
});


//2. Returns list of properties on basis of Property_no

app.get('/displayAll/:id',function(req,res){
  console.log(req.params.id)
  db.property.aggregate([{$match:{Property_no:parseInt(req.params.id)}}

                       ],function(err,data){
       res.json(data);
       console.log(data)
  } ) ;
});

app.listen(3001);
console.log("server listening on port 3001");
