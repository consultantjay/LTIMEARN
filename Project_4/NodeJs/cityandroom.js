/* search on the basis of city and room count*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.find({$and:[{city:'Jodhpur'},{room_count:{$gte:2}}]},{property_name:1,rating:1,room_facilities:1,_id:0},function(err,res){
console.log(res);
}
)