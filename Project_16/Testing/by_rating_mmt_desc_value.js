var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count = "";
describe('by rating mmt rating desc',function(){

	before(function (done){
   		db.trip.aggregate([{$match:{$and:[{hotel_star_rating:4}]}},{$project:{area:1,property_name:1,_id:0}},{$sort:{mmt_tripadvisor_count:-1}}], function (err,res){ 
				//console.log(res.length); 
				count=res[1].property_name;
console.log(count);
				done();
			 });
		});

	it('by rating mmt rating desc',function(){
		const result = count;
		expect(result).to.equal("Le Roi Udaipur");
	});
});






