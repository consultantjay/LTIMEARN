var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hotel']);

var val_count=0;

describe('TestMongoDB',function(){
before(function(done){
  db.hotel.find({$and:[{"room_count":3},{"hotel_star_rating":{$gte:3}},{"city":"manali"}]},
		{property_name:1,city:1,state:1},
	function(err,res){
val_count = Object.keys(res[0]).length;
      //console.log(city_count);
done();
});
});

it('Room , Rating and city by projection',function(){
expect(val_count).to.equal(3);
});
});