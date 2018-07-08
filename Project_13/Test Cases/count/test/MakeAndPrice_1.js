var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByMakeAndPrice',function(){

	before(function (done){
   		db.bike.find({Make:"BMW",Price:14640}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by MAKEandPRICE count',function(){
		const result = count;
		expect(result).to.equal(4);
	});
});