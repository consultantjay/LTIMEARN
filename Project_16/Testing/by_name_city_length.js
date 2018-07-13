var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['trip']);

var val_count=0;

describe('city and name by projection',function(){
before(function(done){
    db.trip.aggregate([{$match:{$and:[{property_name:"Luxor Park"},{city:"Hyderabad"}]}},{$project:{area:1,property_name:1,_id:0,city:1}}],function(err,res){
val_count = Object.keys(res[0]).length;
      //console.log(city_count);
done();
});
});

it('city and name by projection',function(){
expect(val_count).to.equal(3);
});
});



