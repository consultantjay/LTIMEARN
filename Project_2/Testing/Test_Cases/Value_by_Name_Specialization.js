var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Name, Specialization, get doctors Qualification from first document',function(){
	before(function(done){
		db.doctor.find({name:"DR. AJAY GUPTA", specialization:"General Surgeon"},function(err,res){
			store = res[0].qualification;
			done();
		});
	});

	it('value of doctor Qualification by Name, Specialization',function(){
		expect(store).to.equal("MS");
	});
});
