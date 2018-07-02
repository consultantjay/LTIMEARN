/* Search on the basis of City*/
var mongojs = require('mongojs');
var db = mongojs('CLEAR',['cleartrip']);
db.cleartrip.find({city:'Jodhpur'},{property_name:1,_id:0},function(err,res){
console.log(res);
};