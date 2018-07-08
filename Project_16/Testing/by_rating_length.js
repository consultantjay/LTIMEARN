var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var val_count=0;

describe('Hotel star rating by length',function(){
before(function(done){
   db.trip.aggregate([{$match:{$and:[{hotel_star_rating:4}]}},{$project:{area:1,property_name:1,_id:0}}],function(err,res){
val_count = Object.keys(res[0]).length;
      //console.log(city_count);
done();
});
});

it('Hotel star rating by length',function(){
expect(val_count).to.equal(2);
});
});



