//1.Search all

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.find(function(err,res){
console.log(res);});

//2. Search all by using projections

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.find({},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,res){
            console.log(res);});

//3.Search by zonal_area

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.find({zonal_area:"SOUTHEAST-US"},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},
            function(err,res){
            console.log(res);});

//4.Search by city

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.find({city:"Leland"},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},
            function(err,res){
            console.log(res);});

//5.Search by name

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.find({name:"McDonald's"},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},
            function(err,res){
            console.log(res);});

//6.Search by zonal_area and city

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.find({city:"Leland",zonal_area:"SOUTHEAST-US"},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},
            function(err,res){
            console.log(res);});

//7.Search by zonal_area and name

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.find({zonal_area:"SOUTHEAST-US",name:"McDonald's"},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},
            function(err,res){
            console.log(res);});

//8.Search by city and name

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.find({name:"McDonald's",city:"Leland"},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},
            function(err,res){
            console.log(res);});

//9.Search by zonal_area,city and name

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.find({zonal_area:"SOUTHEAST-US",city:"Leland",name:"McDonald's"},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},
            function(err,res){
            console.log(res);});

//10.Search all by using projections
//and sort by ratings

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.aggregate([{$match:{}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,res){
                  console.log(res);});

//11.Search by zonal_area
//and sort by ratings

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.aggregate([{$match:{zonal_area:"SOUTHEAST-US"}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,res){
                  console.log(res);});

//12.Search by city
//and sort by ratings

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.aggregate([{$match:{city:"Leland"}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],
                 function(err,res){
                  console.log(res);});

//13.Search by name
//and sort by ratings

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.aggregate([{$match:{name:"McDonald's"}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],
                 function(err,res){
                  console.log(res);});

//14.Search by zonal_area and city
//and sort by ratings

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.aggregate([{$match:{city:"Leland",zonal_area:"SOUTHEAST-US"}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],
                  function(err,res){
                  console.log(res);});


//15.Search by zonal_area and name
//and sort by ratings

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.aggregate([{$match:{zonal_area:"SOUTHEAST-US",name:"McDonald's"}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],
                 function(err,res){
                 console.log(res);});

//16.Search by city and name
//and sort by ratings

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.aggregate([{$match:{name:"McDonald's",city:"Leland"}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],
                  function(err,res){
                  console.log(res);});

//17.Search by zonal_area,city 
//and name and sort by ratings

var mongojs=require('mongojs');
var db = mongojs('Pro',['deb'])
db.deb.aggregate([{$match:{zonal_area:"SOUTHEAST-US",city:"Leland",name:"McDonald's"}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],
                 function(err,res){
                 console.log(res);});
