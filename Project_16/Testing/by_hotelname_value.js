//Test on value of hotel name
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count = "";
describe('by hotel name to test value',function(){

	before(function (done){
   		 db.trip.aggregate([{$match:{property_name:"Luxor Park"}},{$project:{_id:0}}], function (err,res){ 
				//console.log(res.length); 
				count=res[0].property_name;
console.log(count);
				done();
			 });
		});

	it('by hotel name to test value',function(){
		const result = count;
		expect(result).to.equal("Luxor Park");
	});
});




