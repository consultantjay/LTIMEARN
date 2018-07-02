//*NodeJS Queries:
//''''''''''''''

//*My search bar has four fields including:

	//1.City (In which hotel is situated)
	//2.Hotel Star Rating (Given from 1-5)
	//3.Hotel Name (Name of the Property)
	//4.Room Count (No. of required Rooms)

//Search Queries:
//--------------


//*1.Search by city and hotel star rating


var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);

	db.hotel.find({$and:[{city:"gurgaon"},
			{hotel_star_rating:{$gte:3}}]},
			{_id:0,property_name:1,hotel_description:1},
		
			function(err,res){
				console.log(res);
});



//*2.Search by city

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.find({city:"gurgaon"},{_id:0,property_name:1,hotel_description:1},
		
			function(err,res){
				console.log(res);
});



//*3.Requirement is on the basis of Hotel Star Rating.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.find({hotel_star_rating:{$gte:3}},{_id:0,property_name:1,hotel_description:1},
			
			function(err,res){
				console.log(res);
});



//*4.Search for a Particular hotel.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.find({property_name:"Global Village Ooty"},{_id:0,property_name:1,city:1,state:1,hotel_description:1},
			function(err,res){
				console.log(res);
});



//*5. Checking hotel on the basis of Room Availability.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.find({room_count:{$gte:2}},{_id:0,property_name:1,hotel_description:1},
			function(err,res){
				console.log(res);
});



//*6. Search for a specific hotel in a particular city.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.find({$and:[{city:"manali"},{property_name:"Hotel Mountain Face"}]},{_id:0,hotel_star_rating:1,property_name:1,hotel_description:1},
			
			function(err,res){
				console.log(res);
});



//*7. Search for Hotels in a City with Minimum available Rooms.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.find({$and:[{city:"manali"},{room_count:{$gte:2}}]},{_id:0,hotel_star_rating:1,property_name:1,hotel_description:1},
		
			function(err,res){
				console.log(res);
});




//*8. Hotel Name with atleast required Star Rating 

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.find({$and:[{hotel_star_rating:{$gte:2}},{property_name:"Hotel Mountain Face"}]},{_id:0,hotel_star_rating:1,property_name:1,hotel_description:1},
			
			function(err,res){
				console.log(res);
});




//*9. Hotels with available rooms and required Star rating.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.find({$and:[{hotel_star_rating:{$gte:2}},{room_count:{$gte:2}}]},{_id:0,hotel_star_rating:1,property_name:1,hotel_description:1},
			
			function(err,res){
				console.log(res);
});



//*10.Using all the search fills.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.find({$and:[{city:"manali"},{room_count:{$gte:2}},{hotel_star_rating:{$gte:2}},{property_name:"Hotel Mountain Face"}]},{_id:0,hotel_star_rating:1,property_name:1,hotel_description:1},
			
			function(err,res){
				console.log(res);
});


//-------------------------



//*Machine also includes queries to provide filters for the customers ease. Filter includes :

	//1.City wise sorting
	//2.Available Rooms wise sorting
	//3.Hotel Star Rating wise sorting
	//4.No. of reviews on the Hotel




//*11. Sorting hotels By there Star Rating

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.aggregate([{$match:{$and:[{city:"gurgaon"}]}},{$project:{room_type:1,property_name:1,_id:0}},{$sort:{hotel_star_rating:+1}}],
			
			function(err,res){
				console.log(res);
});




//*12. Sorting Hotel on the basis of number of Reviews recieved.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.aggregate([{$match:{$and:[{city:"gurgaon"}]}},{$project:{room_type:1,property_name:1,_id:0}},{$sort:{site_review_count:+1}}],
		
			function(err,res){
				console.log(res);
});




//*13.Sorting By the number of Available rooms in the Hotel.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.aggregate([{$match:{$and:[{city:"gurgaon"}]}},{$project:{room_type:1,property_name:1,_id:0}},{$sort:{room_count:+1}}],
		
			function(err,res){
				console.log(res);
});




//*14.Sorting Hotels Alphabetically city wise.

var mongojs=require('mongojs');
var db=mongojs('Project',['hotel']);
	
		db.hotel.aggregate([{$match:{$and:[{hotel_star_rating:5}]}},{$project:{property_name:1,room_type:1,_id:0}},{$sort:{city:-1}}],
		
			function(err,res){
				console.log(res);
});