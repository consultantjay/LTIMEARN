var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count = "";
describe('name_city for value',function(){

	before(function (done){
   		 db.trip.aggregate([{$match:{$and:[{property_name:"Luxor Park"},{city:"Hyderabad"}]}},{$project:{area:1,property_name:1,_id:0,city:1}}], function (err,res){ 
				//console.log(res.length); 
				count=res[1].property_name;
console.log(count);
				done();
			 });
		});

	it('name_city for value',function(){
		const result = count;
		expect(result).to.equal("Luxor Park");
	});
});




