/* search on the basis of property name city , room type and rating */
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
	{property_name:"Mohan Niwas"},
	{rating:2},{room_type:"Standard Room"}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],function(err,res){
console.log(res);
})