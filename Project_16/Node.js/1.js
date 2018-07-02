//2. To display 9 hotels names, area and city-
var mongojs=require('mongojs');
var db = mongojs('pro',['trip'])
 db.trip.aggregate([{$project:{_id:0,property_name:1,area:1,city:1}},{$limit:9}],function(err,res){
console.log(res)})