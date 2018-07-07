var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB8',function(){

	before(function (done){
        db.hotel.find({property_name:"Mohan Niwas",room_type:"Double Room",city:"Jodhpur",rating:2},
        function (err,res){
			type=typeof res[0].property_name;
            done();
        });
    });
    it('type by rating ,city, name and room_type',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
