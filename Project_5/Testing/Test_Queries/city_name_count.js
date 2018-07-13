var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hotel']);

var count1 = 0,count2=0;
describe('TestMongoDB',function(){

before(function (done){
   db.hotel.find({$and:[{city:"manali"},{property_name:"Hotel Mountain Face"}]},
	{_id:0,property_name:1,city:1,state:1}, function (err,res){ 
console.log(res.length); 
count1=res.length;
done();
});
});

it('city name count',function(){
const result = count1;
expect(result).to.equal(2);
});
});