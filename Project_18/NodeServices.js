						--------------	NODE JS SERVICES  ---------------


// 1.Search hotel by hotel name:
 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
var hotelname = "hotel samrat"
  db.hotel.find( { 
	"property_name" : { 
		$regex : new RegExp(hotelname, "i") 
			} 
		} , function(err,res){
		console.log(res);
		})


//2.Search hotel by city:

 var mongojs = require('mongojs');
 var db = mongojs('project',['hotel']);
 var city = "Jhansi"
  db.hotel.find( { 
	"city" : { 
		$regex : new RegExp(city, "i") 
		} 
	} , function(err,res){
		console.log(res);
		})


//Search by amenities:

//3.AC:

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
  db.hotel.aggregate([{
	$match:{
		amenities:/.*AC.*/
	}},
	{$project:{
		_id:0
	}}], function(err,res){
		console.log(res);
		})


//4. Pickup & Drop:

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.aggregate([{
	$match:{
		amenities:/.*Pickup & Drop.*/
	}},
	{$project:{
		_id:0
	}}], function(err,res){
		console.log(res);
		})


//5. Wifi:

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.aggregate([{
	$match:{
		amenities:/.*Wifi.*/
	}},
	{$project:{
		_id:0
	}}], function(err,res){
		console.log(res);
		})


//6. Gym:

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.aggregate([{
	$match:{
		amenities:/.*Gym.*/
	}},{$project:{
		_id:0
	}}], function(err,res){
		console.log(res);
		})


//7. Search hotel by price:

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.aggregate([{
	$match:{
		room_price:{$lte:500}
	}},{$project:{
		_id:0
	}}], function(err,res){
		console.log(res);
		})


//8. Search by hotel name and city:

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.find( {
	$and:[ {
		"property_name" : { 
			$regex : new RegExp("hotel samrat", "i") 
		}},{"city" : { 
			$regex : new RegExp("Jhansi", "i") 
		}} ]} , function(err,res){
		console.log(res);
		})

//Search by hotel name and amenities:

//6.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.find( {
	$and:[ {
		"property_name" : { 
			$regex : new RegExp("hotel samrat", "i") 
		}},{"amenities" : { 
			$regex : new RegExp(/.*AC.*/, "i") 
		}} ]} , function(err,res){
		console.log(res);
		})

//7.
 var mongojs = require('mongojs');
 var db = mongojs('project',['hotel']);
 db.hotel.find( {
	$and:[ {
		"property_name" : { 
			$regex : new RegExp("kapurthala guest house", "i") 
		}},{"amenities" : { 
			$regex : new RegExp(/.*Pickup & Drop.*/, "i") 
		}} ]} , function(err,res){
		console.log(res);
		})

//8.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.find( {
	$and:[ {
		"property_name" : { 
			$regex : new RegExp("The Riverwood Forest Retreats", "i") 
		}},{"amenities" : { 
			$regex : new RegExp(/.*Gym.*/, "i") 
		}} ]} , function(err,res){
		console.log(res);
		})
//9.

 var mongojs = require('mongojs');
 var db = mongojs('project',['hotel']);
 db.hotel.find( {
	$and:[ {
		"property_name" : { 
			$regex : new RegExp("tranquility homestay", "i") 
		}},{"amenities" : { 
			$regex : new RegExp(/.*Wifi.*/, "i") 
		}} ]} , function(err,res){
		console.log(res);
		})

//10. Search by hotel name and price:

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.find({
	$and: [ { 
		"property_name" : { 
			$regex : new RegExp("hotel samrat", "i") 
		} }, { room_price : {$lte:500} 
	} ] } , function(err,res){
		console.log(res);
		})


//Search by city and amenities:

//11.
  var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.find( {
	$and:[ {"city" : { 
		$regex : new RegExp("Jhansi", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*AC.*/, "i") 
	}} ]}, function(err,res){
		console.log(res);
		})


//12.

  var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.find( {
	$and:[ {"city" : { 
		$regex : new RegExp("Jhansi", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Pickup & Drop.*/, "i") 
	}} ]},function(err,res){
		console.log(res);
		})


//13.

  var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);
db.hotel.find( {
	$and:[ {"city" : { 
		$regex : new RegExp("Jhansi", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Wifi.*/, "i") 
	}} ]},function(err,res){
		console.log(res);
		})


//14.

  var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

  db.hotel.find( {
	$and:[ {"city" : { 
		$regex : new RegExp("Jalpaiguri", "i")
	 }},{"amenities" : { 
		$regex : new RegExp(/.*Gym.*/, "i") 
	}} ]} ,function(err,res){
		console.log(res);
		})

//15. Search by city and price:

var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

  db.hotel.find({
	$and: [ { "city" : { 
		$regex : new RegExp("Jhansi", "i") 
		} }, { room_price : {$lte:500} 
	} ] } ,function(err,res){
		console.log(res);
		})


//Search by price and amenities:

//16.

  var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

  db.hotel.find( {
	$and:[ {
		room_price : {$lte:500} 
	},{"amenities" : { 
		$regex : new RegExp(/.*AC.*/, "i") 
	}} ]}  ,function(err,res){
		console.log(res);
		})


//17.

  var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

  db.hotel.find( {
	$and:[ {
		room_price : {$lte:500} },{"amenities" : { 
			$regex : new RegExp(/.*Wifi.*/, "i") 
	}} ]} ,function(err,res){
		console.log(res);
		})

//18.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

  db.hotel.find( {
	$and:[ {
		room_price : {$lte:500} 
		},{"amenities" : { 
			$regex : new RegExp(/.*Pickup & Drop.*/, "i") 
		}} ]},function(err,res){
		console.log(res);
		})


//19.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

  db.hotel.find( {
	$and:[ {
		room_price : {$lte:500} 
		},{"amenities" : { 
			$regex : new RegExp(/.*Gym.*/, "i") }
		} ]} ,function(err,res){
		console.log(res);
		})


//20. Search by hotel name, city and price:

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

  db.hotel.find({
	$and: [ { "city" : { 
		$regex : new RegExp("Jhansi", "i") 
	} }, {"property_name" : { 
		$regex : new RegExp("hotel samrat", "i") 
	}},{ room_price : {$lte:1000} 
	} ] } ,function(err,res){
		console.log(res);
		})


Search by hotel name, city and amenities:

//21.
 
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

  db.hotel.find({
	$and: [ { "city" : { 
		$regex : new RegExp("Jhansi", "i")
	 } }, {"property_name" : { 
		$regex : new RegExp("hotel samrat", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*AC.*/, "i") 
	}} ] } ,function(err,res){
		console.log(res);
		})

//22.
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

  db.hotel.find({
	$and: [ { "city" : { 
		$regex : new RegExp("jamshedpur", "i") 
	} }, {"property_name" : { 
		$regex : new RegExp("Tranquility Homestay", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Wifi.*/, "i") 
	}} ] } ,function(err,res){
		console.log(res);
		})

//23.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { "city" : { 
		$regex : new RegExp("kapurthala", "i") 
	} }, {"property_name" : { 
		$regex : new RegExp("Kapurthala Guest House", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Pickup & Drop.*/, "i") 
	}} ] } ,function(err,res){
		console.log(res);
		})


//24.

var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { "city" : { 
		$regex : new RegExp("Jalpaiguri", "i") 
	} }, {"property_name" : { 
		$regex : new RegExp("The Riverwood Forest Retreats", "i") 
	}},{"amenities" : { $regex : 
		new RegExp(/.*Gym.*/, "i") }
	} ] } ,function(err,res){
		console.log(res);
		})


//Search by hotel name, amenities and price:

//25.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:1000}  }, {"property_name" : {
			 $regex : new RegExp("hotel samrat", "i") 
		}},{"amenities" : { 
			$regex : new RegExp(/.*AC.*/, "i") }
		} ] } ,function(err,res){
		console.log(res);
		})

//26.
 
 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { room_price : {$lte:2000}  
	}, {"property_name" : { 
		$regex : new RegExp("Tranquility Homestay", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Wifi.*/, "i") }
	} ] },function(err,res){
		console.log(res);
		})


//27.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
	room_price : {$lte:2000}  
	}, {"property_name" : { 
		$regex : new RegExp("Kapurthala Guest House", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Pickup & Drop.*/, "i") }
	} ] },function(err,res){
		console.log(res);
		})

//28.
 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:4000}  
	}, {"property_name" : { 
		$regex : new RegExp("The Riverwood Forest Retreats", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Gym.*/, "i") }
	} ] },function(err,res){
		console.log(res);
		})


//Search by amenities, price and city:

//29.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:1000}  
	}, {"city" : { 
		$regex : new RegExp("Jhansi", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*AC.*/, "i") 
	}} ] },function(err,res){
		console.log(res);
		})


//30.

var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:1000}  
	}, {"city" : { 
		$regex : new RegExp("Jhansi", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*AC.*/, "i") 
	}} ] },function(err,res){
		console.log(res);
		})

//31.
 
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:2000}  
	}, {"city" : { 
		$regex : new RegExp("kapurthala", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Pickup & Drop.*/, "i") 
	}} ] },function(err,res){
		console.log(res);
		})

//32.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:4000}  
		}, {"city" : { 
			$regex : new RegExp("Jalpaiguri", "i") 
		}},{"amenities" : { 
			$regex : new RegExp(/.*Gym.*/, "i") 
		}} ] },function(err,res){
		console.log(res);
		})


//Search by hotel name, amenities, price and city:

//33.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:1000}  
	},{"city" : { 
		$regex : new RegExp("Jhansi", "i") 
	}}, {"property_name" : { 
		$regex : new RegExp("hotel samrat", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*AC.*/, "i") 
	}} ] },function(err,res){
		console.log(res);
		})


//34.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:4000}  
	},{"city" : { 
		$regex : new RegExp("Jalpaiguri", "i") 
	}}, {"property_name" : { 
		$regex : new RegExp("The Riverwood Forest Retreats", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Wifi.*/, "i") 
	}} ] },function(err,res){
		console.log(res);
		})


//35.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:4000}  
	},{"city" : { 
		$regex : new RegExp("Jalpaiguri", "i") 
	}}, {"property_name" : { 
		$regex : new RegExp("The Riverwood Forest Retreats", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Pickup & Drop.*/, "i") 
	}} ] },function(err,res){
		console.log(res);
		})


//36.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find({
	$and: [ { 
		room_price : {$lte:4000}  
	},{"city" : { 
		$regex : new RegExp("Jalpaiguri", "i") 
	}}, {"property_name" : { 
		$regex : new RegExp("The Riverwood Forest Retreats", "i") 
	}},{"amenities" : { 
		$regex : new RegExp(/.*Gym.*/, "i") 
	}} ] },function(err,res){
		console.log(res);
		})

//Searching with sorting:

//*Sort according to price:

//37.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.aggregate([{
	$match:{
		room_price:{$lte:500}
	}},{$project:{
		_id:0
	}},{$sort:{
		room_price : 1}
	}],function(err,res){
		console.log(res);
		})
//38.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.find( {
	$and:[ {
		room_price : {$lte:2000} 
	},{"amenities" : { 
		$regex : new RegExp(/.*AC.*/, "i") 
	}} ]},{$sort:{room_price:-1}},function(err,res){
		console.log(res);
		})


//*Sort according to star rating:

//39.

 var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

   db.hotel.aggregate([{
	$match:{
		room_price:{$lte:500}
	}},{$project:{
		_id:0}
	},{$sort:
		{hotel_star_rating : 1
	}}],{$sort:{room_price:-1}},function(err,res){
		console.log(res);
		})



//** Similarly, all above queries can be sorted according to given criteria.





