/* search on the basis of roomtype and rating,city*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{rating:1}
	,	
	{room_type:"Double Room"/i},
	{city:/Jodhpur/}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],function(err,res){
		console.log(res);
			})
