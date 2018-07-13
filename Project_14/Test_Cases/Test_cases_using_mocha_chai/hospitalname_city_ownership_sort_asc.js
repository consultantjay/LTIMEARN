var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);

describe('Test by hospital name,city, hospital ownership',function(){
	before(function(done){
		db.hospital.aggregate([{$match:{"Hospital Name" : "PIKE COUNTY MEMORIAL HOSPITAL","City":"LOUISIANA","Hospital Ownership" : "Government - Local",
                                  "Hospital overall rating":{$ne:"Not Available"}}},
                         {$sort:{
                                  "Hospital overall rating":1
                                }}],function(err,res){
			city_count = res[0]["Hospital Name"];
			done();
		});
	});

	it('sort',function(){
		expect(city_count).to.equal("PIKE COUNTY MEMORIAL HOSPITAL");
	});
});