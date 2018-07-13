1.search hotel on the basis of property name:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
db.cleartrip.find({property_name:"Hotel Jivan Jyoti"},{_id:0},
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
2.search hotel on the basis of rating:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
db.cleartrip.find({rating:1},
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
3. search on the basis of rating and city:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
4.search hotel on the basis of city:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
db.cleartrip.find({city:"Jodhpur"},
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
5.search hotel on the basis of room type:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
db.cleartrip.find({room_type:"Double Room"},
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
6. Search hotel on the basis of city and hotel name:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
7.search on the basis of room type and city:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
8.search on the basis of property name and room type:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
9.search on the basis of property name , room type and city:-
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
10. search on the basis of property name,room type,city and rating
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
11. search on the basis of property name and rating
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
12. search on the basis of city and rating
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
13. search on the basis of room type and rating
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
14. search on the basis of property name, room type and rating
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
15. search on the basis of property name, city and rating
var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
var val_count=0;
describe('TestMongoDB',function(){
before(function(done){
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
function(err,res){
val_count = Object.keys(res[0]).length;
done(); 
});
});
it('Rating projection',function(){
expect(val_count).to.equal(2);
});
});
-----------------------------------------------------------------------------
