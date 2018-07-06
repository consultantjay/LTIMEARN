/*search on the basis of property name , room type and city*/
var mongojs = require('mongojs');
var db = mongojs('CLEAR',['cleartrip']);
db.cleartrip.aggregate([{$match:{$and:[{city:/Jodhpur/i},
{property_name:/mohan niwas/i},
{room_type:/Deluxe Ac Room/}]}},
{$project:{_id:0,property_name:1}}],function(err,res){
		console.log(res);
			})