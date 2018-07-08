var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Proj',['deb']);

var count = "";
describe('TestMongoDB1',function(){

	before(function (done){
   		db.deb.find({city:"Leland"},
 {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}, function (err,res){
				//console.log(res.length);
				count=res[0].name;
console.log(count);
				done();
			 });
		});

	it('by city value',function(){
		const result = count;
		expect(result).to.equal("Taco Bell");
	});
});
