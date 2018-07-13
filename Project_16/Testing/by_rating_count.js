var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count1 = 0,count2=0;
describe('by_rating_count',function(){

	before(function (done){
		 db.trip.aggregate([{$match:{$and:[{hotel_star_rating:4}]}},{$project:{area:1,property_name:1,_id:0}}], function (err,res){ 
				console.log(res.length); 
				count1=res.length;
				done();
			 });
	});

	it('by_rating_count',function(){
		const result = count1;
		expect(result).to.equal(1085);
	});
});



