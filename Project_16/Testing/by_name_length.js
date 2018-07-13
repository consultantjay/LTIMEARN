var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var val_count=0;

describe('hotel name by projection',function(){
before(function(done){
  db.trip.aggregate([{$match:{property_name:"Luxor Park"}},{$project:{_id:0}}],function(err,res){
val_count = Object.keys(res[0]).length;
      //console.log(city_count);
done();
});
});

it('hotel name by projection',function(){
expect(val_count).to.equal(18);
});
});



