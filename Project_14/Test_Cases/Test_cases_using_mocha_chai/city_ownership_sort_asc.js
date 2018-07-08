var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);

describe('Test by city and hospital ownership',function(){
	before(function(done){
		db.hospital.aggregate([{$match:{City:"HAMILTON","Hospital Ownership":"Voluntary non-profit - Private",
                                  "Hospital overall rating":{$ne:"Not Available"}}},
                         {$sort:{
                                  "Hospital overall rating":1
                                }}],function(err,res){
			city_count = res[0]["Hospital Name"];
			done();
		});
	});

	it('sort',function(){
		expect(city_count).to.equal("ROBERT WOOD JOHNSON UNIVERSITY HOSPITAL HAMILTON");
	});
});