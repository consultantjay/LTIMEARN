var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var type;
describe('TestMongoDB',function(){

	before(function (done){
        db.hotel.find({property_name:"Vedas",hotel_category:"regular",city:"Rishikesh",area:"Tapovan",property_type:"Hotel"}, 
        function (err,res){ 
			type=typeof res[0].hotel_category;
            done();
        });
    });
    it('type by area ,city, name and category',function(){
		const result = type;
		expect(result).to.equal("string");
	});
});