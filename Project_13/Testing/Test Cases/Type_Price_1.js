var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);
var type;
describe('Type Test Price',function(){
    before(function (done){
		db.bike.find({Price:14640},function (err,res){ 
			type=typeof res[0].Price;
			done();
		});
	});
	it('Type of Make',function(){
        expect(type).to.equal("number");
    });
});