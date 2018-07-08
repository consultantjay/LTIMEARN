var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByTypeAndModel',function(){

	before(function (done){
   		db.bike.find({Type:"Standard",Model:"R-Series"}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by Type Model count',function(){
		const result = count;
		expect(result).to.equal(21);
	});
});