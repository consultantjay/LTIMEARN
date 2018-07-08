var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Specialization, Qualification, get doctors name from first document',function(){
	before(function(done){
		db.doctor.find({specialization:"General Surgeon", qualification:"MS"},function(err,res){
			store = res[0].name;
			done();
		});
	});

	it('value of doctor name by Specialization, Qualification',function(){
		expect(store).to.equal("DR. B R AGARWAL");
	});
});
