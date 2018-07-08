var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB6',function(){

	before(function (done){
        db.cleartrip.find({room_type:"Double Room"}, function (err,res){
			type=typeof res[0].room_type;
            done();
        });
    });
    it('type by room_type',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
