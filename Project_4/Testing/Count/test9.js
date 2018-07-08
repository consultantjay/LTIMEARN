var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var count = 0;
describe('TestMongoDB9',function(){

	before(function (done){
   		db.cleartrip.find({room_type:"Double Room",property_name:"Mohan Niwas"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by room_type and property_name count',function(){
		const result = count;
		expect(result).to.equal(1);
	});
});
