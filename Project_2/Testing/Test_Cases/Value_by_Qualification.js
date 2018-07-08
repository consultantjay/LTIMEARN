var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Qualification, get doctors name from first document',function(){
	before(function(done){
		db.doctor.find({qualification:"MS"},function(err,res){
			store = res[0].name;
			done();
		});
	});

	it('value of doctor name by Qualification',function(){
		expect(store).to.equal("DR. B R AGARWAL");
	});
});
