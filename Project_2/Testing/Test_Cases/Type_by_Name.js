var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test by Name, get data type of doctors area from first document',function(){
	before(function(done){
		db.doctor.find({name:"DR GUPTA AJAY"},function(err,res){
			store = typeof(res[0].area);
			done();
		});
	});

	it('type of doctor area by Name',function(){
		expect(store).to.equal("string");
	});
});
