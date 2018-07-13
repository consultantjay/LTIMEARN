var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var temp = 0;
describe('TestMongoDB 2',function(){
           
 
	before(function (done){
                       
   		db.rest.aggregate([{$match:{
					city:"Oxford"
				   }}
                            ],function(err,res){
                                           
				             temp=res.length;
                                             
                                             done();
                                                }
						

                                );




		});

	it('count of  document search by city ',function(){
               
		const result = temp;
		expect(result).to.equal(10);
	});
});







