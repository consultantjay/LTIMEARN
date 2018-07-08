var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('amazon',['toys']);

var noOfDocuments = 0
var noOfFields    = 0
var typeOfProduct
var productName
describe('2. Search by product',function(){
	before(function (done){
    			const key=  new RegExp('.*'+"hornby"+'.*','i')
							db.toys.find(
									      {product_name: key},
									      {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
									      function(err,res){
												noOfDocuments  = res.length
												noOfFields     = Object.keys(res[0]).length
												typeOfProduct  = typeof res[0].product_name
												productName    = res[0].product_name
											  done()
									    }
							)
		});

	it('Count  : should fetch 85 documents',function(){
		const result = noOfDocuments
		expect(result).to.equal(85)
	})

  it('Length : should fetch 4 fields',function(){
		const result = noOfFields
		expect(result).to.equal(4)
	})

  it('Type   : product name should be of type string',function(){
		const result = typeOfProduct
		expect(result).to.equal('string')
	})

  it('Value  : product name should be equal to HORNBY',function(){
		const result = productName.split(" ")[0]
		expect(result).to.equal("HORNBY")
	})

});
