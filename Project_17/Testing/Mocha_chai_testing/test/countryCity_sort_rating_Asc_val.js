var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var temp = 0;
describe('TestMongoDB 6',function(){
           
 
	before(function (done){
                       this.timeout(15000);
			db.rest.aggregate([{$match:{
					country:"US-zone-1",city:"Oxford"
				   }},
                            {$sort:{
                                   rating:1
                                   }
                           }],{
                             allowDiskUse: true
                            }	,function(err,res){
					 
                                           
				             temp=res[0].name;
                                             
                                             done();
                                                }
						

                                );




		});



	it('value of country and city sort by rating Ascending ',function(){
               
		const result = temp;
		expect(result).to.equal("The Pita Pit");
	});
});










