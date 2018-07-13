var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var temp = 0;
describe('TestMongoDB 5',function(){
           
 
	before(function (done){
                       this.timeout(15000);
   		db.rest.aggregate([{$match:{
					country:"US-zone-1"
				   }},
                            {$sort:{
                                   rating:-1
                                   }
                           }],{
                             allowDiskUse: true
                            },function(err,res){
					 
                                           
				             temp=res[1].city;
                                             
                                             done();
                                                }
						

                                );




		});







	it('value of city sort by rating descending ',function(){
               
		const result = temp;
		expect(result).to.equal("Indianapolis");
	});
});







