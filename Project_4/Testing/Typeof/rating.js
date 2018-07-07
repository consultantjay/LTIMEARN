var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB',function(){

	before(function (done){
        db.cleartrip.find({rating:2},
        function (err,res){
			type=typeof res[0].rating;
            done();
        });
    });
    it('type by rating',function(){
		const result = type;
		expect(result).to.equal("number");
	});
});
