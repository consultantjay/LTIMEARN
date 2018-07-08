var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count = "";
describe('by city mmtrating desc',function(){

	before(function (done){
   		db.trip.aggregate([{$match:{$and:[{city:"Udaipur"}]}},{$project:{area:1,property_name:1,_id:0}},{$sort:{mmt_tripadvisor_count:-1}}], function (err,res){ 
				//console.log(res.length); 
				count=res[1].property_name;
console.log(count);
				done();
			 });
		});

	it('by city mmtrating desc',function(){
		const result = count;
		expect(result).to.equal("Araliayas Resorts");
	});
});






