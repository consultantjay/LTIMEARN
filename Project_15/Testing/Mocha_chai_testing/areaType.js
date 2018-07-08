var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var type;
describe('TestMongoDB',function(){

	before(function (done){
        db.hotel.find({area:"Kalkaji",property_type:"Hotel"},
        function (err,res){
			type=typeof res[0].city;
            done();
        });
    });
    it('type by area',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});