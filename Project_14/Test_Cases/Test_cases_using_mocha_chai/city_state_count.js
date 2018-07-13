var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		db.hospital.find({City:"LUDINGTON",State:"MI"}, function (err,res){ 
				console.log(res.length); 
				count=res.length;
				done();
			 });
		});

	it('by city count',function(){
		const result = count;
		expect(result).to.equal(1);
	});
}); 