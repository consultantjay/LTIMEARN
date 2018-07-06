/* search on the basis of rating and room type*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([{$match:{$and:[{rating:2},
{room_type:/Standard/i}]}},
{$project:{_id:1,property_name:1}}],
function(err,res){
		console.log(res);
			})