var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['appointment']);

var store=0;

describe('Test by P_id, get patient Name from first document',function(){
	before(function(done){
		db.appointment.find({p_id:4325},function(err,res){
			store = res[0].p_name;
			done();
		});
	});

	it('value of Patient Name by P_id',function(){
		expect(store).to.equal("Ram");
	});
});
