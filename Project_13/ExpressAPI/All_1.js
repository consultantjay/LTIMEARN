var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db=mongojs('PRO',['bike']);
app.use(express.static(__dirname));
app.get('/', function(req,res){
    db.bike.aggregate([
    			{  $match:{}},
    			{$project:{_id:1,Make:1,Price:1,Model:1,Feedback_Perc:1}}
    	],
        function(err,docs){
        res.json(docs);
    });
});
app.listen(3000);
console.log("Server running");
