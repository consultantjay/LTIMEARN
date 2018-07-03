//2. To search by hotel name 
 var mongojs=require('mongojs');
 var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{property_name:"Luxor Park"}},{$project:{_id:0}}],function(err,res){
 console.log(res)})