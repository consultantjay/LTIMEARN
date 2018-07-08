var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var temp = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		 db.rest.aggregate([{$match:{
					country:"US-zone-1"
				  	   }
                          		 }],function(err,res){
                                          
				          temp=typeof res[0].name;
                                             done();
                                                     }
						

                                );




		});

	it('type of particular country',function(){
		const result = temp;
		expect(result).to.equal("string");
	});
});







