var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByAll',function(){

	before(function (done){
   		db.bike.find({}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by ALl count',function(){
		const result = count;
		expect(result).to.equal(7493);
	});
});