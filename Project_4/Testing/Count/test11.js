var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var count = 0;
describe('TestMongoDB11',function(){

	before(function (done){
   		db.cleartrip.find({city:"Jodhpur",room_type:"Double Room"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by city and room_type count',function(){
		const result = count;
		expect(result).to.equal(15);
	});
});
