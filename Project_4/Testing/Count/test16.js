var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var count = 0;
describe('TestMongoDB16',function(){

	before(function (done){
   		db.cleartrip.find({city:"Jodhpur",rating:3,room_type:"Double Room"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by room_type,city and rating count',function(){
		const result = count;
		expect(result).to.equal(5);
	});
});
