/* search on the basis of city and room type*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([{$match:{$and:[{city:/Jodhpur/i},
{room_type:/Standard/i}]}},
{$project:{_id:1,property_name:1}}],
function(err,res){
		console.log(res);
			})