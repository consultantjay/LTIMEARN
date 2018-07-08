var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB7',function(){

	before(function (done){
        db.hotel.find({city:"Jodhpur",room_type:"Double Room",rating:3 },
        function (err,res){
			type=typeof res[0].room_type;
            done();
        });
    });
    it('type by rating , city and room_type',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
