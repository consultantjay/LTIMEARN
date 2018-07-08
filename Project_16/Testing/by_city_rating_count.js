var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count1 = 0,count2=0;
describe('by city,rating to test number of hotels',function(){

	before(function (done){
		db.trip.aggregate([{$match:{$and:[{city:"Udaipur"},{hotel_star_rating:4}]}},{$project:{area:1,property_name:1,_id:0,city:1}}], function (err,res){ 
				console.log(res.length); 
				count1=res.length;
				done();
			 });
	});

	it('by city,rating to test number of hotels',function(){
		const result = count1;
		expect(result).to.equal(9);
	});
});



