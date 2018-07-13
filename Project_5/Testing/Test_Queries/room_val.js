var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hotel']);

var count = "";
describe('TestMongoDB1',function(){

before(function (done){
db.hotel.find({"room_count":{$gte:2}},
	{_id:0,property_name:1,city:1,state:1}, function (err,res){ 
//console.log(res.length); 
count=res[0].property_name;
console.log(count);
done();
});
});

it('by_room_val',function(){
const result = count;
expect(result).to.equal("Global Village Ooty");
});
});
