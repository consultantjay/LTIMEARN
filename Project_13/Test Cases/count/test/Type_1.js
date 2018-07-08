var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByType',function(){

	before(function (done){
   		db.bike.find({Type:"Standard"}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by Type count',function(){
		const result = count;
		expect(result).to.equal(859);
	});
});