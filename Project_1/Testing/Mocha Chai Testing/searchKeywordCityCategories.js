var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);

var noOfDocuments = 0
var noOfFields    = 0
var typeOffields= ""
var fieldsName= ""
describe('1.9 search keyword city categories ',function(){
	before(function (done){
  db.yelp.aggregate([
                    {$match:{$and:[{$or:[{name:/.*Salon.*/i},{categories:/.*hair.*/i}]},{city:"Phoenix"},{categories:/.*hair.*/i}]}},
                    {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}}],
                    function(err,res){
                         noOfDocuments  = res.length
                         noOfFields     = Object.keys(res[0]).length
                         typeOfFields  = typeof res[0].name
                         fieldsName    = res[0].state
                         done()
                       })

		});

	it('Count  : should fetch 20 documents',function(){
		const result = noOfDocuments
		expect(result).to.equal(20)
	})

  it('Length : should fetch 6 fields',function(){
		const result = noOfFields
		expect(result).to.equal(6)
	})

  it('Type   : fields name should be of type string',function(){
		const result = typeOfFields
		expect(result).to.equal('string')
	})

  it('Value  : fields name should be equal to AZ',function(){
		const result = fieldsName
		expect(result).to.equal('AZ')
	})

});
