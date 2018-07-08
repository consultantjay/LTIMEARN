var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var count = 0;
describe('TestMongoDB10',function(){

	before(function (done){
   		db.cleartrip.find({city:"Jodhpur",rating:2}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by city and rating count',function(){
		const result = count;
		expect(result).to.equal(9);
	});
});
