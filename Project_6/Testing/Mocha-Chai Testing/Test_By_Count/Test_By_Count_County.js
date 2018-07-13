var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['docs']);

var count = 0;
describe('Testing MongoDB',function(){

               before(function (done){
                  db.docs.find({County:"NH-Grafton"}, function (err,res){
                  console.log(res.length);
                  count=res.length;
                  done();
               });
});

             it('by County count',function(){
             const result = count;
             expect(result).to.equal(2086);
             });
             });
