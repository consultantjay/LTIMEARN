var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);
var type;
describe('Test Type Make Model Price',function(){
    before(function (done){
		db.bike.find({Make:"BMW",Model:"R-Series",Price:14640},function (err,res){ 
			type=typeof res[0].Price;
			done();
		});
	});
	it('Type of Make Model Price',function(){
        expect(type).to.equal("number");
    });
});