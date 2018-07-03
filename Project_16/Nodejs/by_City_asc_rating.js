//10. To display area and hotel name according to city in ascending order of rating
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{$and:[{city:"Udaipur"}]}},{$project:{area:1,property_name:1,_id:0}},{$sort:{hotel_star_rating:+1}}],function(err,res){
console.log(res)})