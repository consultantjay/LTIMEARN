var express = require('express');
var app = express();
var cors  = require('cors');
var app = express();
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
app.use(express.static(__dirname));
app.get('/list',function(req,res){
db.hotel.find(function(err,docs){res.json(docs);});

});
app.get('/list/:uniq_id',function(req,res){ var niq_id = req.params.uniq_id; console.log(niq_id);
db.hotel.aggregate([{$match:{"uniq_id":niq_id}},{$project:{_id:0}}], function(err,docs){res.json(docs);})

});

app.listen(3000);
console.log("server running on port 3000");
