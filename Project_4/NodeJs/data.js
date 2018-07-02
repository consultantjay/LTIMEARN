/*total data set*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.find(function(err,res){
console.log(res);
});
