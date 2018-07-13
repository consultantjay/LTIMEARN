var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count1 = 0,count2=0;
describe('by_hotle_name,rating by count',function(){

	before(function (done){
		   db.trip.aggregate([{$match:{$and:[{property_name:"Luxor Park"},{hotel_star_rating:1}]}},{$project:{area:1,property_name:1,_id:0,city:1}}], function (err,res){ 
				console.log(res.length); 
				count1=res.length;
				done();
			 });
	});

	it('by_hotle_name,rating by count',function(){
		const result = count1;
		expect(result).to.equal(2);
	});
});



