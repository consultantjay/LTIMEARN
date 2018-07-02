//16. To display all hotels according to rating in descending order of rating
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{}},{$project:{property_name:1,_id:0}},{$sort:{hotel_star_rating:-1}}],function(err,res){
console.log(res)})