var express=require('express');
var cors=require('cors');
var app=express();
app.use(cors());
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db=mongojs('PRO',['bike']);
app.use(express.static(__dirname));
app.get('/', function(req,res){
    db.bike.aggregate([
    			{  $match:{}}
    	],
        function(err,docs){
        res.json(docs);
    });
});

app.get('/:id', function(req,res){
    	var qid=parseInt(req.params.id);
	db.bike.aggregate([
    			{  $match:{"uid":qid}}
    	],
        function(err,docs){
        res.json(docs);
    });
});
app.listen(3000);
console.log("Server running");
