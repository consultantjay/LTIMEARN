var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('LTI',['restopedia']);

var count = 0;
describe('Testing length',function(){

	before(function (done){
        db.restopedia.aggregate([ 
            { $match: {City:"Ober-Moerlen",Cuisine:"Scotish"} },     
            { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },            
            { $sort: {Rating:-1} }],              
            function(err, res){           
                count = Object.keys(res[0]).length;
				done(); 
            }     
         );
	});

	it('by "search by city & cuisine" length',function(){
		expect(count).to.equal(8);
	});
});