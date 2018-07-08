var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByMake',function(){

	before(function (done){
   		db.bike.find({Make:"BMW"}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by MAKE count',function(){
		const result = count;
		expect(result).to.equal(404);
	});
});