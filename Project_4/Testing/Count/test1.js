var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var count = 0;
describe('TestMongoDB1',function(){

	before(function (done){
   		db.cleartrip.find({}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by count',function(){
		const result = count;
		expect(result).to.equal(5000);
	});
});
