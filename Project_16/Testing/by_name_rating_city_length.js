var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var val_count=0;

describe('rating, city and name by projection',function(){
before(function(done){
  db.trip.aggregate([{$match:{$and:[{city:"Hyderabad"},{hotel_star_rating:1},{property_name:"Luxor Park"}]}},{$project:{_id:0,hotel_overview:1,property_name:1}}],function(err,res){
val_count = Object.keys(res[0]).length;
      //console.log(city_count);
done();
});
});

it('rating, city and name by projection',function(){
expect(val_count).to.equal(2);
});
});



