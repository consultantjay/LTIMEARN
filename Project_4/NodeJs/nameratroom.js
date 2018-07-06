/* search on the basis of property name and rating,city*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{rating:1}
	,	
	{property_name:/Mohan Niwas/i},
	{room_type:/Deluxe/}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],function(err,res){
		console.log(res);
			})