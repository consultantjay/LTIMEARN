var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('LTI',['restopedia']);

var value;
describe('Testing value',function(){

	before(function (done){
        db.restopedia.aggregate([ 
            { $match: {Name:"Es Bembelsche, Strausswirtschaft Dey",Country:"Germany",City:"Ober-Moerlen"} },     
            { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },            
            { $sort: {Rating:-1} }],              
            function(err, res){           
                value = res[0].Rating;
				done(); 
            }     
         );
	});

	it('by value',function(){
		expect(value).to.equal(5);
	});
});