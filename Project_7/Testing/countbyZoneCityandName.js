var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Proj',['deb']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		db.deb.find({zonal_area:"SOUTHEAST-US",city:"Leland",name:"McDonald's"}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			 });
		});

	it('by zonal_area, city and name count',function(){
		const result = count;
		expect(result).to.equal(2);
	});
});
