//9. To display hotel name according to city, area and rating
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{$and:[{city:"Udaipur"},{hotel_star_rating:"1 star"},{area:"Udaipole"}]}},{$project:{room_types:1,_id:0,property_name:1}}],function(err,res){
console.log(res)})