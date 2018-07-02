/* search on the basis of property name and city*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{city:/Jodhpur/i}
	,	
	{property_name:/Mohan Niwas/i}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],function(err,res){
		console.log(res);
			})