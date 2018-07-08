var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);

var count = 0;
describe('TestByMakeAndType',function(){

	before(function (done){
   		db.bike.find({Make:"BMW",Type:"Standard"}, function (err,res){ 
				count=res.length;
				done();
			 });
		});

	it('by MAKEandTYPE count',function(){
		const result = count;
		expect(result).to.equal(44);
	});
});