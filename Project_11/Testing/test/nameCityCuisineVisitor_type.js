var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('LTI',['restopedia']);

var type;
describe('Testing type',function(){

	before(function (done){
        db.restopedia.aggregate([ 
            { $match: {Name:"Es Bembelsche, Strausswirtschaft Dey",City:"Ober-Moerlen",Cuisine:"Scotish", "Good for(suitable)":"Non Vegetarian"} },     
            { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },            
            { $sort: {Rating:-1} }],              
            function(err, res){           
                type=typeof res[0].Rating;
				done(); 
            }     
         );
	});

	it('by type',function(){
		expect(type).to.equal("number");
	});
});