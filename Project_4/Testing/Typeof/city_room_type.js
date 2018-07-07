var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB11',function(){

	before(function (done){
        db.cleartrip.find({city:"Jodhpur",room_type:"Double Room"},
        function (err,res){
            console.log(res.length);
			type=typeof res[0].city;
            done();
        });
    });
    it('type by city and room_type',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
