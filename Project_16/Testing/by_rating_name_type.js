var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count = "";
describe('by rating and name to test type',function(){

	before(function (done){
   		 db.trip.aggregate([{$match:{$and:[{property_name:"Luxor Park"},{hotel_star_rating:1}]}},{$project:{area:1,property_name:1,_id:0,city:1}}], function (err,res){ 
				//console.log(res.length); 
				count=typeof res[0].property_name;
console.log(count);
				done();
			 });
		});

	it('by rating and name to test type',function(){
		const result = count;
		expect(result).to.equal("string");
	});
});





