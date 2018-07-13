var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(cors())
app.use(express.static(__dirname));
//service call for list users

app.get('/singleRoom',function(req,res){
	db.cleartrip.find({room_type:"Single Room"},function(err,docs){
		res.json(docs);
	});
});

app.get('/:id',function(req,res)
{
db.cleartrip.aggregate([{$match:{uniq_id:req.params.id}}],function(err,docs){
res.json(docs);
}
);
}
);

app.get('/',function(req,res){
	db.cleartrip.find(function(err,docs){
		res.json(docs);
	});
});

app.listen(3000);
console.log("server running on port 3000");
