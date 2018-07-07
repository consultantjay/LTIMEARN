1.search hotel on the basis of property name:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
db.cleartrip.find({property_name:"Hotel Jivan Jyoti"},{_id:0},
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});