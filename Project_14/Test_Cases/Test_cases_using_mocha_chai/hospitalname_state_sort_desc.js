var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);

describe('Test by hospital name, state',function(){
	before(function(done){
		db.hospital.aggregate([{$match:{"Hospital Name":"WOODHULL MEDICAL AND MENTAL HEALTH CENTER",State:"NY",
                                  "Hospital overall rating":{$ne:"Not Available"}}},
                         {$sort:{
                                  "Hospital overall rating":-1
                                }}],function(err,res){
			city_count = res[0]["Hospital Name"];
			done();
		});
	});

	it('sort',function(){
		expect(city_count).to.equal("WOODHULL MEDICAL AND MENTAL HEALTH CENTER");
	});
});