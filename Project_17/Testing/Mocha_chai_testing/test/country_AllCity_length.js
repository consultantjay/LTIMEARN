var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var count = 0;
describe('TestMongoDB 8',function(){

	before(function (done){
   		db.rest.aggregate([{$match:{
					country:"US-zone-1"
				   }},{$project:{city:1,_id:0}}
		       		   ],function(err,res){
                                        
				          count=Object.keys(res[0]).length;
                                             done();
                                                     }
						

                                );




		});

	it('by country city name(length -no. of field)',function(){
		const result = count;
		expect(result).to.equal(1);
	});
});