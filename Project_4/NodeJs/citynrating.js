/* search on the basis of city and rating*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{city:/Jodhpur/i}
	,	
	{rating:2}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],function(err,res){
		console.log(res);
			})