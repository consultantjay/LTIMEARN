var express=require('express');
var app=express();
var cors=require('cors');
var bodyParser=require('body-parser');
app.use(cors())
app.use(bodyParser.json());

var mongojs=require('mongojs');
var db=mongojs('Hotels',['trip']);
app.use(express.static(__dirname));

app.get('/hotel_list/:id',function(req,res){
       console.log(req.params.id)
      db.trip.aggregate([{$match:{$and:[{uid:parseInt(req.params.id)}]}},{$project:{uid:1,area:1,property_name:1,_id:0,hotel_overview:1}}],function(err,docs){
                                          res.json(docs);
                                             console.log(docs)
						
                                                }
                       );  
});     
    
app.get('/hotel_list',function(req,res){
  
      db.trip.aggregate([{$project:{_id:0,property_name:1,area:1,city:1,mmt_tripadvisor_count:1,hotel_star_rating:1,uid:1}},{$limit:15}],function(err,docs){
                                          res.json(docs);
                                                }
                       );  
});

           

app.listen(8087);
console.log("server running on port 8087")
