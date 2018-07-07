/* search on the basis of rating and room type*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([{$match:{$and:[
{room_type:/Double Room/i}]}},
{$project:{_id:1,property_name:1}}],
function(err,res){
		console.log(res);
			})
