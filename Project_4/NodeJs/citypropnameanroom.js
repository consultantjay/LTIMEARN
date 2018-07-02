search on the basis of property name , room type and city*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{property_name:
	{$in:
	["Hotel Jivan Jyoti"]
	}}
	,	
	{room_type:"Business Room"}
	,
	{City:"Jodhpur"}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	])