var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);
var type;
describe('Type Test Type',function(){
    before(function (done){
		db.bike.find({Type:"Standard"},function (err,res){ 
			type=typeof res[0].Price;
			done();
		});
	});
	it('Type of Type',function(){
        expect(type).to.equal("number");
    });
});