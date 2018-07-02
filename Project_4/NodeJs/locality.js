/* seach on the basis of locality*/
var mongojs = require('mongojs')
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.find({$and:[{locality:'Ratanada Petrol Pump'},{city:'Jodhpur'}]},{_id:0,property_name:1,rating:1},function(err,res){console.log(res);});