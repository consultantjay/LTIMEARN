/* seach on the basis of rating*/
var mongojs = require('mongojs')
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.find({$and:[{rating:2}]},{_id:0,property_name:1,rating:1},function(err,res){console.log(res);});