var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Proj',['deb']);

var temp=0;



	describe('TestMongoDB3',function(){
		before(function(done){
    db.deb.aggregate([{$match:{name:"McDonald's"}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,res){
				temp=res[1].city;
				done();
			});
		});

		it('name:sort by rating',function(){

			expect(temp).to.equal("Evansville");
		});
	});
