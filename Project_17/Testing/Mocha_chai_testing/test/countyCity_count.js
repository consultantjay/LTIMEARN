var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var count = 0;
describe('TestMongoDB 3',function(){

	before(function (done){
   		db.rest.aggregate([{$match:{
					country:"US-zone-1",city:"Oxford"
				   }}
		       		   ],function(err,res){
                                          console.log(res.length); 
				          count=res.length;
                                             done();
                                                     }
						

                                );




		});

	it('By country and city count',function(){
		const result = count;
		expect(result).to.equal( 10);
	});
});