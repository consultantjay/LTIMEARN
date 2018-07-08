var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		db.hotel.find({city:"Delhi",property_type:"Hotel"}, function (err,res){ 
				console.log(res.length); 
				count=res.length;
				done();
			 });
		});
	it('by city count',function(){
		const result = count;
		expect(result).to.equal(105);
	});
});