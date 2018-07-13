var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['docs']);

var count = 0;
describe('Testing MongoDB',function(){

               before(function (done){
                  db.docs.find({City:"Canaan"}, function (err,res){
                  console.log(res.length);
                  count=res.length;
                  done();
                  });

              it('by City count',function(){
                    const result = count;
                    expect(result).to.equal(190);
              })
              })

})
