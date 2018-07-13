var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count = "";
describe('by city_rating_name value',function(){

	before(function (done){
   		 db.trip.aggregate([{$match:{$and:[{city:"Hyderabad"},{hotel_star_rating:1},{property_name:"Luxor Park"}]}},{$project:{_id:0,hotel_overview:1,property_name:1}}], function (err,res){ 
				//console.log(res.length); 
				count=res[0].property_name;
console.log(count);
				done();
			 });
		});

	it('by city_rating_name value',function(){
		const result = count;
		expect(result).to.equal("Luxor Park");
	});
});




