var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var count = 0;
describe('TestMongoDB 8',function(){

	before(function (done){
   		db.rest.aggregate([{$match:{
					city:"Oxford"
				   }},{$sort:{rating:-1}}
		       		   ],function(err,res){
                                        
				          count=res[1].name;
                                             done();
                                                     }
						

                                );




		});

	it('by city all  restaurant name sort by rating descending',function(){
		const result = count;
		expect(result).to.equal("Mr. Pita");
	});
});