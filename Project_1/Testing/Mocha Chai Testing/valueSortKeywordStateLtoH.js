var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);

var count = "";

describe('valueSortKeywordStateLowToHigh',function(){

	before(function (done){
  db.yelp.aggregate([
                    {$match:{$and:[{state:"AZ"},{$or:[{name:/.*Salon.*/i},{categories:/.*hair.*/i}]}]}},
                    {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1,review_count:1}},{$sort:{stars:1}}],
	                    function (err,res){
            				count=res[0].name;
            				done();
			 });
		});

	it('by keyword state value low to high',function(){
		const result = count;
		expect(result).to.equal('"Great Clips"');
	});
});
