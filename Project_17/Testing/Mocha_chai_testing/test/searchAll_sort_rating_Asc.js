var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		db.rest.aggregate([{
				   $limit:6
				   }
		       		   ,{$sort:{rating:1}}],function(err,res){
                                          console.log(res.length); 
				          count=res[0].name;
                                             done();
                                                     }
						

                                );




		});

	it('on landing page by Restaurant name',function(){
		const result = count;
		expect(result).to.equal("Atlantic No. 5");
	});
});