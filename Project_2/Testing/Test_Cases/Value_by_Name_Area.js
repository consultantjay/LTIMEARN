var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Name, area get doctors name from first document',function(){
	before(function(done){
		db.doctor.find({name:"DR. GOURI R BARVE", area:"Aundh"},function(err,res){
			store = res[0].name;
			done();
		});
	});

	it('value of doctor name by Name, Area',function(){
		expect(store).to.equal("DR. GOURI R BARVE");
	});
});
