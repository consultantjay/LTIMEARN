var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByTypeModelPrice',function(){

	before(function (done){
   		db.bike.find({Type:"Standard",Model:"R-Series",Price:14640}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by Type Model Price count',function(){
		const result = count;
		expect(result).to.equal(2);
	});
});