var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		db.rest.aggregate([{
				   $limit:6
				   }
		       		   ,{$sort:{priceRange:-1}}],function(err,res){
                                          
				          count=res[0].name;
                                             done();
                                                     }
						

                                );




		});

	it('on landing page by pricerange name',function(){
		const result = count;
		expect(result).to.equal("Village Inn Restaurant and Bakery");
	});
});