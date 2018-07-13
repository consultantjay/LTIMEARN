var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['appointment']);

var store=0;

describe('Test by booking appointment with all details',function(){
	before(function(done){
		db.appointment.insert({ p_id: 4325, p_name: "Ram", p_email: "shyam@xyz.com", date: "12 Dec 2018", time:"1:00",d_name:"DR. AJAY GUPTA", specialization:"General Surgeon", area:"Kothrud",p_message:"I am suffering from abc since last night."},function(err,res){
			store = "Inserted";
			done();
		});
	});

	it('Appointment Done',function(){
		expect(store).to.equal("Inserted");
	});
});
