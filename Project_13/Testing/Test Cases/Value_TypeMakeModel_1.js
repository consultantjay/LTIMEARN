var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);
var value;
describe('Value Test By Type Make Model',function(){
    before(function (done){
		db.bike.find({Type:"Standard",Make:"BMW",Model:"R-Series"}, function (err,res){ 
	        value=res[0].Model_Year;
			done();
		});
	});
	it('Value of Model Year',function(){
        expect(value).to.equal(1970);
    });
});
