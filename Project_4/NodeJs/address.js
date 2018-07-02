/* Search on the basis of Address*/
var mongojs = require('mongojs');
var db = mongojs('CLEAR',['cleartrip']);
db.cleartrip.find({address:"High Court Colony, Jodhpur. Rajasthan (India)."}),function(err,res){
console.log(res);
});