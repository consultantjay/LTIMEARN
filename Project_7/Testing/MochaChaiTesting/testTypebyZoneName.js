var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Proj',['deb']);

var temp=0;



	describe('TestMongoDB2',function(){
		before(function(done){
			db.deb.find({zonal_area:"SOUTHEAST-US",name:"McDonald's"},{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,res){
				temp=typeof res[1].city;
				done();
			});
		});

		it('type of zonal_area and name',function(){

			expect(temp).to.equal("string");
		});
	});
