var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);

describe('Test by city and get Hospital name',function(){
	before(function(done){
		db.hospital.find({"Hospital Name":"O'CONNOR HOSPITAL",City:"DELHI",State:"NY"},function(err,res){
			city_count = typeof(res[0]["City"]);
			done();
		});
	});

	it('value by city name',function(){
		expect(city_count).to.equal("string");
	});
});