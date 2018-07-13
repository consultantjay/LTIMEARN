var expect = require('chai').expect;
var mongojs= require('mongojs')
var db=mongojs('final',['doctor'])

var count = 0;
describe('Count of specialization, qualification, area',function(){

	before(function (done){
   		db.doctor.find( {specialization:"General Surgeon", qualification:"MS", area:"Aundh"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('count : ',function(){
		expect(count).to.equal(2);
	});
});
