/* search by city */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/city/:city',function(req,res){
console.log(req.params.city);
db.cleartrip.find({"city":req.params.city},{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
---------------------------------------------------------------------
/* search by property name */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/property_name/:property_name',function(req,res){
console.log(req.params.property_name);
db.cleartrip.find({"property_name":req.params.property_name},{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
------------------------------------------------------------------
/* search by city and property name */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/city/:city/property_name/:property_name',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"city":req.params.city},{"property_name":req.params.property_name}]},{_id:0,city:1,property_name:1,hotel_description:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
--------------------------------------------------------------------
/* search by city , property name and room type */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/city/:city/property_name/:property_name/room_type/:room_type',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"city":req.params.city},{"property_name":req.params.property_name},{"room_type":req.params.room_type}]},{_id:0,city:1,property_name:1,hotel_description:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
-----------------------------------------------------------------------
/* search by property name and room type */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/property_name/:property_name/room_type/:room_type',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"property_name":req.params.property_name},{"room_type":req.params.room_type}]},{_id:0,city:1,property_name:1,hotel_description:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
-------------------------------------------------------------------------
/* search by city and room type */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/city/:city/room_type/:room_type',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"city":req.params.city},{"room_type":req.params.room_type}]},{_id:0,city:1,property_name:1,hotel_description:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
-----------------------------------------------------------------------------------
/* search by room type */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/room_type/:room_type',function(req,res){
console.log(req.params.room_type);
db.cleartrip.find({"room_type":req.params.room_type},{_id:0,city:1,property_name:1,hotel_description:1,room_type:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
---------------------------------------------------------------------------------
/* search by city and property name */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/city/:city/property_name/:property_name',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"city":req.params.city},{"property_name":req.params.property_name}]},{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
----------------------------------------------------------------------------------------
/* search by rating*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/rating/:rating',function(req,res){
console.log(req.params.property_name);
db.cleartrip.find({"rating":req.params.rating},{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
-----------------------------------------------------------------------------------------------
/* search by city and rating */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/city/:city/rating/:rating',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"city":req.params.city},{"rating":req.params.rating}]},{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
-----------------------------------------------------------------------------------------------------------
/* search by property name and rating*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/property_name/:property_name/rating/:rating',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"property_name":req.params.property_name},{"rating":req.params.rating}]},{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
---------------------------------------------------------------------------------------------------------
/* search by room type and rating*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/room_type/:room_type/rating/:rating',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"room_type":req.params.room_type},{"rating":req.params.rating}]},{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
-----------------------------------------------------------------------------------------------------------
/* search by property name ,rating and city */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/property_name/:property_name/rating/:rating/city/:city',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"property_name":req.params.property_name},{"rating":req.params.rating},{"city":req.params.city}]},{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
--------------------------------------------------------------------------------------------------------------
/* search by  room type,rating and city */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/room_type/:room_type/rating/:rating/city/:city',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"room_type":req.params.room_type},{"rating":req.params.rating},{"city":req.params.city}]},{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
----------------------------------------------------------------------------------------------------------------------
/* search by property name, rating,city and room type  */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs = require('mongojs');
var db = mongojs('Hotel',['cleartrip']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res)
{
db.cleartrip.find(function(err,docs){
res.json(docs);
}
);
}
);
app.get('/property_name/:property_name/rating/:rating/city/:city/room_type/:room_type',function(req,res){
console.log(req.params.city);
db.cleartrip.find({$and:[{"property_name":req.params.property_name},{"rating":req.params.rating},{"city":req.params.city},{"room_type":req.params.room_type}]},
{_id:0,city:1,property_name:1},function(err,docs)
{
res.json(docs);
}
)
}
);
app.listen(3000);
console.log("server running on port 3000");
