var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);

var count = "";

describe('valueSortKeywordCityCategoriesHighToLow',function(){

	before(function (done){
  db.yelp.aggregate([
                    {$match:{$and:[{$or:[{name:/.*Salon.*/i},{categories:/.*hair.*/i}]},{city:"Phoenix"},{categories:/.*hair.*/i}]}},
                    {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},{$sort:{stars:-1}}],
                    function (err,res){
            				count=res[0].state;
            				done();
			 });
		});

	it('by keyword city categories value high to low',function(){
		const result = count;
		expect(result).to.equal("AZ");
	});
});
