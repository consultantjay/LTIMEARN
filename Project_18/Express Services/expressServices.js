var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var mongojs = require('mongojs');

var db = mongojs('project',['hotel']);

app.use(express.static(__dirname));




// 1.Search hotel by hotel name:



app.get('/name/:property_name',function(req,res){

console.log(req.params.property_name);

var property_name = req.params.property_name;

db.hotel.aggregate([{

  $match:{

    "property_name":new RegExp('.*'+property_name+'.*','i')
  }},

  {$project:{

    _id:0

  }}], function(err,docs){res.json(docs);})


}) ;



//2.Search hotel by city:



app.get('/city/:city',function(req,res){

console.log(req.params.city);

var city = req.params.city;

db.hotel.aggregate([{

  $match:{

    "city":new RegExp('.*'+city+'.*','i')
  }},

  {$project:{

    _id:0

  }}], function(err,docs){res.json(docs);})


}) ;



//3.Search by amenities:


app.get('/amenities/:amenities',function(req,res){

console.log(req.params.amenities);

var amenities = req.params.amenities;

db.hotel.aggregate([{

  $match:{

    "amenities":new RegExp('.*'+amenities+'.*','i')
  }},

  {$project:{

    _id:0

  }}], function(err,docs){res.json(docs);})


}) ;


//4. Search hotel by price:

app.get('/price/:room_price',function(req,res){

console.log(req.params.room_price);

var room_price = req.params.room_price;

db.hotel.aggregate([{$match:{"room_price":{$lte : +room_price}}},{$project:{_id:1}}],function(err,docs){

res.json(docs);})
}) ;


//5. Search by hotel name and city:

app.get('/name/city/:property_name/:city',function(req,res){

console.log(req.params.city);

console.log(req.params.property_name);

var city = req.params.city;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"property_name":new RegExp('.*'+property_name+'.*','i')},
{"city":new RegExp('.*'+city+'.*','i')}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})

});



//6.Search by hotel name and amenities:



app.get('/name/amenities/:property_name/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.property_name);

var property_name = req.params.property_name;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"property_name":new RegExp('.*'+property_name+'.*','i')},
{"amenities":new RegExp('.*'+amenities+'.*','i')}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})



}) ;



//7. Search by hotel name and price:



app.get('/name/price/:property_name/:room_price',function(req,res){

console.log(req.params.room_price);

console.log(req.params.property_name);

var room_price = req.params.room_price;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"property_name":new RegExp('.*'+property_name+'.*','i')},
{"room_price":{$lte : +room_price}}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})



}) ;

//8.Search by city and amenities:



app.get('/city/amenities/:city/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.city);

var city = req.params.city;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"amenities":new RegExp('.*'+amenities+'.*','i')}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})

}) ;



//9. Search by city and price:


app.get('/city/price/:city/:room_price',function(req,res){

console.log(req.params.room_price);

console.log(req.params.city);

var city = req.params.city;

var room_price = req.params.room_price;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"room_price":{$lte : +room_price}}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})

}) ;





//10.Search by price and amenities:



app.get('/price/amenities/:room_price/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.room_price);

var room_price = req.params.room_price;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"amenities":new RegExp('.*'+amenities+'.*','i')},
{"room_price":{$lte : +room_price}}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})


}) ;



//11. Search by hotel name, city and price:



app.get('/name/city/price/:property_name/:city/:room_price',function(req,res){

console.log(req.params.room_price);

console.log(req.params.city);

console.log(req.params.property_name);

var city = req.params.city;

var room_price = req.params.room_price;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"room_price":{$lte : +room_price}},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})


}) ;



//12.Search by hotel name, city and amenities:



app.get('/name/city/amenities/:property_name/:city/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.city);

console.log(req.params.property_name);

var city = req.params.city;

var amenities = req.params.amenities;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"amenities":new RegExp('.*'+amenities+'.*','i')},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})


}) ;



//13.Search by hotel name, amenities and price:



app.get('/name/price/amenities/:property_name/:room_price/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.room_price);

console.log(req.params.property_name);

var amenities = req.params.amenities;

var room_price = req.params.room_price;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"room_price":{$lte : +room_price}},
{"amenities":new RegExp('.*'+amenities+'.*','i')},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})


}) ;



//14.Search by amenities, price and city:



app.get('/city/price/amenities/:city/:room_price/:amenities',function(req,res){

console.log(req.params.city);

console.log(req.params.room_price);

console.log(req.params.amenities);

var city = req.params.city;

var room_price = req.params.room_price;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"room_price":{$lte : +room_price}},
{"amenities":new RegExp('.*'+amenities+'.*','i')},{"city":new RegExp('.*'+city+'.*','i')}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})



}) ;



//15.Search by hotel name, amenities, price and city:



app.get('/name/city/price/amenities/:property_name/:city/:room_price/:amenities',function(req,res){

console.log(req.params.city);

console.log(req.params.room_price);

console.log(req.params.amenities);

console.log(req.params.property_name);

var city = req.params.city;

var property_name = req.params.property_name;

var room_price = req.params.room_price;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"room_price":{$lte : +room_price}},
{"amenities":new RegExp('.*'+amenities+'.*','i')},
{"city":new RegExp('.*'+city+'.*','i')},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},{$project:{_id:0}}],function(err,docs){

res.json(docs);})
}) ;






// 16.Search hotel by hotel name & sort high to low by price



app.get('/name_sort/:property_name',function(req,res){

console.log(req.params.property_name);

var property_name = req.params.property_name;

db.hotel.aggregate([{

  $match:{

    "property_name":new RegExp('.*'+property_name+'.*','i')
  }},

  {$project:{

    _id:0

  }},{$sort:
		{room_price : 1
	}}], function(err,docs){res.json(docs);})


}) ;


//17.Search hotel by city and sort high to low by price



app.get('/city_sort/:city',function(req,res){

console.log(req.params.city);

var city = req.params.city;

db.hotel.aggregate([{

  $match:{

    "city":new RegExp('.*'+city+'.*','i')
  }},

  {$project:{

    _id:0

  }},{$sort:
		{room_price : 1
	}}], function(err,docs){res.json(docs);})


}) ;


//18.Search by amenities and sort high tolow by price



app.get('/amenities_sort/:amenities',function(req,res){

console.log(req.params.amenities);

var amenities = req.params.amenities;



db.hotel.aggregate([{

  $match:{

    "amenities":new RegExp('.*'+amenities+'.*','i')
  }},

  {$project:{

    _id:0

  }},{$sort:
		{room_price : 1
	}}], function(err,docs){res.json(docs);})


}) ;


//19. Search hotel by price and sort high to low by price



app.get('/price_sort/:room_price',function(req,res){

console.log(req.params.room_price);

var room_price = req.params.room_price;

db.hotel.aggregate([{$match:{"room_price":{$lte : +room_price}}},{$project:{_id:0}},{$sort:
  {room_price : 1
}}],function(err,docs){

res.json(docs);})
}) ;


//20. Search by hotel name and city and sort high to lowby room price

app.get('/name/city_sort/:property_name/:city',function(req,res){

console.log(req.params.city);

console.log(req.params.property_name);

var city = req.params.city;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{property_name:{

  $regex :new RegExp('.*'+property_name+'.*','i')
}},{city:{

  $regex : new RegExp('.*'+city+'.*','i')
}}]}},{$project:{_id:0}},{$sort:
  {room_price : 1
}}],function(err,docs){

res.json(docs);})

});


//21.Search by hotel name and amenities and sort high to low by price


app.get('/name/amenities_sort/:property_name/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.property_name);

var property_name = req.params.property_name;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"property_name":new RegExp('.*'+property_name+'.*','i')},
{"amenities":new RegExp('.*'+amenities+'.*','i')}]}},{$project:{_id:0}},{$sort:
  {room_price : 1
}}],function(err,docs){

res.json(docs);})


}) ;


//22. Search by hotel name and price and sort high to low by price



app.get('/name/price_sort/:property_name/:room_price',function(req,res){

console.log(req.params.room_price);

console.log(req.params.property_name);

var room_price = req.params.room_price;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"property_name":new RegExp('.*'+property_name+'.*','i')},
{"room_price":{$lte : +room_price}}]}},{$project:{_id:0}},{$sort:{room_price : 1}}
],function(err,docs){

res.json(docs);})



}) ;

//23.Search by city and amenities and sort high to low by price



app.get('/city/amenities_sort/:city/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.city);

var city = req.params.city;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"amenities":new RegExp('.*'+amenities+'.*','i')}]}},{$project:{_id:0}},{$sort:{room_price : 1}}],function(err,docs){

res.json(docs);})

}) ;



//24. Search by city and price and sort high to low by price


app.get('/city/price_sort/:city/:room_price',function(req,res){

console.log(req.params.room_price);

console.log(req.params.city);

var city = req.params.city;

var room_price = req.params.room_price;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"room_price":{$lte : +room_price}}]}},{$project:{_id:0}},{$sort:{room_price : 1}}],function(err,docs){

res.json(docs);})

}) ;





//25.Search by price and amenities and sort high to low by price:



app.get('/price/amenities_sort/:room_price/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.room_price);

var room_price = req.params.room_price;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"amenities":new RegExp('.*'+amenities+'.*','i')},
{"room_price":{$lte : +room_price}}]}},{$project:{_id:0}},{$sort:{room_price : 1}}],function(err,docs){

res.json(docs);})


}) ;



//26. Search by hotel name, city and price and sort high to low by price



app.get('/name/city/price_sort/:property_name/:city/:room_price',function(req,res){

console.log(req.params.room_price);

console.log(req.params.city);

console.log(req.params.property_name);

var city = req.params.city;

var room_price = req.params.room_price;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"room_price":{$lte : +room_price}},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : 1}}],function(err,docs){

res.json(docs);})


}) ;



//27.Search by hotel name, city and amenities and sort high to low by price



app.get('/name/city/amenities_sort/:property_name/:city/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.city);

console.log(req.params.property_name);

var city = req.params.city;

var amenities = req.params.amenities;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"amenities":new RegExp('.*'+amenities+'.*','i')},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : 1}}],function(err,docs){

res.json(docs);})


}) ;



//28.Search by hotel name, amenities and price:



app.get('/name/price/amenities_sort/:property_name/:room_price/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.room_price);

console.log(req.params.property_name);

var amenities = req.params.amenities;

var room_price = req.params.room_price;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"room_price":{$lte : +room_price}},
{"amenities":new RegExp('.*'+amenities+'.*','i')},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : 1}}],function(err,docs){

res.json(docs);})


}) ;



//29.Search by amenities, price and city:



app.get('/city/price/amenities_sort/:city/:room_price/:amenities',function(req,res){

console.log(req.params.city);

console.log(req.params.room_price);

console.log(req.params.amenities);

var city = req.params.city;

var room_price = req.params.room_price;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"room_price":{$lte : +room_price}},
{"amenities":new RegExp('.*'+amenities+'.*','i')},{"city":new RegExp('.*'+city+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : 1}}],function(err,docs){

res.json(docs);})



}) ;



//30.Search by hotel name, amenities, price and city:



app.get('/name/city/price/amenities_sort/:property_name/:city/:room_price/:amenities',function(req,res){

console.log(req.params.city);

console.log(req.params.room_price);

console.log(req.params.amenities);

console.log(req.params.property_name);

var city = req.params.city;

var property_name = req.params.property_name;

var room_price = req.params.room_price;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"room_price":{$lte : +room_price}},
{"amenities":new RegExp('.*'+amenities+'.*','i')},
{"city":new RegExp('.*'+city+'.*','i')},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : 1}}],function(err,docs){

res.json(docs);})
}) ;



// 31.Search hotel by hotel name & sort low to high by price



app.get('/name_sortl/:property_name',function(req,res){

console.log(req.params.property_name);

var property_name = req.params.property_name;

db.hotel.aggregate([{

  $match:{

    "property_name":new RegExp('.*'+property_name+'.*','i')
  }},

  {$project:{

    _id:0

  }},{$sort:
		{room_price : -1
	}}], function(err,docs){res.json(docs);})


}) ;


//32.Search hotel by city and sort low to high by price



app.get('/city_sortl/:city',function(req,res){

console.log(req.params.city);

var city = req.params.city;

db.hotel.aggregate([{

  $match:{

    "city":new RegExp('.*'+city+'.*','i')
  }},

  {$project:{

    _id:0

  }},{$sort:
		{room_price : -1
	}}], function(err,docs){res.json(docs);})


}) ;


//33.Search by amenities and sort low to high by price



app.get('/amenities_sortl/:amenities',function(req,res){

console.log(req.params.amenities);

var amenities = req.params.amenities;



db.hotel.aggregate([{

  $match:{

    "amenities":new RegExp('.*'+amenities+'.*','i')
  }},

  {$project:{

    _id:0

  }},{$sort:
		{room_price : -1
	}}], function(err,docs){res.json(docs);})


}) ;


//34. Search hotel by price and sort low to high by price



app.get('/price_sortl/:room_price',function(req,res){

console.log(req.params.room_price);

var room_price = req.params.room_price;

db.hotel.aggregate([{$match:{"room_price":{$lte : +room_price}}},{$project:{_id:0}},{$sort:
  {room_price : -1
}}],function(err,docs){

res.json(docs);})
}) ;


//35. Search by hotel name and city and sort low to high by room price

app.get('/name/city_sortl/:property_name/:city',function(req,res){

console.log(req.params.city);

console.log(req.params.property_name);

var city = req.params.city;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{property_name:{

  $regex :new RegExp('.*'+property_name+'.*','i')
}},{city:{

  $regex : new RegExp('.*'+city+'.*','i')
}}]}},{$project:{_id:0}},{$sort:
  {room_price : -1
}}],function(err,docs){

res.json(docs);})

});


//36.Search by hotel name and amenities and sort low to high by price


app.get('/name/amenities_sortl/:property_name/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.property_name);

var property_name = req.params.property_name;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"property_name":new RegExp('.*'+property_name+'.*','i')},
{"amenities":new RegExp('.*'+amenities+'.*','i')}]}},{$project:{_id:0}},{$sort:
  {room_price : -1
}}],function(err,docs){

res.json(docs);})


}) ;


//37. Search by hotel name and price and sort low to high by price



app.get('/name/price_sortl/:property_name/:room_price',function(req,res){

console.log(req.params.room_price);

console.log(req.params.property_name);

var room_price = req.params.room_price;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"property_name":new RegExp('.*'+property_name+'.*','i')},
{"room_price":{$lte : +room_price}}]}},{$project:{_id:0}},{$sort:{room_price : -1}}
],function(err,docs){

res.json(docs);})



}) ;

//38.Search by city and amenities and sort low to high by price



app.get('/city/amenities_sortl/:city/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.city);

var city = req.params.city;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"amenities":new RegExp('.*'+amenities+'.*','i')}]}},{$project:{_id:0}},{$sort:{room_price : -1}}],function(err,docs){

res.json(docs);})

}) ;



//39. Search by city and price and sort low to high by price


app.get('/city/price_sortl/:city/:room_price',function(req,res){

console.log(req.params.room_price);

console.log(req.params.city);

var city = req.params.city;

var room_price = req.params.room_price;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"room_price":{$lte : +room_price}}]}},{$project:{_id:0}},{$sort:{room_price : -1}}],function(err,docs){

res.json(docs);})

}) ;





//40.Search by price and amenities and sort low to high by price:



app.get('/price/amenities_sortl/:room_price/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.room_price);

var room_price = req.params.room_price;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"amenities":new RegExp('.*'+amenities+'.*','i')},
{"room_price":{$lte : +room_price}}]}},{$project:{_id:0}},{$sort:{room_price : -1}}],function(err,docs){

res.json(docs);})


}) ;



//41. Search by hotel name, city and price and sort lowto high by price



app.get('/name/city/price_sortl/:property_name/:city/:room_price',function(req,res){

console.log(req.params.room_price);

console.log(req.params.city);

console.log(req.params.property_name);

var city = req.params.city;

var room_price = req.params.room_price;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"room_price":{$lte : +room_price}},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : -1}}],function(err,docs){

res.json(docs);})


}) ;



//42.Search by hotel name, city and amenities and sort low to high by price



app.get('/name/city/amenities_sortl/:property_name/:city/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.city);

console.log(req.params.property_name);

var city = req.params.city;

var amenities = req.params.amenities;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"city":new RegExp('.*'+city+'.*','i')},
{"amenities":new RegExp('.*'+amenities+'.*','i')},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : -1}}],function(err,docs){

res.json(docs);})


}) ;



//43.Search by hotel name, amenities and price and sort low to high by price



app.get('/name/price/amenities_sortl/:property_name/:room_price/:amenities',function(req,res){

console.log(req.params.amenities);

console.log(req.params.room_price);

console.log(req.params.property_name);

var amenities = req.params.amenities;

var room_price = req.params.room_price;

var property_name = req.params.property_name;

db.hotel.aggregate([{$match:{$and:[{"room_price":{$lte : +room_price}},
{"amenities":new RegExp('.*'+amenities+'.*','i')},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : -1}}],function(err,docs){

res.json(docs);})


}) ;



//44.Search by amenities, price and city and sort low to high by price :



app.get('/city/price/amenities_sortl/:city/:room_price/:amenities',function(req,res){

console.log(req.params.city);

console.log(req.params.room_price);

console.log(req.params.amenities);

var city = req.params.city;

var room_price = req.params.room_price;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"room_price":{$lte : +room_price}},
{"amenities":new RegExp('.*'+amenities+'.*','i')},{"city":new RegExp('.*'+city+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : -1}}],function(err,docs){

res.json(docs);})



}) ;



//45.Search by hotel name, amenities, price and city and sort low to high by price



app.get('/name/city/price/amenities_sortl/:property_name/:city/:room_price/:amenities',function(req,res){

console.log(req.params.city);

console.log(req.params.room_price);

console.log(req.params.amenities);

console.log(req.params.property_name);

var city = req.params.city;

var property_name = req.params.property_name;

var room_price = req.params.room_price;

var amenities = req.params.amenities;

db.hotel.aggregate([{$match:{$and:[{"room_price":{$lte : +room_price}},
{"amenities":new RegExp('.*'+amenities+'.*','i')},
{"city":new RegExp('.*'+city+'.*','i')},{"property_name":new RegExp('.*'+property_name+'.*','i')}]}},
{$project:{_id:0}},{$sort:{room_price : -1}}],function(err,docs){

res.json(docs);})
}) ;



app.listen(3000);

console.log("server running on port 3000");