var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var value;
describe('TestMongoDB',function(){

	before(function (done){
        db.hotel.aggregate([{$match:{hotel_category:"regular",property_type:"Hotel"}},
        {$sort:{hotel_star_rating:-1}}],
        function (err,res){ 
			value=res[0].area;
            done();
        });
    });
    it('Value by category',function(){
		const result = value;
		expect(result).to.equal("Hi-Tech City");
	});
});