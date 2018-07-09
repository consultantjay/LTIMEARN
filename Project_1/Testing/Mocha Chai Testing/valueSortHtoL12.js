var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);

var count = "";

describe('valueSort12LowToHigh',function(){

	before(function (done){
  db.yelp.aggregate([
                    {$match:{}},
                    {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1,review_count:1,categories:1}},{$sort:{stars:1}},
                    {$limit:12}], function (err,res){
            				count=res[1].city;
            				done();
			 });
		});

	it('by 12 value low to high',function(){
		const result = count;
		expect(result).to.equal('Pittsburgh');
	});
});
