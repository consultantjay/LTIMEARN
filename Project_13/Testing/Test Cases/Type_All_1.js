var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);
var type;
describe('Test Type Make',function(){
    before(function (done){
		db.bike.find({},function (err,res){ 
			type=typeof res[0].Price;
			done();
		});
	});
	it('Type of All',function(){
        expect(type).to.equal("number");
    });
});