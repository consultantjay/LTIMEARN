var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Proj',['deb']);

var val_count=0;

describe('Test by city length',function(){
	before(function(done){
  db.deb.find({zonal_area:"SOUTHEAST-US",city:"Leland",name:"McDonald's"},
{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,res){
							val_count = Object.keys(res[0]).length;
      //console.log(city_count);
			done();
		});
	});

	it('zonal_area, city and name by projection',function(){
		expect(val_count).to.equal(7);
	});
});
