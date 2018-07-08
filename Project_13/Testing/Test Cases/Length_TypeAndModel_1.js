var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('PRO',['bike']);
var val_count=0;
describe('Test by Type Model length',function(){
	before(function(done){
  		db.bike.find(
			{Type:"Standard",Model:"R-Series"},
			{_id:1,Make:1,Price:1,Model:1,Feedback_Perc:1},
			function(err,res){
				val_count = Object.keys(res[0]).length;
				done();
			});
	});
	it('_id,Make,Price,Model,Feedback_Perc in Projection',function(){
		expect(val_count).to.equal(5);
	});
});