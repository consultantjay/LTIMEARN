var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);

var noOfDocuments = 0
var noOfFields    = 0
var typeOfProduct= ""
var productName= ""
describe('1.3 search All',function(){
	before(function (done){
  db.yelp.aggregate([
                    {$match:{}},
                    {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1,review_count:1,categories:1}}]
                    ,function(err,res){
                         noOfDocuments  = res.length
                         noOfFields     = Object.keys(res[0]).length
                         typeOfProduct  = typeof res[0].city
                         productName    = res[0].city
                         done()
                       })

		});

	it('Count  : should fetch 5499 documents',function(){
		const result = noOfDocuments
		expect(result).to.equal(5499)
	})

  it('Length : should fetch 9 fields',function(){
		const result = noOfFields
		expect(result).to.equal(9)
	})

  it('Type   : product name should be of type string',function(){
		const result = typeOfProduct
		expect(result).to.equal('string')
	})

  it('Value  : product name should be equal to Tempe',function(){
		const result = productName
		expect(result).to.equal("Tempe")
	})

});
