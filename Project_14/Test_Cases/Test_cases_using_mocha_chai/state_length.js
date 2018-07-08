var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);


describe('Test by city length',function(){
	before(function(done){
		db.hospital.find({State:"NY"},function(err,res){
			city_count = Object.keys(res[0]).length;
			done();
		});
	});

	it('length by city name',function(){
		expect(city_count).to.equal(21);
	});
});