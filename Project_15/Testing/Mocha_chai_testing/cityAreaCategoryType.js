var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var type;
describe('TestMongoDB',function(){

	before(function (done){
        db.hotel.find({city:"Delhi",hotel_category:"regular",area:"Kalkaji",property_type:"Hotel" }, 
        function (err,res){ 
			type=typeof res[0].hotel_category;
            done();
        });
    });
    it('type by area , city and category',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});