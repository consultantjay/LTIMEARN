//1.search hotel on the basis of property name:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.find({property_name:"Hotel Jivan Jyoti"},{_id:0})
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//2.search hotel on the basis of rating:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.find({rating:1}).count(),
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//3. search on the basis of rating and city:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{city:	/Jodhpur/}
	,	
	{rating:2}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------

//4.Search on the basis of city
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.find({city:"Jodhpur"},
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//5.search hotel on the basis of room_type:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.find({room_type:"Double Room"},
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//6.search hotel on the basis of rating:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.aggregate([{$match:{rating:2}}],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//7.Search hotel on the basis of city and hotel name:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{city:	/Jodhpur/	}
	,	
	{property_name:/Mohan Niwas/}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//8.search on the basis of room type and city:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{city:/Jodhpur/
	}
	,	
	{room_type:"Double Room"}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//9.search on the basis of property name and room type:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{property_name:/Mohan Niwas/
	}
	,	
	{room_type:"Double Room"}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//10. search on the basis of property name , room type and city:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{property_name:/Mohan Niwas/
	}
	,	
	{room_type:/Double Room/}
	,
	{City:"Jodhpur"}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//11. search on the basis of property name,room_type,city and rating:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{property_name:/Mohan Niwas/
	}
	,	
	{room_type:/Double Room/}
	,
	{City:"Jodhpur"},
	{rating:1}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//12. search on the basis of property_name and rating
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
	db.cleartrip.aggregate([
{$match:

{
	$and:
	[{property_name:/Mohan Niwas/
	}
	,	
	{rating:1}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//13. search on the basis of room type and rating
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
	db.cleartrip.aggregate([
{$match:

{
	$and:
	[{city:/Jodhpur/
	}
	,	
	{rating:2}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//14. search on the basis of room type and rating
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
	db.cleartrip.aggregate([
{$match:

{
	$and:
	[{rating:2
	}
	,	
	{room_type:"Double Room"}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//15. search on the basis of room type and property_name
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
	db.cleartrip.aggregate([
{$match:

{
	$and:
	[{property_name:/Mohan Niwas/
	}
	,	
	{room_type:"Double Room"},
	{rating:2}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
----------------------------------------------------------------
//16. search on the basis of property name, city and rating:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var value;
describe('TestMongoDB',function(){
    before(function (done){
db.cleartrip.aggregate([
{$match:

{
	$and:
	[{property_name:/Mohan Niwas/
	}
	,	
	{city:"Jodhpur"},
	{rating:2}
	]
	}
	},
	{$project:{_id:0,property_name:1,room_type:1}}
	],
function (err,res){ 
            value=res[0].city;
done();
});
});
it('Value by rating',function(){
        const result = value;
        expect(result).to.equal("Delhi");
    });
});
