var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Name, Specialization, Qualification, Area get doctors address from first document',function(){
	before(function(done){
		db.doctor.find({name:"DR. AJAY GUPTA",specialization:"General Surgeon", qualification:"MS", area:"Aundh"},function(err,res){
			store = res[0].address;
			done();
		});
	});

	it('value of doctor address by Name, Specialization, Qualification, Area',function(){
		expect(store).to.equal("MEDIPOINT HOSPITAL PVT LTD, BANER BOUNDARY, DP ROAD, AUNDH, PUNE - 411007");
	});
});
