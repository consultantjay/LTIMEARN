var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Zomato',['zomato_code1']);


describe('Value Mongo',function() {

function city() {
  var count=0
  before(function (done) {
    db.zomato_code1.find({"City":"Pune"},function(err,res) {
      // console.log(res)
      count=res[0].Restaurant_Name
      // console.log(count);
      done();
    })
  })
    it('value of city',function () {

      expect(count).to.equal("The Urban Foundry")
    })
  }
// ---------------------------------------------------------
function country() {

var count=0
before(function (done) {
db.zomato_code1.find({"Country_code.0.Country":"India"},function(err,res) {
    // console.log(res)
    count=res[0].Restaurant_Name
    // console.log(count);
    done();
  })
})
  it('value of country',function () {

    expect(count).to.equal('Rangrezz Restaurant')
  })
}
// -----------------------------------------------------------
function countrycity() {

var count=0
before(function (done) {
db.zomato_code1.find({"Country_code.0.Country":"India", "City":"Pune"},function(err,res) {
    // console.log(res)
    count=res[0].Restaurant_Name
    // console.log(count);
    done();
  })
})
  it('country city value',function () {

    expect(count).to.equal('The Urban Foundry')
  })
}
// -----------------------------------------------------------
function countrycitycuisines() {

var count=0
before(function (done) {
db.zomato_code1.find({"Country_code.0.Country":"India", "City":"Pune","Cuisines":"North Indian"},function(err,res) {
    // console.log(res)
    count=res[0].Restaurant_Name
    // console.log(count);
    done();
  })
})
  it('country city cuisines value',function () {

    expect(count).to.equal('The Urban Foundry')
  })
}
// -----------------------------------------------------------
function countrycitycuisinesdelivery() {

var count=0
before(function (done) {
db.zomato_code1.find({"Country_code.0.Country":"India","City":"Pune","Cuisines":"North Indian","Has_Online_Delivery":"Yes"},function(err,res) {
    // console.log(res)
    count=res[0].Restaurant_Name
    // console.log(count);
    done();
  })
})
  it('country city cuisine delivery value',function () {

    expect(count).to.equal('Blue Water')
  })
}
// -----------------------------------------------------------
function countrycitydelivery() {

var count=0
before(function (done) {
db.zomato_code1.find({"Country_code.0.Country":"India","City":"Pune","Has_Online_Delivery":"Yes"},function(err,res) {
    // console.log(res)
    count=res[0].Restaurant_Name
    // console.log(count);
    done();
  })
})
  it('country ciy delivery value',function () {

    expect(count).to.equal('Effingut Brewerkz')
  })
}
// -----------------------------------------------------------
function countrycityname() {

var count=0
before(function (done) {
db.zomato_code1.find({"Country_code.0.Country":"India", "City":"Pune","Restaurant_Name":"Mineority By Saby"},function(err,res) {
    // console.log(res)
    count=res[0].Restaurant_Name
    // console.log(count);
    done();
  })
})
  it('country city name value',function () {

    expect(count).to.equal('Mineority By Saby')
  })
}
// -----------------------------------------------------------
function name() {

var count=0
before(function (done) {
db.zomato_code1.find({"Restaurant_Name":"Tea Villa Cafe"},function(err,res) {
    // console.log(res)
    count=res[0].Restaurant_Name
    // console.log(count);
    done();
  })
})
  it('name value',function () {

    expect(count).to.equal('Tea Villa Cafe')
  })
}
// -----------------------------------------------------------
function namecity() {

var count=0
before(function (done) {
db.zomato_code1.find({"City":"Pune","Restaurant_Name":"Mineority By Saby"},function(err,res) {
    // console.log(res)
    count=res[0].Restaurant_Name
    // console.log(count);
    done();
  })
})
  it('name city value',function () {

    expect(count).to.equal('Mineority By Saby')
  })
}
// -----------------------------------------------------------
function namecountry() {

var count=0
before(function (done) {
db.zomato_code1.find({"Country_code.0.Country":"India","Restaurant_Name":"Mineority By Saby"},function(err,res) {
    // console.log(res)
    count=res[0].Restaurant_Name
    // console.log(count);
    done();
  })
})
  it('name country value',function () {

    expect(count).to.equal('Mineority By Saby')
  })
}


// -----------------------------------------------------------
 city()
 country()
 countrycity()
 countrycitycuisines()
 countrycitycuisinesdelivery()
 countrycitydelivery()
 countrycityname()
 name()
 namecity()
 namecountry()

})
