var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByTypeMakeModel',function(){

	before(function (done){
   		db.bike.find({Type:"Standard",Make:"BMW",Model:"R-Series"}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by Type Make Model count',function(){
		const result = count;
		expect(result).to.equal(21);
	});
});