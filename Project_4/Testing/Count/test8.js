var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var count = 0;
describe('TestMongoDB8',function(){

	before(function (done){
   		db.cleartrip.find({rating:2,property_name:"Mohan Niwas"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by rating and property_name count',function(){
		const result = count;
		expect(result).to.equal(0);
	});
});
