/* search on the basis of property name city and room type*/
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
db.cleartrip.aggregate([
{$match:
{
	$and:
	[{city:
	{$in:
	["Jodhpur"]
	}}
	,	
	{property_name:"Mohan Niwas"}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],function(err,res){
console.log(res);
})
