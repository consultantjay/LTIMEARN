var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB12',function(){

	before(function (done){
        db.cleartrip.find({property_name:"Mohan Niwas",room_type:"Double Room",city:"Jodhpur"},
        function (err,res){
            console.log(res.length);
			type=typeof res[0].room_type;
            done();
        });
    });
    it('type by room_type , name and city',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
