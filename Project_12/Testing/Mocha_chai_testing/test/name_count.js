var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Zomato',['zomato_code1']);

var count1 = 0,count2=0;
describe('TestMongoDB',function(){

	before(function (done){
		db.zomato_code1.find({"Restaurant_Name":"Tea Villa Cafe"}, function (err,res){
				console.log(res.length);
				count1=res.length;
				done();
			 });
	});

	it('by name count',function(){
		const result = count1;
		expect(result).to.equal(4);
	});
});
