var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Specialization, Qualification, area get doctors name from first document',function(){
	before(function(done){
		db.doctor.find({specialization:"General Surgeon", qualification:"MS", area:"Aundh"},function(err,res){
			store = res[0].name;
			done();
		});
	});

	it('value of doctor name by Specialization, Qualification, area',function(){
		expect(store).to.equal("DR. SADANAND BORSE");
	});
});
