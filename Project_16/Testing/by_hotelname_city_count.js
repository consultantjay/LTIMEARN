var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var count1 = 0,count2=0;
describe('by hotle name,city for count',function(){

	before(function (done){
		  db.trip.aggregate([{$match:{$and:[{property_name:"Luxor Park"},{city:"Hyderabad"}]}},{$project:{area:1,property_name:1,_id:0,city:1}}], function (err,res){ 
				console.log(res.length); 
				count1=res.length;
				done();
			 });
	});

	it('by hotle name,city for count',function(){
		const result = count1;
		expect(result).to.equal(2);
	});
});



