var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var temp = 0;
describe('TestMongoDB 3',function(){

	before(function (done){
   		db.rest.aggregate([{$match:{
					country:"US-zone-1",city:"Oxford"
				   }}
		       		   ],function(err,res){
                                           
				          temp=res[1].name;
                                             done();
                                                     }
						

                                );




		});

	it('By country and city value',function(){
		const result = temp;
		expect(result).to.equal("Corner Grill Drinkery");
	});
});