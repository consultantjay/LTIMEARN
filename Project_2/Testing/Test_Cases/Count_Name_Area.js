var expect = require('chai').expect;
var mongojs= require('mongojs')
var db=mongojs('final',['doctor'])

var count = 0;
describe('Count of Name And Area',function(){

	before(function (done){
   		db.doctor.find( {name:"DR. AJAY GUPTA", area:"Aundh"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by name count',function(){
		expect(count).to.equal(1);
	});
});
