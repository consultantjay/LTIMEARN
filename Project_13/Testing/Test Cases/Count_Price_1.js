var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByPrice',function(){

	before(function (done){
   		db.bike.find({Price:17200}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by Price count',function(){
		const result = count;
		expect(result).to.equal(4);
	});
});