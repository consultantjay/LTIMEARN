var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByTypeAndPrice',function(){

	before(function (done){
   		db.bike.find({Type:"Standard",Price:14640}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by Type Price count',function(){
		const result = count;
		expect(result).to.equal(2);
	});
});