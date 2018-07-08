var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);
var type;
describe('Test Type Model',function(){
    before(function (done){
		db.bike.find({Model:"R-Series"},function (err,res){ 
			type=typeof res[0].Price;
			done();
		});
	});
	it('Type of Model',function(){
        expect(type).to.equal("number");
    });
});