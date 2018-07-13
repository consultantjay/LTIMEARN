var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Name, get doctors area from first document',function(){
	before(function(done){
		db.doctor.find({name:"DR. AJAY GUPTA"},function(err,res){
			store = res[0].area;
			done();
		});
	});

	it('value of doctor area by Name',function(){
		expect(store).to.equal("Aundh");
	});
});
