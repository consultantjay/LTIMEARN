var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Poject',['hospital']);

describe('Test by city, hospital ownership and get Hospital name',function(){
	before(function(done){
		db.hospital.find({City:"LUDINGTON",State:"MI"},function(err,res){
			city_count = res[0]["Hospital Name"];
			done();
		});
	});

	it('value by city name',function(){
		expect(city_count).to.equal("SPECTRUM HEALTH LUDINGTON HOSPITAL");
	});
});