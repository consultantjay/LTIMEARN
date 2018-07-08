var expect = require('chai').expect;
var mongojs= require('mongojs')
var db=mongojs('final',['doctor'])

var count = 0;
describe('Count of Specialization And Area',function(){

	before(function (done){
   		db.doctor.find( {specialization:"General Surgeon", area:"Aundh"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('count : ',function(){
		expect(count).to.equal(3);
	});
});
