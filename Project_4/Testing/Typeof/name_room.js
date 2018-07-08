var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB13',function(){

	before(function (done){
        db.hotel.find({property_name:"Mohan Niwas",room_type:"Double Room"},
        function (err,res){
            console.log(res.length);
			type=typeof res[0].property_name;
            done();
        });
    });
    it('type by property_name and room_type',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
