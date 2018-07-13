var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);
app.use(express.static(__dirname));
//service call for list users

app.get('/list',function(req,res){console.log(req.params.categories);
    db.yelp.aggregate([{$match:{}},{$project:{_id:0}}],function(err,docs){res.json(docs);})
});

app.get('/list/:id',function(req,res){ var uid=req.params.id; console.log(uid);
    db.yelp.aggregate([{$match:{"business_id":uid}},{$project:{_id:0}}],function(err,docs){res.json(docs);})
});
app.listen(3001);
console.log("server Running on port 3001");
