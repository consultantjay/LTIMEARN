var expect = require('chai').expect;
var mongojs= require('mongojs')
var db=mongojs('final',['doctor'])

var count = 0;
describe('Test by length of document Doctor',function(){
	before(function(done){
		db.doctor.find({},function(err,res){
			count = Object.keys(res[0]).length;
			done();
		});
	});

	it('length of a document',function(){
		expect(count).to.equal(9);
	});
});
