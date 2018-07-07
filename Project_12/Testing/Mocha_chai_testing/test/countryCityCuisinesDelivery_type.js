var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Zomato',['zomato_code1']);
var type
describe('TestMongoDB',function(){
    before(function (done){
db.zomato_code1.find({"Country_code.0.Country":"India", "City":"Pune","Cuisines":"North Indian","Has_Online_Delivery":"Yes"},
function (err,res){
            type=typeof res[0].Restaurant_Name;
            done();
            });
            });
it('type by country, city',function(){
        const result = type;
        expect(result).to.equal("string");
    });
});
