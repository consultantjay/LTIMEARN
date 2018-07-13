//Test on count of hotels with same name
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count1 = 0,count2=0;
describe('by_hotle_name_count',function(){

	before(function (done){
		db.trip.aggregate([{$match:{property_name:"Luxor Park"}},{$project:{_id:0}}], function (err,res){ 
				console.log(res.length); 
				count1=res.length;
				done();
			 });
	});

	it('by_hotle_name_count',function(){
		const result = count1;
		expect(result).to.equal(2);
	});
});



