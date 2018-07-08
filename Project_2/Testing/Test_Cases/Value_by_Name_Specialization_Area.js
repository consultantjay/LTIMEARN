var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Name, Specialization, area get doctors qualification from first document',function(){
	before(function(done){
		db.doctor.find({name:"DR. AJAY GUPTA",specialization:"General Surgeon", area:"Aundh"},function(err,res){
			store = res[0].specialization;
			done();
		});
	});

	it('value of doctor specialization by Name, Area, Specialization',function(){
		expect(store).to.equal("General Surgeon");
	});
});
