//Database Name: 'Project'
//Collection Name: 'property'


//1. SEARCH BY ALL

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.find({},
                 {},
                 function(err,res){
                   console.log(res);
                  }
                );


//---------------------------------------------------------------------------------------------------

//2. SEARCH BY COUNTY

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.find({County:"NH-Grafton"},
                 {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1},
                 function(err,res)
                 {
                  console.log(res);
                 }
               );


//-----------------------------------------------------------------------------------------------------

//3.SEARCH BY CITY

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.find({City:"Lebanon"},
                 {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1},
                 function(err,res)
                 {
                  console.log(res);
                 }
                );


//-----------------------------------------------------------------------------------------------------

//4.SEARCH BY PRICE

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.find({$and:[
                        {Price:{$gt:150000}},
                        {Price:{$lt:200000}}
                       ]
                 },
                 {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1},
                 function(err,res)
                 {
                  console.log(res);
                 }
                );

//------------------------------------------------------------------------------------------------------

//5.SEARCH BY COUNTY AND CITY

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.find({County:"NH-Grafton",City:"Canaan"},
                 {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1},
                 function(err,res)
                 {
                  console.log(res);
                 }
                );


//-----------------------------------------------------------------------------------------------------

//6.SEARCH BY COUNTY AND PRICE

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.find({County:"NH-Grafton",Price: { $gt:150000, $lt:200000}},
                 {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1},
                 function(err,res)
                 {
                  console.log(res);
                 }
                );

//-----------------------------------------------------------------------------------------------------

//7.SEARCH BY CITY & PRICE

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.find({City:"Cannan", Price: { $gt:150000, $lt:200000}},
                 {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1},
                 function(err,res)
                 {
                  console.log(res);
                 }
                );


//------------------------------------------------------------------------------------------------------

//8.SEARCH BY COUNTY, CITY & PRICE

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.find({County:"NH-Grafton",City:"Canaan",Price: { $gt:150000, $lt:200000}},
                 {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1},
                 function(err,res)
                 {
                   console.log(res);
                 }
                );

//-----------------------------------------------------------------------------------------------------

//9.SEARCH ALL & SORT BY PRICE(LOW to HIGH)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                       {$match:{}},
                       {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                       {$sort:{Price:1}}
                      ], function(err,res){
                         console.log(res);
                         }
                     );

//-----------------------------------------------------------------------------------------------------

//10.SEARCH ALL & SORT BY YEAR BUILT(NEWEST to OLDEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                       {$match:{}},
                       {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                       {$sort:{Year_Built:-1}}
                      ],function(err,res){
                         console.log(res);
                       }
                     );

//------------------------------------------------------------------------------------------------------

//11.SEARCH BY COUNTY & SORT BY PRICE(LOW to HIGH)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{County:"NH-Grafton"}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Price:1}}
                      ],function(err,res){
                         console.log(res);
                        }
                     );

//---------------------------------------------------------------------------------------------------------

//12.SEARCH BY CITY & SORT BY PRICE(LOW to HIGH)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{City:"Canaan"}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Year_Built:-1}}
                      ],function(err,res)
                       {
                        console.log(res);
                       }
                     );


//----------------------------------------------------------------------------------------------------------

//13.SEARCH BY PRICE & SORT BY PRICE(LOW to HIGH)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                       {$match:{Price: { $gt:150000, $lt:200000}}},
                       {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                       {$sort:{Price:1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//---------------------------------------------------------------------------------------------------------

//14.SEARCH BY COUNTY, CITY & SORT BY PRICE(LOW to HIGH)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{County:"NH-Grafton", City:"Canaan"}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Price:1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );

//------------------------------------------------------------------------------------------------------------

//15.SEARCH BY COUNTY,PRICE & SORT BY PRICE(LOW to HIGH)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{County:"NH-Grafton", Price: { $gt:150000, $lt:200000}}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Price:1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//-----------------------------------------------------------------------------------------------------------

//16.SEARCH BY CITY,PRICE & SORT BY PRICE(LOW to HIGH)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                       {$match:{County:"NH-Grafton", City:"Canaan", Price: { $gt:150000, $lt:200000}}},
                       {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                       {$sort:{Price:1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//----------------------------------------------------------------------------------------------------------

//17.SEARCH BY COUNTY, CITY, PRICE & SORT BY PRICE(LOW TO HIGH)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                       {$match:{County:"NH-Grafton", City:"Canaan", Price: { $gt:150000, $lt:200000}}},
                       {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                       {$sort:{Price:1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//---------------------------------------------------------------------------------------------------------

//18.SEARCH BY COUNTY & SORT BY YEAR BUILT(NEWEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{County:"NH-Grafton"}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Year_Built:-1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//--------------------------------------------------------------------------------------------------------

//19.SEARCH BY CITY & SORT BY YEAR BUILT(NEWEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{City:"Canaan"}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Year_Built:-1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//--------------------------------------------------------------------------------------------------------

//20.SEARCH BY PRICE & SORT BY YEAR BUILT(NEWEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{Price: { $gt:150000, $lt:200000}}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Year_Built:-1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//-------------------------------------------------------------------------------------------------------

//21.SEARCH BY COUNTY, CITY & SORT BY YEAR BUILT(NEWEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{County:"NH-Grafton", City:"Canaan"}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Year_Built:-1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//------------------------------------------------------------------------------------------------------

//22.SEARCH BY COUNTY,PRICE & SORT BY YEAR BUILT(NEWEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{County:"NH-Grafton", Price: { $gt:150000, $lt:200000}}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Year_Built:-1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//------------------------------------------------------------------------------------------------------

//23.SEARCH BY CITY,PRICE & SORT BY YEAR BUILT(NEWEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{City:"Canaan", Price: { $gt:150000, $lt:200000}}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Year_Built:-1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );


//------------------------------------------------------------------------------------------------------

//24.SEARCH BY COUNTY, CITY, PRICE & SORT BY YEAR BUILT(NEWEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['property']);
db.property.aggregate([
                        {$match:{County:"NH-Grafton", City:"Canaan", Price: { $gt:150000, $lt:200000}}},
                        {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,Year_Built:1}},
                        {$sort:{Year_Built:-1}}
                      ],function(err,res)
                        {
                        console.log(res);
                        }
                     );

//------------------------------------------------------------------------------------------------------
