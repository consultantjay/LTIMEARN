var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db=mongojs('pro',['trip']);
app.use(express.static(__dirname));

//1 To display 9 hotels names, area and city-
app.get('/hotel_list',function(req,res){
db.trip.aggregate([{$project:{_id:0,property_name:1,area:1,city:1}},{$limit:9}],function(err,docs){
res.json(docs);
});  
});


//2 To search by hotel name 
app.get('/hotelinfo/:hotelname',function(req,res){
db.trip.aggregate([{$match:{property_name:req.params.hotelname}},{$project:{_id:0}}],function(err,docs){
res.json(docs);
});
});

//3 To display all hotels in city
app.get('/all_hotels_inCity/:city3',function(req,res){
db.trip.aggregate([{$match:{$and:[{city:req.params.city3}]}},{$project:{area:1,property_name:1,_id:0}}],function(err,docs){
res.json(docs);
});  
});                   


//4 To display all hotels by star rating
app.get('/star_rating/:rating',function(req,res){
db.trip.aggregate([{$match:{$and:[{hotel_star_rating:parseInt(req.params.rating)}]}},{$project:{area:1,property_name:1,_id:0}}],function(err,docs){
res.json(docs);
});  
});        


//5 To search by hotel name and city
app.get('/city_name/:name/:city',function(req,res){
db.trip.aggregate([{$match:{$and:[{property_name:req.params.name},{city:req.params.city}]}},{$project:{area:1,property_name:1,_id:0,city:1}}],function(err,docs){
res.json(docs);
});  
});        

//6. To search by hotel name and hotel star rating
app.get('/rating_name/:name/:rating',function(req,res){
db.trip.aggregate([{$match:{$and:[{property_name:req.params.name},{hotel_star_rating:parseInt(req.params.rating)}]}},{$project:{hotel_overview:0,_id:0}}],function(err,docs){
res.json(docs);
});  
});        

//7 To search by city name and hotel star rating
app.get('/rating_city/:city/:rating',function(req,res){
db.trip.aggregate([{$match:{$and:[{city:req.params.city},{hotel_star_rating:parseInt(req.params.rating)}]}},{$project:{area:1,property_name:1,_id:0,city:1}}],function(err,docs){
res.json(docs);
});  
}); 

//8 To search by city name ,hotel name and hotel star rating
app.get('/city_rating_name/:city/:rating/:name',function(req,res){
db.trip.aggregate([{$match:{$and:[{city:req.params.city},{hotel_star_rating:parseInt(req.params.rating)},{property_name:req.params.name}]}},{$project:{_id:0,hotel_overview:1,area:1}}],function(err,docs){
res.json(docs);
});  
});       


//9 To display all hotels in city by hotel star rating in descending order of rating
app.get('/city_r/:city',function(req,res){
db.trip.aggregate([{$match:{$and:[{city:req.params.city}]}},{$project:{area:1,property_name:1,_id:0}},{$sort:{hotel_star_rating:-1}}],function(err,docs){
res.json(docs);
});  
});       

//10 To display all hotels by star rating in descending order of rating
app.get('/rating_r/:rating',function(req,res){
db.trip.aggregate([{$match:{$and:[{hotel_star_rating:parseInt(req.params.rating)}]}},{$project:{area:1,property_name:1,_id:0}},{$sort:{hotel_star_rating:-1}}],function(err,docs){
res.json(docs);
});  
});   

//11  To search by all hotel name in descending order of mmt_tripadvisor_count
app.get('/city_mmt/:city',function(req,res){    
db.trip.aggregate([{$match:{$and:[{city:req.params.city}]}},{$project:{area:1,property_name:1,_id:0}},{$sort:{mmt_tripadvisor_count:-1}}],function(err,docs){
res.json(docs);
});  
});   


//12  To display all hotels by star rating in descending order of mmt_tripadvisor_count
app.get('/rating/:rating',function(req,res){    
db.trip.aggregate([{$match:{$and:[{hotel_star_rating:parseInt(req.params.rating)}]}},{$project:{area:1,property_name:1,_id:0}},{$sort:{mmt_tripadvisor_count:-1}}],function(err,docs){
res.json(docs);
});  
});   

//13 To search by hotel name and city in descending order of mmt_tripadvisor_count
app.get('/name_city/:name/:city',function(req,res){
db.trip.aggregate([{$match:{$and:[{property_name:req.params.name},{city:req.params.city}]}},{$project:{area:1,property_name:1,_id:0,city:1}},{$sort:{mmt_tripadvisor_count:-1}}],function(err,docs){
res.json(docs);
                                                }
                       );  
});   


//14 To search by hotel name and hotel star rating in descending order of mmt_tripadvisor_count

app.get('/name_rating/:name/:rating',function(req,res){
db.trip.aggregate([{$match:{$and:[{property_name:req.params.name},{hotel_star_rating:parseInt(req.params.rating)}]}},{$project:{area:1,property_name:1,_id:0,city:1}},{$sort:{mmt_tripadvisor_count:-1}}],function(err,docs){
res.json(docs);
});  
});   


//15 To search by city name and hotel star rating in descending order of mmt_tripadvisor_count
app.get('/city_rating/:city/:rating',function(req,res){
db.trip.aggregate([{$match:{$and:[{city:req.params.city},{hotel_star_rating:parseInt(req.params.rating)}]}},{$project:{area:1,property_name:1,_id:0,city:1}},,{$sort:{mmt_tripadvisor_count:-1}}],function(err,docs){                                          res.json(docs);  }
});  
});   

//16 To search by city name ,hotel name and hotel star rating in descending order of mmt_tripadvisor_count

app.get('/city_rating_name/:city/:rating/:name',function(req,res){
db.trip.aggregate([{$match:{$and:[{city:req.params.city},{hotel_star_rating:parseInt(req.params.rating)},{property_name:req.params.name}]}},{$project:{_id:0,hotel_overview:1}},{$sort:{mmt_tripadvisor_count:-1}}],function(err,docs){
res.json(docs);
});  
});   


    
//add
           

app.listen(8087);
console.log("server running on port 8087")
