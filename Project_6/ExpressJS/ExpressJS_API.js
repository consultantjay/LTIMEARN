//Database Name: 'Project'
//Collection Name: 'property'


var express = require('express');
var app=express();
var mongo=require('mongojs');
var db=mongo('Project',['property']);
app.use(express.static(__dirname));


//1. SEARCH BY ALL


 app.get('/',function(err,res){
   db.property.find({},    
                     {},
                     function(err,docs){
                      res.send(docs);
                     }
                    );
});


//-----------------------------------------------------------------------------------------------------

//2. SEARCH BY COUNTY


app.get('/County/:county',function(req,res){
            db.property.find({County:req.params.county},function(err,docs)
            {
              res.send(docs);
            }
          );
});



//-----------------------------------------------------------------------------------------------------

//3.SEARCH BY CITY

app.get('/City/:city',function(req,res){
            db.property.find({"City":req.params.city},function(err,docs)
            {
              res.send(docs);
            }
          );
});



//------------------------------------------------------------------------------------------------------

//4.SEARCH BY PRICE

app.get('/PriceL/:p1/PriceH/:p2',function(err,res){
  db.property.find({$and:[
                           {Price:{$gt:parseInt(req.params.p1)}},
                           {Price:{$lt:parseInt(req.params.p2)}}
                          ]
                    },
                    {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
                    function(err,docs)
                    {
                    res.send(docs);
                    }
                  );
});



//-----------------------------------------------------------------------------------------------------

//5.SEARCH BY COUNTY AND CITY


app.get('/County/:county/City/:city',function(req,res){
  console.log(req.params.county);
  console.log(req.params.city);
  db.property.find({County:req.params.county,City:req.params.city},
                    {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
                    function(err,docs)
                    {
                    res.send(docs);
                    }
                  );
});


//------------------------------------------------------------------------------------------------------

//6.SEARCH BY COUNTY AND PRICE


app.get('/County/:county/PriceL/:p1/PriceH/:p2',function(req,res){
  console.log(req.params.county);
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));
  db.property.find({County:req.params.county,Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)} },
                    {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
                    function(err,docs)
                    {
                    res.send(docs);
                    }
                  );
});



//------------------------------------------------------------------------------------------------------

//7.SEARCH BY CITY & PRICE


app.get('/City/:city/PriceL/:p1/PriceH/:p2',function(req,res){
  console.log(req.params.city);
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));
  db.property.find({City:req.params.city,Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)} },
                    {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
                    function(err,docs)
                    {
                     res.send(docs);
                    }
                   );
});


//------------------------------------------------------------------------------------------------------

//8.SEARCH BY COUNTY, CITY & PRICE


app.get('/County/:county/City/:city/PriceL/:p1/PriceH/:p2',function(req,res){
  console.log(req.params.county);
  console.log(req.params.city);
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));
  db.property.find({County:req.params.county,City:req.params.city,Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)}},
                    {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
                    function(err,docs)
                    {
                    res.send(docs);
                    }
                   );
});


//-----------------------------------------------------------------------------------------------------

//9. SEARCH ALL & SORT BY PRICE(LOW to HIGH)


app.get('/SortByPrice',function(req,res){

  db.property.aggregate([
                         {$match:{}},
                         {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                         {$sort:{Price:1}}
                        ],
                        function(err,docs)
                        {
                        res.send(docs);
                        });


});


//------------------------------------------------------------------------------------------------------

//10.SEARCH ALL & SORT BY YEAR BUILT(NEWEST to OLDEST)


app.get('/SortByYear',function(req,res){

  db.property.aggregate([
                         {$match:{}},
                         {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                         {$sort:{'Year Built':-1}}
                        ],
                        function(err,docs)
                        {
                        res.send(docs);
                        }
                       );


});

//-----------------------------------------------------------------------------------------------------

//11.SEARCH BY COUNTY & SORT BY PRICE(LOW to HIGH)

app.get('/County/:county/SortByPrice',function(req,res){
  console.log(req.params.county);

  db.property.aggregate([
  	                     {$match:{County:req.params.county}},
                         {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                         {$sort:{Price:1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});

//-----------------------------------------------------------------------------------------------------

//12.SEARCH BY CITY & SORT BY PRICE(LOW to HIGH)

app.get('/City/:city/SortByPrice',function(req,res){
  console.log(req.params.county);

  db.property.aggregate([
  	                     {$match:{City:req.params.city}},
                         {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                         {$sort:{Price:1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});


//------------------------------------------------------------------------------------------------------

//13.SEARCH BY PRICE & SORT BY PRICE(LOW to HIGH)

app.get('/PriceL/:p1/PriceH/:p2/SortByPrice',function(req,res){
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));

  db.property.aggregate([
  	                     {$match:{Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)}},
                         {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                         {$sort:{Price:1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});

//----------------------------------------------------------------------------------------------------------

//14.SEARCH BY COUNTY, CITY & SORT BY PRICE(LOW to HIGH)

app.get('/County/:county/City/:city/SortByPrice',function(req,res){
  console.log(req.params.county);
  console.log(req.params.city);

  db.property.aggregate([
  	                      {$match:{County:req.params.county, City:req.params.city}},
                          {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                          {$sort:{Price:1}}
                        ],
                        function(err,docs)
                        {
                         res.send(docs);
                        }
                       );


});


//----------------------------------------------------------------------------------------------------------

//15.SEARCH BY COUNTY,PRICE & SORT BY PRICE(LOW to HIGH)

app.get('/County/:county/PriceL/:p1/PriceH/:p2/SortByPrice',function(req,res){
  console.log(req.params.county);
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));

  db.property.aggregate([
  	                      {$match:{County:req.params.county, Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)}}},
                          {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                          {$sort:{Price:1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});


//-----------------------------------------------------------------------------------------------------------

//16.SEARCH BY CITY,PRICE & SORT BY PRICE(LOW to HIGH)

app.get('/City/:city/PriceL/:p1/PriceH/:p2/SortByPrice',function(req,res){
  console.log(req.params.city);
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));

  db.property.aggregate([
  	                      {$match:{City:req.params.city, Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)}}},
                          {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                          {$sort:{Price:1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});


//------------------------------------------------------------------------------------------------------------

//17.SEARCH BY COUNTY, CITY, PRICE & SORT BY PRICE(LOW TO HIGH)

app.get('/County/:county/City/:city/PriceL/:p1/PriceH/:p2/SortByPrice',function(req,res){
  console.log(req.params.city);
  console.log(req.params.county);
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));

  db.property.aggregate([
  	                      {$match:{County:req.params.county,City:req.params.city, Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)}}},
                          {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                          {$sort:{Price:1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});

//--------------------------------------------------------------------------------------------------------------


//18.SEARCH BY COUNTY & SORT BY YEAR BUILT(NEWEST)

app.get('/County/:county/SortByYear',function(req,res){
  console.log(req.params.county);

  db.property.aggregate([
  	                     {$match:{County:req.params.county}},
                         {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                         {$sort:{"Year Built":-1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});


//--------------------------------------------------------------------------------------------------------------

//19.SEARCH BY CITY & SORT BY YEAR BUILT(NEWEST)


app.get('/City/:city/SortByYear',function(req,res){
  console.log(req.params.county);

  db.property.aggregate([
  	                     {$match:{City:req.params.city}},
                         {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                         {$sort:{"Year Built":-1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});


//--------------------------------------------------------------------------------------------------------------

//20.SEARCH BY PRICE & SORT BY YEAR BUILT(NEWEST)

app.get('/PriceL/:p1/PriceH/:p2/SortByYear',function(req,res){
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));

  db.property.aggregate([
  	                     {$match:{Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)}},
                         {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                         {$sort:{"Year Built":-1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});


//--------------------------------------------------------------------------------------------------------------

//21.SEARCH BY COUNTY, CITY & SORT BY YEAR BUILT(NEWEST)

app.get('/County/:county/City/:city/SortByYear',function(req,res){
  console.log(req.params.county);
  console.log(req.params.city);

  db.property.aggregate([
  	                      {$match:{County:req.params.county, City:req.params.city}},
                          {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                          {$sort:{"Year Built":-1}}
                        ],
                        function(err,docs)
                        {
                         res.send(docs);
                        }
                       );


});


//--------------------------------------------------------------------------------------------------------------

//22.SEARCH BY COUNTY,PRICE & SORT BY YEAR BUILT(NEWEST)

app.get('/County/:county/PriceL/:p1/PriceH/:p2/SortByYear',function(req,res){
  console.log(req.params.county);
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));

  db.property.aggregate([
  	                      {$match:{County:req.params.county, Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)}}},
                          {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                          {$sort:{"Year Built":-1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});


//--------------------------------------------------------------------------------------------------------------

//23.SEARCH BY CITY,PRICE & SORT BY YEAR BUILT(NEWEST)

app.get('/City/:city/PriceL/:p1/PriceH/:p2/SortByYear',function(req,res){
  console.log(req.params.city);
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));

  db.property.aggregate([
  	                      {$match:{City:req.params.city, Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)}}},
                          {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                          {$sort:{"Year Built":-1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});


//--------------------------------------------------------------------------------------------------------------

//24.SEARCH BY COUNTY, CITY, PRICE & SORT BY YEAR BUILT(NEWEST)

app.get('/County/:county/City/:city/PriceL/:p1/PriceH/:p2/SortByYear',function(req,res){
  console.log(req.params.city);
  console.log(req.params.county);
  console.log(parseInt(req.params.p1));
  console.log(parseInt(req.params.p2));

  db.property.aggregate([
  	                      {$match:{County:req.params.county, City:req.params.city, Price: { $gt:parseInt(req.params.p1), $lt:parseInt(req.params.p2)}}},
                          {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                          {$sort:{"Year Built":-1}}
                        ],
                        function(err,docs)
                        {
                          res.send(docs);
                        }
                       );


});

//--------------------------------------------------------------------------------------------------------------

app.listen(3000);
console.log("server running on port 3000");