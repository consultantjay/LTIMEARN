var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
		   db.hotel.find({city:"Delhi",area:"Kalkaji",property_type:"Hotel"}, 
		   function (err,res){ 
				console.log(res.length); 
				count=res.length;
				done();
			 });
		});
	it('by city and area count',function(){
		const result = count;
		expect(result).to.equal(2);
	});
});