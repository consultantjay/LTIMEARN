var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);

var noOfDocuments = 0
var noOfFields    = 0
var typeOffields= ""
var fieldsName= ""
describe('1.1 search city categories',function(){
	before(function (done){
  db.yelp.aggregate([
                    {$match:{categories:/.*burger.*/i}},
                    {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1,review_count:1}}]
                    ,function(err,res){
                         noOfDocuments  = res.length
                         noOfFields     = Object.keys(res[0]).length
                         typeOfFields  = typeof res[0].name
                         fieldsName    = res[0].name
                         done()
                       })

		});

	it('Count  : should fetch 144 documents',function(){
		const result = noOfDocuments
		expect(result).to.equal(144)
	})

  it('Length : should fetch 8 fields',function(){
		const result = noOfFields
		expect(result).to.equal(8)
	})

  it('Type   : fields name should be of type string',function(){
		const result = typeOfFields
		expect(result).to.equal('string')
	})

  it('Value  : fields name should be equal to Brick House Tavern + Tap',function(){
		const result = fieldsName
		expect(result).to.equal('"Brick House Tavern + Tap"')
	})

});
