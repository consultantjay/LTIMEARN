//Search:
// 1. Search by Area and Hotel Category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var area = "Kalkaji";
var category = "regular";
db.hotel.find({
  area:area,hotel_category:category,property_type:"Hotel"
  },
  {
    _id:1,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//2. Search by Area and HotelName
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelName = "Anmol Hotel Pvt.Ltd";
var area= "Paharganj";
db.hotel.find({
  area:area,property_name:hotelName,property_type:"Hotel"
  },
  {
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//3. Search by Area, hotel name and hotel Category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelName = "Balaji Residency";
var category = "regular";
var area = "Kalkaji";
db.hotel.find({
  property_name:hotelName,hotel_category:category,area:area,property_type:"Hotel"
  },
  {
    _id:1,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//4. Search by Area
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var areaName = "Kalkaji";
db.hotel.find({
  area:areaName,property_type:"Hotel"
  },
  {
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//5. Search by Hotel Category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelCategory = "regular";
db.hotel.find({
    hotel_category:hotelCategory,property_type:"Hotel"
  },
  {
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//6. Search by city and area
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var area = "Baga Area";
var city = "Goa";
db.hotel.find({
    area:area,city:city,property_type:"Hotel"
  },
  {
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//7. Search by city and Hotel Category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelCategory = "regular";
var city = "Goa";
db.hotel.find({
  hotel_category:hotelCategory,city:city,property_type:"Hotel"
  },
  {
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//8. Search by city and hotel name
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelName = "Vedas";
var city = "Rishikesh";
db.hotel.find({
  property_name:hotelName,city:city,property_type:"Hotel"
  },
  {
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//9. Search by city, area and Hotel Category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var category = "regular";
var area = "Kalkaji";
var city = "Delhi";
db.hotel.find({
  city:city,hotel_category:category,area:area,property_type:"Hotel"
  },
  {
    _id:1,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//10. Search by city, area and hotel name
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelName = "Anmol Hotel Pvt.Ltd";
var area= "Paharganj";
var city= "Delhi";
db.hotel.find({
    area:area,property_name:hotelName,city:city,property_type:"Hotel"
  },
  {
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//11. Search by city, area, hotel name and hotel category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelName = "Balaji Residency";
var category = "regular";
var area = "Kalkaji";
var city = "Delhi";
db.hotel.find({
  property_name:hotelName,hotel_category:category,area:area,city:city,property_type:"Hotel"
  },
  {
    _id:1,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//12. Search by city, hotel name and category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var category = "regular";
var hotelName = "Vedas";
var city = "Rishikesh";
db.hotel.find({
    property_name:hotelName,hotel_category:category,city:city,property_type:"Hotel"
  },
  {
    _id:1,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//13. Search by city
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.aggregate([{
  $match:{
    city:"Manali",property_type:"Hotel"
  }},
  {$project:{
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  }}],
  function(err,res){
    console.log(res);
});

//14. Search by hotel name and hotel category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelName = "Anmol Hotel Pvt.Ltd";
var category = "regular";
db.hotel.find({
  property_name:hotelName,hotel_category:category,property_type:"Hotel"
  },
  {
    _id:1,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

//15. Search by hotel name
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelName = "Vedas";
db.hotel.find({
    property_name:hotelName,property_type:"Hotel"
  },
  {
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  },
  function(err,res){
    console.log(res);
});

===============================================================================================================================
//Sort:

//16. Sort by area
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var area = "Kalkaji";
db.hotel.aggregate([{
  $match:{area:area,property_type:"Hotel"
  }},
  {$project:{
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  }},
  {$sort:{
    hotel_star_rating:-1
  }}],
  function(err,res){
    console.log(res);
});

//17. Sort by area and category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var area = "Kalkaji";
var hotelCategory = "regular";
db.hotel.aggregate([{
  $match:{
    $and:[{
      area:area,hotel_category:hotelCategory,property_type:"Hotel"
    }]
  }},
 {$project:{
   _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
 }},
{$sort:{
  hotel_star_rating:-1
}}],
function(err,res){
  console.log(res);
});

//18. Sort by category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotel_category = "regular";
db.hotel.aggregate([{
  $match:{
    hotel_category:hotel_category,property_type:"Hotel"
  }},
  {$project:{
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  }},
  {$sort:{
    hotel_star_rating:-1
  }}],
  function(err,res){
    console.log(res);
});

//19. Sort by city and area
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var area = "Baga Area";
var city = "Goa";
db.hotel.aggregate([{
  $match:{
    $and:[{
      city:city,area:area,property_type:"Hotel"
  }]}},   
  {$project:
    {_id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
    }},
  {$sort:{
    hotel_star_rating:-1
  }}],
  function(err,res){
  console.log(res);
});

//20. Sort by city and category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelCategory = "regular";
var city = "Goa";
db.hotel.aggregate([{
  $match:{
    $and:[{
      city:city,hotel_category:hotelCategory,property_type:"Hotel"
    }]}},
  {$project:{
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  }},
  {$sort:{
    hotel_star_rating:-1
  }}],
  function(err,res){
    console.log(res);
});

//21. Sort by city,area and category
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var hotelCategory = "regular";
var area = "Kalkaji";
var city = "Delhi";
db.hotel.aggregate([{
  $match:{
    $and:[{
      area:area,city:city,hotel_category:hotelCategory,property_type:"Hotel"
    }]}},
  {$project:{
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  }},
  {$sort:{
    hotel_star_rating:-1
  }}],
  function(err,res){
    console.log(res);
});

//22. Sort by city
var mongojs =  require('mongojs');
var db = mongojs('project',['hotel']);
var city = "Manali";
db.hotel.aggregate([{
  $match:{
    city:city,property_type:"Hotel"
  }},
  {$project:{
    _id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1
  }},
  {$sort:{hotel_star_rating:-1
  }}],
 function(err,res){
   console.log(res);
});

