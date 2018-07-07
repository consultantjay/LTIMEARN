var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type
describe('TestMongoDB3',function(){

	before(function (done){
        db.cleartrip.find({rating:2,room_type:"Double Room"},
        function (err,res){
			type=typeof res[0].room_type;
            done();
        });
    });
    it('type by rating and room_type',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
