var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		db.hotel.find({area:"Paharganj",property_name:"Anmol Hotel Pvt.Ltd",city:"Delhi",property_type:"Hotel"}, function (err,res){ 
				console.log(res.length); 
				count=res.length;
				done();
			 });
		});
	it('by city,area and hotel name count',function(){
		const result = count;
		expect(result).to.equal(1);
	});
});