var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var count = 0;
describe('TestMongoDB 8',function(){

	before(function (done){
   		db.rest.aggregate([{$match:{
					city:"Oxford"
				   }},{$project:{name:1,_id:0}}
		       		   ],function(err,res){
                                        
				          count=typeof res[0].name;
                                             done();
                                                     }
						

                                );




		});

	it('by city all restaurant name(type)',function(){
		const result = count;
		expect(result).to.equal("string");
	});
});