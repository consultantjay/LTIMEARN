var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByMakeModelPrice',function(){

	before(function (done){
   		db.bike.find({Make:"BMW",Model:"R-Series",Price:14640}, function (err,res){  
				count=res.length;
				done();
			 });
		});

	it('by MAKE MODEL PRICE count',function(){
		const result = count;
		expect(result).to.equal(4);
	});
});