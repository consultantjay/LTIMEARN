var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var count = 0;
describe('TestMongoDB12',function(){

	before(function (done){
   		db.cleartrip.find({rating:2,room_type:"Double Room"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by rating  and room_type count',function(){
		const result = count;
		expect(result).to.equal(1472);
	});
});
