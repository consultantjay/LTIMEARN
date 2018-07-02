//6. To display room types and rating of a given hotel
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{property_name:"Luxor Park"}},{$project:{room_types:1,_id:0,hotel_star_rating:1}}],function(err,res){
console.log(res)})