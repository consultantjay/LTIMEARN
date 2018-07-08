var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('final',['doctor']);

var store=0;

describe('Test data type of values from first document',function(){
	before(function(done){
		db.doctor.find({},function(err,res){
			store = res[0];
			done();
		});
	});

	it('type of all values in collection doctor ',function(){
		expect(typeof(store._id)).to.equal("object");
		console.log("_id data type = "+ typeof(store._id));
		expect(typeof(store.sno)).to.equal("number");
		console.log("S.No. data type = "+ typeof(store.sno));
		expect(typeof(store.name)).to.equal("string");
		console.log("Name data type = "+ typeof(store.name));
		expect(typeof(store.qualification)).to.equal("string");
		console.log("Qualification data type = "+ typeof(store.qualification));
		expect(typeof(store.specialization)).to.equal("string");
		console.log("Specialization data type = "+ typeof(store.specialization));
		expect(typeof(store.area)).to.equal("string");
		console.log("Area data type = "+ typeof(store.area));
		expect(typeof(store.time)).to.equal("string");
		console.log("Time data type = "+ typeof(store.time));
		expect(typeof(store.contact)).to.equal("string");
		console.log("Contact data type = "+ typeof(store.contact));
		expect(typeof(store.address)).to.equal("string");
		console.log("Address data type = "+ typeof(store.address));
	});
});
