var expect=require("chai").expect;
var mongo=require("mongojs");
var db=mongo('Jobs',['jobs']);


var value;



describe('Test value using aggregate query  for joblocation_address:Mumabai and limit:1 ',function(){
before(function(done){
console.log('chla bhi hai yeh');
db.jobs.aggregate([{$match:{"joblocation_address":"Mumbai"}},{$limit:1},{$project:{"company":1,_id:0}}],function(error,response){
value=response[0].company;
done();
})
});
it('Testing value ',function(){
expect(value).to.equal("HRD House");
});

});

describe('Test value using aggregate query  for company:Indian Institute of Technology Bombay and limit:1 ',function(){
    before(function(done){
    console.log('chla bhi hai yeh');
    db.jobs.aggregate([{$match:{"company":"Indian Institute of Technology Bombay"}},{$limit:1},{$project:{"joblocation_address":1,_id:0}}],function(error,response){
    value=response[0].joblocation_address;
    done();
    })
    });
    it('Testing value',function(){
    expect(value).to.equal("Mumbai");
    });
    
    });
    describe('Test count using aggregate query  for SKILLS',function(){
        before(function(done){
        
        db.jobs.aggregate([{$match:{"skills":"ITES"}},{$limit:1},{$project:{"company":1,_id:0}}],function(error,response){
        value=response[0].company;
        done();
        })
        });
        it('Testing value for {joblocation:Mumbai}',function(){
        expect(value).to.equal("MM Media Pvt Ltd");
        });
        
        });