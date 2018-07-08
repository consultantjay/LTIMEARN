var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var temp = 0;
describe('TestMongoDB 2',function(){
           
 
	before(function (done){
                        this.timeout(15000);
   		db.rest.aggregate([{$match:{
					city:"Oxford"
				   }},{$sort:{name:-1}}
                            ],{
                             allowDiskUse: true
                            },function(err,res){
                                           
				             temp=res[0].priceRange;
                                             
                                             done();
                                                }
						

                                );




		});

	it('sort by rating of particular city descending',function(){
               
		const result = temp;
		expect(result).to.equal("USD 35.00-40.00");
	});
});







