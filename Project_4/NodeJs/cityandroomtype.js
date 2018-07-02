/* search on the basis of city and room type*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{City:
	{$in:
	["Jodhpur"]
	}}
	,	
	{room_type:"Business Room"}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}},function(err,res){
console.log(res);
})