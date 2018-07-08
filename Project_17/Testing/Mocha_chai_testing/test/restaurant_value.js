var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var temp = 0;
describe('TestMongoDB 4',function(){
           
 
	before(function (done){
                       
   		db.rest.aggregate([{$match:{
					name:"Mellow Mushroom"
				   }}
                            ],function(err,res){
                                           
				             temp=res[0].rating;
                                             
                                             done();
                                                }
						

                                );




		});

	it('value of field in document search by Restaurant ',function(){
               
		const result = temp;
		expect(result).to.equal(2);
	});
});







