var express = require('express');
 var cors = require('cors');
 var app = express();
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 var mongojs = require('mongojs');
 var db = mongojs('Project',['hospital']);
 var cors = require('cors');
 app.use(cors());
 app.use(express.static(__dirname));

 app.get('/hospital',function(req,res){
   db.hospital.find(function(err,docs){
     res.json(docs);
   })
});


app.get('/hospital/:hid',function(req,res){
  db.hospital.find({"Provider_ID":parseInt(req.params.hid)},function(err,docs){
    res.json(docs);
  });
});

app.listen(3000);
console.log("server on");
