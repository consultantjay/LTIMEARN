var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('LTI',['restopedia']);

var count = 0;
describe('Testing count of search by country, city and cuisine',function(){

	before(function (done){
        db.restopedia.aggregate([ 
            { $match: {Country:"Germany",City:"Ober-Moerlen",Cuisine:"Scotish"} },     
            { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },            
            { $sort: {Rating:-1} }],              
            function(err, res){           
                count=res.length;
				done(); 
            }     
         );
	});

	it('by "search by country, city & cuisine" count',function(){
		const result = count;
		expect(result).to.equal(1);
	});
});