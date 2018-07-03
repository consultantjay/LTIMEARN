//7. To display hotel rating and hotel name according to area and city
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{$and:[{city:"Udaipur"},{area:"Udaipole"}]}},{$project:{hotel_star_rating:1,property_name:1,_id:0}}],function(err,res){
console.log(res)})