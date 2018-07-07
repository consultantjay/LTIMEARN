var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB5',function(){

	before(function (done){
        db.cleartrip.find({rating:3,property_name:"Mohan Niwas"},
        function (err,res){
			type=typeof res[0].property_name;
            done();
        });
    });
    it('type by rating and name',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
