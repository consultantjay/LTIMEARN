var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);

var count = "";

describe('valueSortCityCategoriesLowToHigh',function(){

	before(function (done){
  db.yelp.aggregate([
                    {$match:{$and:[{city:"Phoenix"},{categories:/.*food.*/i}]}},
                    {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1,review_count:1}},{$sort:{stars:1}}], function (err,res){
            				count=res[0].name;
            				done();
			 });
		});

	it('by city categories value low to high',function(){
		const result = count;
		expect(result).to.equal('"McDonald\'s"');
	});
});
