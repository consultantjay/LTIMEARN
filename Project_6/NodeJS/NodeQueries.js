//Database Name: 'Project'
//Collection Name: 'col'


//1. SEARCH ALL

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find(function(err,res){
               console.log(res);
             }
           );


//---------------------------------------------------------------------------------------------------

//2. SEARCH ALL AND DISPLAY REQUIRED FIELDS ONLY

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({},
            {Address:1,City:1,Country:1,"Year Built":1,Price:1},
            function(err,res)
            {
              console.log(res);
            }
           );


//-----------------------------------------------------------------------------------------------------

//3.SEARCH BY COUNTY

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({County:"NH-Grafton"},
            {Address:1,City:1,County:1,"Year Built":1,Price:1},
            function(err,res)
            {
              console.log(res);
            }
           );


//------------------------------------------------------------------------------------------------------

//4.SEARCH BY CITY

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({City:"Lebanon"},
            {Address:1,City:1,County:1,"Year Built":1,Price:1},
            function(err,res)
            {
              console.log(res);
            }
          );


//-----------------------------------------------------------------------------------------------------

//5.SEARCH BY PRICE

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({$and:[
                   {Price:{$gt:"$150000"}},
                   {Price:{$lt:"$200000"}}
                  ]
             },
             {Address:1,City:1,County:1,"Year Built":1,Price:1},
             function(err,res)
             {
               console.log(res);
             }
           );


//------------------------------------------------------------------------------------------------------

//6.SEARCH BY BEDROOMS & BATHROOMS

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({Bedrooms:2, Bathrooms:2},{Address:1,City:1,County:1,"Year Built":1,Price:1},
              function(err,res){
              console.log(res);
           });

//------------------------------------------------------------------------------------------------------

//7.SEARCH BY COUNTY AND CITY

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({County:"NH-Grafton",City:"Canaan"},{Address:1,City:1,County:1,"Year Built":1,Price:1},
               function(err,res){
               console.log(res);
            });


//-----------------------------------------------------------------------------------------------------

//8.SEARCH BY COUNTY AND PRICE

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({County:"NH-Grafton",Price: { $gt:"$150000", $lt:"$200000"} },
            {Address:1,City:1,County:1,"Year Built":1,Price:1},
            function(err,res)
              {
                 console.log(res);
              }
            );

//-----------------------------------------------------------------------------------------------------

//9.SEARCH BY CITY & NO. OF BEDROOMS

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({Bedrooms:2, City:"Cannan"},
            {Address:1,City:1,County:1,"Year Built":1,Price:1},
            function(err,res)
             {
                console.log(res);
             }
           );


//------------------------------------------------------------------------------------------------------

//10.SEARCH BY COUNTY, CITY & PRICE

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({County:"NH-Grafton",City:"Canaan",Price: { $gt:"$150000", $lt:"$200000"}},
            {Address:1,City:1,Country:1,"Year Built":1,Price:1},
             function(err,res)
             {
               console.log(res);
             }
           );

//-----------------------------------------------------------------------------------------------------

//11.SEARCH BY COUNTY, CITY, PRICE & YEAR BUILT

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.find({County:"NH-Grafton",City:"Canaan",Price: { $gt:"$150000", $lt:"$200000"},"Year Built":1989},                        {Address:1,City:1,Country:1,"Year Built":1,Price:1},
            function(err,res){
            console.log(res);
            }
           );

//-----------------------------------------------------------------------------------------------------

//12.SEARCH ALL & SORT BY YEAR BUILT(NEWEST to OLDEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.aggregate([
                    {$match:{}},
                    {$project:{Address:1,City:1,Country:1,"Year Built":1,Price:1}},
                    {$sort:{'Year Built':-1}}
                 ],function(err,res){
console.log(res);
});

//------------------------------------------------------------------------------------------------------

//13.SEARCH ALL & SORT BY PRICE(LOW to HIGH)

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.aggregate([
                    {$match:{}},
                    {$project:{Address:1,City:1,Country:1,'Year Built':1,Price:1}},
                    {$sort:{Price:1}}
                 ],function(err,res){
console.log(res);
});

//---------------------------------------------------------------------------------------------------------

//14.SEARCH BY COUNTY, CITY & SORT BY YEAR BUILT(NEWEST)

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.aggregate([{$match:{County:"NH-Grafton", City:"Canaan"}},
                  {$project:{Address:1,City:1,Country:1,'Year Built':1,Price:1}},
                  {$sort:{'Year Built':-1}}
                 ],function(err,res)
                   {
                     console.log(res);
                   }
                );


//----------------------------------------------------------------------------------------------------------

//15.SEARCH BY COUNTY,CITY & SORT BY PRICE

var mongojs=require('mongojs');
var db = mongojs('Project',['col'])
db.col.aggregate([{$match:{County:"NH-Grafton", City:"Canaan"}},
                  {$project:{Address:1,City:1,Country:1,"Year Built":1,Price:1}},
                  {$sort:{Price:1}}
                 ],function(err,res)
                   {
                     console.log(res);
                   }
                );


//---------------------------------------------------------------------------------------------------------
