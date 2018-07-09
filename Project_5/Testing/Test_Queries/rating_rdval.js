var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hotel']);

var count = "";
describe('TestMongoDB1',function(){

before(function (done){
db.hotel.aggregate([{$match:{$and:[{"hotel_star_rating":{$gte:2}}]}},
	{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
	{$sort:{site_review_count:-1}}], 
			function (err,res){ 
//console.log(res.length); 
count=res[0].property_name;
console.log(count);
done();
});
});

it('by_rating_rdval',function(){
const result = count;
expect(result).to.equal("OYO Rooms Rohini");
});
});
