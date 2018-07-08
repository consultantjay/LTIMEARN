var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var count = 0;
describe('TestMongoDB4',function(){

	before(function (done){
        db.cleartrip.find({property_name:"Mohan Niwas",room_type:"Double Room",rating:3},
        function (err,res){
            console.log(res.length);
			count=typeof res[0].property_name;
            done();
        });
    });
    it('type by rating , name and room_type',function(){
		const result = count;
		expect(result).to.equal("string");
	});
});
