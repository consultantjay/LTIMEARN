var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		db.rest.aggregate([{
				   $limit:6
				   }
		       		   ],function(err,res){
                                          
				          count=res[0].city;
                                             done();
                                                     }
						

                                );




		});

	it('by landing page by city',function(){
		const result = count;
		expect(result).to.equal("Clearwater");
	});
});