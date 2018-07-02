//8. To display hotel rating and property name and area according to city
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{$and:[{city:"Udaipur"}]}},{$project:{hotel_star_rating:1,property_name:1,_id:0}}],function(err,res){
console.log(res)})