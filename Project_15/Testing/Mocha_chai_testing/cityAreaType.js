var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var type;
describe('TestMongoDB',function(){

	before(function (done){
        db.hotel.find({city:"Delhi",area:"Kalkaji",property_type:"Hotel"},
        function (err,res){
            console.log(res.length); 
			type=typeof res[0].hotel_category;
            done();
        });
    });
    it('type by city and area',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});