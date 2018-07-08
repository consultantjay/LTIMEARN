var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var type;
describe('TestMongoDB10',function(){

	before(function (done){
        db.cleartrip.find({city:"Jodhpur",rating:3},
        function (err,res){
            console.log(res.length);
			type=typeof res[0].city;
            done();
        });
    });
    it('type by city and rating',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});
