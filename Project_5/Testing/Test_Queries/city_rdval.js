var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hotel']);

var count = "";
describe('TestMongoDB1',function(){

before(function (done){
db.hotel.aggregate([{$match:{$and:[{city:"manali"}]}},
{$project:{room_type:1,property_name:1,hotel_star_rating:1,city:1,_id:0}},
{$sort:{hotel_star_rating:-1}}], 
function (err,res){ 
//console.log(res.length); 
count=res[0].property_name;
console.log(count);
done();
});
});

it('by city_rdval',function(){
const result = count;
expect(result).to.equal("Club Mahindra Manali");
});
});
