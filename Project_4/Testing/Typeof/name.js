var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB15',function(){

	before(function (done){
        db.cleartrip.find({property_name:"Mohan Niwas"},
        function (err,res){
            console.log(res.length);
			type=typeof res[0].property_name;
            done();
        });
    });
    it('type by name',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
