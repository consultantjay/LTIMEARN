//1.Search on the basis of city.
//Try with 'manali'


var express = require('express');
var app=express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(cors())
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
}); 


app.get('/list/:id',function(req,res){
		db.hotel.aggregate([{$match:{$and:[{"property_id":parseInt(req.params.id)}]}},
	{$project:{_id:0}}],
	function(err,docs){res.json(docs);
})
});
app.listen(3000);
console.log("Running on port 3000");

