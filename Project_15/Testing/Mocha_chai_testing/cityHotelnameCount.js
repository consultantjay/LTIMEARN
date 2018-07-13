var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
		   db.hotel.find({property_name:"Vedas",city:"Rishikesh",property_type:"Hotel"},
		    function (err,res){ 
				console.log(res.length); 
				count=res.length;
				done();
			 });
		});
	it('by city and hotel name',function(){
		const result = count;
		expect(result).to.equal(1);
	});
});