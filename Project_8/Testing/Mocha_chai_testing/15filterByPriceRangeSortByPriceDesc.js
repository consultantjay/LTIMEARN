var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('amazon',['toys']);

var noOfDocuments = 0
var noOfFields    = 0
var typeOfProduct
var productName
describe('15. filter by price range sort by price descending',function(){
	before(function (done){

				var result = [10,30]
				var order  = -1


				db.toys.aggregate([
														 {$match:
															 							{$and:[
																									 {price: {$gte:parseInt(result[0])}},
																									 {price: {$lte:parseInt(result[1])}},
																									]
																						 }
														 },
														 {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
														 {$sort:{price:order}}
														],
														function(err,res){
															noOfDocuments  = res.length
															noOfFields     = Object.keys(res[0]).length
															typeOfProduct  = typeof res[0].product_name
															productName    = res[0].product_name
														  //console.log(noOfDocuments+"\n"+noOfFields+"\n"+typeOfProduct+"\n"+productName)
															done()
														}
					)




		});

	it('Count  : should fetch 3223 documents',function(){
		const result = noOfDocuments
		expect(result).to.equal(3223)
	})

  it('Length : should fetch 4 fields',function(){
		const result = noOfFields
		expect(result).to.equal(4)
	})

  it('Type   : product name should be of type string',function(){
		const result = typeOfProduct
		expect(result).to.equal('string')
	})

  it('Value  : product name should be equal to Littlest',function(){
		const result = productName.split(" ")[0]
		expect(result).to.equal("Littlest")
	})

});
