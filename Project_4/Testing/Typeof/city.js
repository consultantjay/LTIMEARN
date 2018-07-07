var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type
describe('TestMongoDB1',function(){

	before(function (done){
        db.cleartrip.find({city:"Jodhpur"},
        function (err,res){
			type=typeof res[0].city;
            done();
        });
    });
    it('type by city',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
