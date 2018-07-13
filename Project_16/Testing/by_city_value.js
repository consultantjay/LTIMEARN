//by city name and test on value of hotel name
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count = "";
describe('by city value',function(){

	before(function (done){
   		db.trip.aggregate([{$match:{$and:[{city:"Hyderabad"}]}},{$project:{area:1,property_name:1,_id:0}}], function (err,res){ 
				//console.log(res.length); 
				count=res[1].property_name;
console.log(count);
				done();
			 });
		});

	it('by city value',function(){
		const result = count;
		expect(result).to.equal("alcove service apartments jubilee hills");
	});
});




