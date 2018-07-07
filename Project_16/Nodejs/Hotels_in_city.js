//2. To display all hotels in city
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$match:{$and:[{city:"Udaipur"}]}},{$project:{area:1,property_name:1,_id:0}}],function(err,res){
console.log(res)})