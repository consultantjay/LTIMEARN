var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);

var count = 0;
describe('TestMongoDB13',function(){

	before(function (done){
   		db.cleartrip.find({city:"Jodhpur",property_name:"Mohan Niwas",room_type:"Double Room"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by room_type,city and property_name count',function(){
		const result = count;
		expect(result).to.equal(1);
	});
});
