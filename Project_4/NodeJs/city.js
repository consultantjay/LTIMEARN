/* Search on the basis of City*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.find({city:'Jodhpur'},{property_name:1,_id:0},function(err,res){
console.log(res);
});