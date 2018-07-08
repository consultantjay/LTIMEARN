var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('amazon',['toys']);

var noOfDocuments = 0
var noOfFields    = 0
var typeOfProduct
var productName
describe('1 Home Grid',function(){
	before(function (done){
      db.toys.find(
                 {},
                 {_id:0,uniq_id:1,product_name:1,price:1}
               ).limit(9,function(err,res){
                         noOfDocuments  = res.length
                         noOfFields     = Object.keys(res[0]).length
                         typeOfProduct  = typeof res[0].product_name
                         productName    = res[0].product_name
                         done()
                       })

		});

	it('Count  : should fetch 9 documents',function(){
		const result = noOfDocuments
		expect(result).to.equal(9)
	})

  it('Length : should fetch 3 fields',function(){
		const result = noOfFields
		expect(result).to.equal(3)
	})

  it('Type   : product name should be of type string',function(){
		const result = typeOfProduct
		expect(result).to.equal('string')
	})

  it('Value  : product name should be equal to HORNBY',function(){
    var array = productName.split(" ")
		const result = array[0]
		expect(result).to.equal("HORNBY")
	})

});
