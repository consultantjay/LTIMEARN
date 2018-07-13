/*
This module help us to retrive data from mongodb and print it on browser.This module contains integration of mongodb and node js and express.
@author:Ruby Verma
@version:1.0
@DISCLAIMER:Following versions may undergo complete makeover
*/
//1.Search all
var express = require('express')
var app = express();
var mongojs=require('mongojs');
var db = mongojs('Proo',['deb']);
app.use(express.static(__dirname));

app.get('/',function(err,res){
  db.deb.find({},
              {},
              function(err,docs){
                res.send(docs);
              }
            );
});

//-------------------------------------------------------------------------------------------------------------------------------------

//2. Search all by uing projections


app.get('/all',function(err,res){
  db.deb.find({},
            {address:1,city:1,"ZONAL REGION":1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,docs){
                res.send(docs);
              }
            );
});

//----------------------------------------------------------------------------------------------------------------------------------------------

//3.Search by zonal_area



app.get('/zonal_area/:zonal_area',function(req,res){
  db.deb.find({"zonal_area":req.params.zonal_area},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,docs){
                res.send(docs);
              }
            );
});

//--------------------------------------------------------------------------------------------------------------------------------------------------

//4.Search by City



app.get('/city/:city',function(req,res){
  db.deb.find({"city":req.params.city},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,docs){
                res.send(docs);
              }
            );
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
//5.Search by name



app.get('/name/:name',function(req,res){
  db.deb.find({"name":req.params.name},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,docs){
                res.send(docs);
              }
            );
});

//
//6.Search by zonal_area and city



app.get('/zonal_area/:zonal_area/city/:city',function(req,res){
  db.deb.find({zonal_area:req.params.zonal_area,city:req.params.city},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,docs){
                res.send(docs);
              }
            );
});

//------------------------------------------------------------------------------------------------------------------------------------------------
//7.Search by zonal_area and name



app.get('/zonal_area/:zonal_area/name/:name',function(req,res){
  db.deb.find({zonal_area:req.params.zonal_area,name:req.params.name},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,docs){
                res.send(docs);
              }
            );
});

//-------------------------------------------------------------------------------------------------------------------------------------------------
//8.Search by city and name



app.get('/city/:city/name/:name',function(req,res){
  db.deb.find({city:req.params.city,name:req.params.name},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,docs){
                res.send(docs);
              }
            );
});

//----------------------------------------------------------------------------------------------------------------------------------------------------
//9.Search by zonal_area,city and name



app.get('/zonal_area/:zonal_area/city/:city/name/:name',function(req,res){
  db.deb.find({zonal_area:req.params.zonal_area,city:req.params.city,name:req.params.name},
            {address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1},function(err,docs){
                res.send(docs);
              }
            );
});

//----------------------------------------------------------------------------------------------------------------------------------------------------
//10.Search all by using projections
//and sort by ratings



app.get('/byrating',function(req,res){
  db.deb.aggregate([{$match:{}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,docs){
                res.send(docs);
              }
            );
});

//----------------------------------------------------------------------------------------------------------------------------------------------------

//11.Search by zonal_area
//and sort by ratings



app.get('/zonal_area/:zonal_area/byrating',function(req,res){
  db.deb.aggregate([{$match:{zonal_area:req.params.zonal_area}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,docs){
                res.send(docs);
              }
            );
});

//---------------------------------------------------------------------------------------------------------------------------------------------------
//12.Search by city
//and sort by ratings


app.get('/city/:city/byrating',function(req,res){
  db.deb.aggregate([{$match:{city:req.params.city}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,docs){
                res.send(docs);
              }
            );
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------
//13.Search by name
//and sort by ratings



app.get('/name/:name/byrating',function(req,res){
  db.deb.aggregate([{$match:{name:req.params.name}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,docs){
                res.send(docs);
              }
            );
});

//------------------------------------------------------------------------------------------------------------------------------------------------------
//14.Search by zonal_area and city
//and sort by ratings



app.get('/city/:city/zonal_area/:zonal_area/byrating',function(req,res){
  db.deb.aggregate([{$match:{city:req.params.city,zonal_area:req.params.zonal_area}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,docs){
                res.send(docs);
              }
            );
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------
//15.Search by zonal_area and name
//and sort by ratings



app.get('/name/:name/zonal_area/:zonal_area/byrating',function(req,res){
  db.deb.aggregate([{$match:{name:req.params.name,zonal_area:req.params.zonal_area}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,docs){
                res.send(docs);
              }
            );
});

//----------------------------------------------------------------------------------------------------------------------------------------------------
//16.Search by city and name
//and sort by ratings



app.get('/name/:name/city/:city/byrating',function(req,res){
  db.deb.aggregate([{$match:{name:req.params.name,city:req.params.city}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,docs){
                res.send(docs);
              }
            );
});

//------------------------------------------------------------------------------------------------------------------------------------------------------
//17.Search by zonal_area,city
//and name and sort by ratings



app.get('/name/:name/city/:city/zonal_area/:zonal_area/byrating',function(req,res){
  db.deb.aggregate([{$match:{name:req.params.name,city:req.params.city,zonal_area:req.params.zonal_area}},
                  {$project:{address:1,city:1,zonal_area:1,name:1,Rating:1,_id:0,postalCode:1,websites:1}},
                  {$sort:{Rating:-1}}],function(err,docs){
                res.send(docs);
              }
            );
});
app.listen(3000);
console.log("server running on port 3000");
