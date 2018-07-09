/********************************************sorting from high to low rating(stars)****************************************************/

//1. search by categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal = /.*burger.*/i
      db.yelp.aggregate([
                        {$match:{categories:categoriesVal}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//2. search by city

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var cityVal = "Phoenix"
      db.yelp.aggregate([
                        {$match:{city:cityVal}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//3. search by city and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*food.*/i;
      var cityVal = "Phoenix";
      db.yelp.aggregate([
                        {$match:{$and:[{city:cityVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//4. search by city and keyword

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal = /.*burger.*/i;
      var nameVal = /.*Salon.*/i;
      var cityVal = "Phoenix";
      db.yelp.aggregate([
                        {$match:{$and:[{city:cityVal},{$or:[{name:nameVal},{categories:categoriesVal}]}]}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//5. search by city and state

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var cityVal = "Phoenix";
      var stateVal = "NC";
      db.yelp.aggregate([
                        {$match:{$and:[{state:stateVal},{city:cityVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//6. search by keyword

        var mongojs = require('mongojs');
        var db = mongojs('YELP',['yelp']);
        var nameVal = /.*Salon.*/i;
        var categoriesVal = /.*hair.*/i;
        db.yelp.aggregate([
                          {$match:{$or:[{name:nameVal},{categories:categoriesVal}]}},
                          {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                          {$sort:{stars:-1}}],
                          function(err,res){
                          console.log(res);
                          });

//7. search by keyword and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal= /.*hair.*/i;
      var nameVal = /.*Salon.*/i;
      db.yelp.aggregate([
                        {$match:{$and:[{categories:categoriesVal},{$or:[{name:nameVal},{categories:categoriesVal}]}]}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//8. search by keyword , city and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var nameVal = /.*Salon.*/i;
      var cityVal = "Phoenix";
      db.yelp.aggregate([
                        {$match:{$and:[{$or:[{name:nameVal},{categories:categoriesVal}]},{city:cityVal},{categories:/.*hair.*/i}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//9. search by keyword, state and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var nameVal = /.*Salon.*/i;
      var stateVal = "AZ";
      db.yelp.aggregate([
                        {$match:{$and:[{$or:[{name:nameVal},{categories:categoriesVal}]},{state:stateVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//10. search by keyword, state and City

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var cityVal = "Phoenix";
      var nameVal = /.*Salon.*/i;
      var stateVal = "AZ"
      db.yelp.aggregate([
                        {$match:{$and:[{$or:[{name:nameVal},{categories:categoriesVal}]},{state:stateVal},{city:cityVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//11. search by keyword, state, city and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var stateVal = "NC";
      var nameVal = /.*hair.*/i;
      var cityVal = "Phoenix";
      db.yelp.aggregate([
                        {$match:{$and:[{$or:[{name:nameVal},{categories:categoriesVal}]},{state:stateVal},{city:cityVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//12. search by state

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var stateVal = "AZ";
      db.yelp.aggregate([
                        {$match:{state:stateVal}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//13. search by state,city and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var stateVal = "NC";
      var cityVal = "Phoenix";
      db.yelp.aggregate([
                        {$match:{$and:[{state:stateVal},{city:cityVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//14. search by state and keyword

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal = /.*burger.*/i;
      var nameVal = /.*Salon.*/i;
      var stateVal = "AZ";
      db.yelp.aggregate([
                        {$match:{$and:[{state:stateVal},{$or:[{name:nameVal},{categories:categoriesVal}]}]}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:-1}}]
                        ,function(err,res){
                        console.log(res);
                        });

//15. search by categories and state

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal= /.*food.*/i;
      var stateVal = "NC";
      db.yelp.aggregate([
                        {$match:{$and:[{state:stateVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });

//16. search by no filter

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      db.yelp.aggregate([
                        {$match:{}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:-1}}],
                        function(err,res){
                        console.log(res);
                        });


/***************************************sorting from low to high rating(stars)*******************************************************/

//1. search by categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal = /.*burger.*/i
      db.yelp.aggregate([
                        {$match:{categories:categoriesVal}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//2. search by city

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var cityVal = "Phoenix"
      db.yelp.aggregate([
                        {$match:{city:cityVal}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//3. search by city and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*food.*/i;
      var cityVal = "Phoenix";
      db.yelp.aggregate([
                        {$match:{$and:[{city:cityVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//4. search by city and keyword

        var mongojs = require('mongojs');
        var db = mongojs('YELP',['yelp']);
        var categoriesVal = /.*burger.*/i;
        var nameVal = /.*Salon.*/i;
        var cityVal = "Phoenix";
        db.yelp.aggregate([
                           {$match:{$and:[{city:cityVal},{$or:[{name:nameVal},{categories:categoriesVal}]}]}},
                           {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                           {$sort:{stars:1}}]
                            ,function(err,res){
                            console.log(res);
                            });

//5. search by city and state

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var cityVal = "Phoenix";
      var stateVal = "NC";
      db.yelp.aggregate([
                        {$match:{$and:[{state:stateVal},{city:cityVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//6. search by keyword

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var nameVal = /.*Salon.*/i;
      var categoriesVal = /.*hair.*/i;
      db.yelp.aggregate([
                        {$match:{$or:[{name:nameVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//7. search by keyword and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal= /.*hair.*/i;
      var nameVal = /.*Salon.*/i;
      db.yelp.aggregate([
                        {$match:{$and:[{categories:categoriesVal},{$or:[{name:nameVal},{categories:categoriesVal}]}]}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//8. search by keyword , city and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var nameVal = /.*Salon.*/i;
      var cityVal = "Phoenix";
      db.yelp.aggregate([
                        {$match:{$and:[{$or:[{name:nameVal},{categories:categoriesVal}]},{city:cityVal},{categories:/.*hair.*/i}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//9. search by keyword, state and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var nameVal = /.*Salon.*/i;
      var stateVal = "AZ";
      db.yelp.aggregate([
                        {$match:{$and:[{$or:[{name:nameVal},{categories:categoriesVal}]},{state:stateVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//10. search by keyword, state and City

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var cityVal = "Phoenix";
      var nameVal = /.*Salon.*/i;
      var stateVal = "AZ"
      db.yelp.aggregate([
                        {$match:{$and:[{$or:[{name:nameVal},{categories:categoriesVal}]},{state:stateVal},{city:cityVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//11. search by keyword, state, city and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var stateVal = "NC";
      var nameVal = /.*hair.*/i;
      var cityVal = "Phoenix";
      db.yelp.aggregate([
                        {$match:{$and:[{$or:[{name:nameVal},{categories:categoriesVal}]},{state:stateVal},{city:cityVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//12. search by state

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var stateVal = "AZ";
       db.yelp.aggregate([
                         {$match:{state:stateVal}},
                         {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                         {$sort:{stars:1}}],
                         function(err,res){
                          console.log(res);
                          });

//13. search by state,city and categories

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal =/.*hair.*/i;
      var stateVal = "NC";
      var cityVal = "Phoenix";
      db.yelp.aggregate([
                        {$match:{$and:[{state:stateVal},{city:cityVal},{categories:categoriesVal}]}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//14. search by state and keyword

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      var categoriesVal = /.*burger.*/i;
      var nameVal = /.*Salon.*/i;
      var stateVal = "AZ";
      db.yelp.aggregate([
                        {$match:{$and:[{state:stateVal},{$or:[{name:nameVal},{categories:categoriesVal}]}]}},
                        {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });

//15. search by categories and state

        var mongojs = require('mongojs');
        var db = mongojs('YELP',['yelp']);
        var categoriesVal= /.*food.*/i;
        var stateVal = "NC";
        db.yelp.aggregate([
                          {$match:{$and:[{state:stateVal},{categories:categoriesVal}]}},
                          {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                          {$sort:{stars:1}}],
                          function(err,res){
                          console.log(res);
                          });

//16. search by no filter

      var mongojs = require('mongojs');
      var db = mongojs('YELP',['yelp']);
      db.yelp.aggregate([
                        {$match:{}},
                        {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}},
                        {$sort:{stars:1}}],
                        function(err,res){
                        console.log(res);
                        });
