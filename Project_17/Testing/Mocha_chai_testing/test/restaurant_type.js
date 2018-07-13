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
                                           
				             temp=typeof res[0].name;
                                             
                                             done();
                                                }
						

                                );




		});

	it('type of field in document search by Restaurant ',function(){
               
		const result = temp;
		expect(result).to.equal("string");
	});
});







