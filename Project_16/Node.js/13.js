//13. To display all hotel names,city and area in descending order of rating
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{}},{$project:{area:1,property_name:1,_id:0,city:1}},{$sort:{hotel_star_rating:-1}}],function(err,res){
console.log(res)})