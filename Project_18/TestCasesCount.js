var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var count = 0;
describe('TestSearchAllCount',function(){

	before(function (done){
   		db.hotel.find({}, function (err,res){
				console.log(res.length);
				count=res.length;
				done();
			});
		});

	it('by count',function(){
		const result = count;
		expect(result).to.equal(1207);
	});
});
