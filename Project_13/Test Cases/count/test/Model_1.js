var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByModel',function(){

	before(function (done){
   		db.bike.find({Model:"R-Series"}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by MODEL count',function(){
		const result = count;
		expect(result).to.equal(200);
	});
});