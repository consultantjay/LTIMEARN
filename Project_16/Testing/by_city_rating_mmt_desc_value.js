var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count = "";
describe('by city rating mmt desc',function(){

	before(function (done){
   		db.trip.aggregate([{$match:{$and:[{city:"Udaipur"},{hotel_star_rating:1}]}},{$project:{area:1,property_name:1,_id:0,city:1}},{$sort:{mmt_tripadvisor_count:-1}}], function (err,res){ 
				//console.log(res.length); 
				count=res[0].property_name;
console.log(count);
				done();
			 });
		});

	it('by city rating mmt desc',function(){
		const result = count;
		expect(result).to.equal("Zion Home Stay");
	});
});












