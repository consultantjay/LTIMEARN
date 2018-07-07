var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB9',function(){

	before(function (done){
        db.cleartrip.find({property_name:"Mohan Niwas",city:"Jodhpur",rating:3},
        function (err,res){
            console.log(res.length);
			type=typeof res[0].property_name;
            done();
        });
    });
    it('type by rating , name and city',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
