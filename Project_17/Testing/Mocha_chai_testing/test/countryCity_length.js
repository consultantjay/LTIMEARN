
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var temp = 0;
describe('TestMongoDB 7',function(){
           
 
	before(function (done){
                        this.timeout(15000);
   		db.rest.aggregate([{$match:{
					country:"US-zone-1"
				   }},{$sort:{name:1}}
                            ],{
                             allowDiskUse: true
                            },function(err,res){
                                           
				     
                                             temp= Object.keys(res[0]).length;
                                               
                                             done();
                                                }
						

                                );




		});

	it('number of field in search of city and country',function(){
               
		const result = temp;
		expect(result).to.equal(31);
	});
});







