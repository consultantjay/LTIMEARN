var expect=require("chai").expect;
var mongo=require("mongojs");
var db=mongo('Jobs',['jobs']);


var count=0;



describe('Test count using find query  for joblocation_address',function(){
before(function(done){
console.log('chla bhi hai yeh');
db.jobs.find({"joblocation_address":"Mumbai"},function(error,response){
count=response.length;
console.log(count);
done();
})
});
it('Testing count for {joblocation:Mumbai}',function(){
expect(count).to.equal(2348);
});

});


describe('Test count using find query {industry:ITES} for ',function(){

before(function(done){
db.jobs.find({"industry":"ITES"},function(error,response){
count=response.length;
console.log(count);
done();
})
});

it('Testing count for {industry:ITES}',function(){
expect(count).to.equal(0);
});

});

describe('Test count using find query {skills:ITES} for ',function(){

before(function(done){
db.jobs.find({"skills":"ITES"},function(error,response){
count=response.length;
console.log(count);
done();
})
});

it('Testing count for {skills:ITES}',function(){
expect(count).to.equal(1640);
});

});

describe('Test count using find query {experience:0 - 1 yrs} for ',function(){

before(function(done){
db.jobs.find({"experience":"0 - 1 yrs"},function(error,response){
count=response.length;
console.log(count);
done();
})
});

it('Testing count for {experience:0 - 1 yrs}',function(){
expect(count).to.equal(509);
});

});



describe('Test count using find query {jobtitle:Product Manager} for ',function(){

before(function(done){
db.jobs.find({jobtitle:'Product Manager'},function(error,response){
count=response.length;
console.log(count);
done();
})
});

it('Testing count for {jobtitle:Product Manager}',function(){
expect(count).to.equal(25);
});

});


describe('Test count using find query {site_name:} for ',function(){

before(function(done){
db.jobs.find({"site_name":""},function(error,response){
count=response.length;
console.log(count);
done();
})
});

it('Testing count for {site_name:}',function(){
expect(count).to.equal(18013);
});

});



describe('Test count using find query {company:Magna Infotech Pvt Ltd} for ',function(){

before(function(done){
db.jobs.find({"company":"Magna Infotech Pvt Ltd"},function(error,response){
count=response.length;
console.log(count);
done();
})
});

it('Testing count for {company:Magna Infotech Pvt Ltd}',function(){
expect(count).to.equal(5);
});

});



describe('Test count using find query {education:} for ',function(){

before(function(done){
db.jobs.find({"education":""},function(error,response){
count=response.length;
console.log(count);
done();
})
});

it('Testing count for {education:}',function(){
expect(count).to.equal(1996);
});

});





describe('Test count using find query {noofpositions:3} for ',function(){
before(function(done){
db.jobs.find({"noofpositions":3},function(error,response){
count=response.length;
console.log(count);
done();
})
});

it('Testing count for {noofpositions:3}',function(){
expect(count).to.equal(509);
});

});




describe('Test count using find query  for joblocation_address and company',function(){
before(function(done){
db.jobs.find({"joblocation_address":"Mumbai","company":"Tcs"},function(error,response){
count=response.length;
console.log(count);
done();
})
});
it('Testing count for {joblocation:Mumbai,company:Tcs}',function(){
console.log('chla bhi hai yeh');
expect(count).to.equal(0);
});

});

