var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Zomato',['zomato_code1']);
var type
describe('TestMongoDB',function(){
    before(function (done){
db.zomato_code1.find({"Country_code.0.Country":"India", "City":"Pune","Restaurant_Name":"Mineority By Saby"},
function (err,res){
            type=typeof res[0].Restaurant_Name;
            done();
            });
            });
it('type by country, city, name',function(){
        const result = type;
        expect(result).to.equal("string");
    });
});