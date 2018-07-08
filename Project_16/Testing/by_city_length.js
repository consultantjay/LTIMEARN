//Search by city and find no of projections
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var val_count=0;

describe('search by city and find no of projection',function(){
before(function(done){
  db.trip.aggregate([{$match:{$and:[{city:"Udaipur"}]}},{$project:{area:1,property_name:1,_id:0}}],function(err,res){
val_count = Object.keys(res[0]).length;
      //console.log(city_count);
done();
});
});

it('search by city and find no of projection',function(){
expect(val_count).to.equal(2);
});
});



