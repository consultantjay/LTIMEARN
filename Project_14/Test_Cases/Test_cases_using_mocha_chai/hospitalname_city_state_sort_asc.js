var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);

var city_count = "";



describe('Test by hospital name, city and state',function(){
			
	before(function(done){
					
	 db.hospital.aggregate([{$match:{"Hospital Name":"DALE MEDICAL CENTER",City:"OZARK",State:"AL",
					"Hospital overall rating":{$ne:"Not Available"}}},
					{$sort:{"Hospital overall rating":1}}],function(err,res){
					city_count = res[0]["Hospital Ownership"];
					done();
		});
	});

	it('sort',function(){
		expect(city_count).to.equal("Government - Hospital District or Authority");
	});
});