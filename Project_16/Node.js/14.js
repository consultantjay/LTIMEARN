//14. To display hotel rating in ascending order and property name according to area and city
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{$and:[{city:"Udaipur"},{area:"Udaipole"}]}},{$project:{hotel_star_rating:1,property_name:1,_id:0}},{$sort:{hotel_star_rating:+1}}],function(err,res){
console.log(res)})