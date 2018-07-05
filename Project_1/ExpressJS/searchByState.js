var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);
app.use(express.static(__dirname));
//service call for list users

app.get('/state/:state',function(req,res){console.log(req.params.state);
var stateVal = req.params.state;
db.yelp.aggregate([
                  {$match:{state:stateVal}},
                  {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}}],
                  function(err,docs){res.json(docs);})
});
app.listen(3000);
console.log("server Running on port 3000");
