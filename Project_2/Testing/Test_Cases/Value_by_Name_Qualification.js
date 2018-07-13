var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Name, Qualification, get doctors Address from first document',function(){
	before(function(done){
		db.doctor.find({name:"DR. AJAY GUPTA", qualification:"MS"},function(err,res){
			store = res[0].name;
			done();
		});
	});

	it('value of doctor Name by Name, Qualification',function(){
		expect(store).to.equal("DR. AJAY GUPTA");
	});
});
