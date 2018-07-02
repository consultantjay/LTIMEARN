//5. To display area,hotel name and room type according to city and rating
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{$and:[{city:"Udaipur"},{hotel_star_rating:"4 star"}]}},{$project:{area:1,room_types:1,_id:0,property_name:1}}],function(err,res){
console.log(res)})