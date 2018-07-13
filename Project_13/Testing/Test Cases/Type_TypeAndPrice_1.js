var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);
var type;
describe('Test Type Type Price',function(){
    before(function (done){
		db.bike.find({Type:"Standard",Price:14640},function (err,res){ 
			type=typeof res[0].Price;
			done();
		});
	});
	it('Type of Type Price',function(){
        expect(type).to.equal("number");
    });
});