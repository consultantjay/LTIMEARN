//Database Name: Project
//Collection Name: property


var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['property']);


describe('Projection Length Mongo',function() {
  var count=0
  before(function (done) {
    db.property.find({},
                    {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
                    function(err,res) {
                        // console.log(res)
                        count=Object.keys(res[0]).length
                        // console.log(count);
                        done();
                   })
    })
    it('All',function () {

      expect(count).to.equal(7)
    })
  });

//------------------------------------------------------------------------------------------