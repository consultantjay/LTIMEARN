var expect = require('chai').expect;
var mongojs= require('mongojs')
var db=mongojs('final',['doctor'])

var count = 0;
describe('Count of Qualification ',function(){

	before(function (done){
   		db.doctor.find( {qualification:"MS"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('count : ',function(){
		expect(count).to.equal(193);
	});
});
