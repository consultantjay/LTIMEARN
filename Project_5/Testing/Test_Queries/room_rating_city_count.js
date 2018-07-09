var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hotel']);

var count1 = 0,count2=0;
describe('TestMongoDB',function(){

before(function (done){
 db.hotel.find({$and:[{"room_count":{$gte:2}},{"hotel_star_rating":{$gte:2}},{"city":"manali"}]},
	{_id:0,property_name:1,city:1,state:1}, function (err,res){ 
console.log(res.length); 
count1=res.length;
done();
});
});

it('by_room_rating_city_count',function(){
const result = count1;
expect(result).to.equal(21);
});
});