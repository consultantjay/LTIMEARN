var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Area, get doctors name from first document',function(){
	before(function(done){
		db.doctor.find({area:"Aundh"},function(err,res){
			store = res[0].name;
			done();
		});
	});

	it('Value of doctor name by Area',function(){
		expect(store).to.equal("DR. GOURI R BARVE");
	});
});
