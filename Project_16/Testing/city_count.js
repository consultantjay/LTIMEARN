//same data is city name and test is on count of hotels in city
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count1 = 0,count2=0;
describe('by city count',function(){

	before(function (done){
		db.trip.find({city:"Udaipur"}, function (err,res){ 
				console.log(res.length); 
				count1=res.length;
				done();
			 });
	});

	it('by city count',function(){
		const result = count1;
		expect(result).to.equal(184);
	});
});



