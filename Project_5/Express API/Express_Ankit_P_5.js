//1.Search on the basis of city.
//Try with 'manali'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/city/:city',function(req,res)
	{
		console.log(req.params.city);
		db.hotel.find({"city":req.params.city},{_id:0,property_name:1,city:1,state:1},function(err,docs){res.json(docs);
		})
	});
app.listen(3000);
console.log("Running on port 3000");

//2.User input is City and Hotel star rating.
//Try with 'manali/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/city&&hotel_star_rating/:city/:hotel_star_rating',function(req,res)
	{
		console.log(req.params.city);
		console.log(req.params.hotel_star_rating);
			db.hotel.find({$and:[{"city":req.params.city},{"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}}]},
										{_id:0,property_name:1,city:1,state:1},
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");

//3.Requirement is on the basis of Hotel Star Rating
//Try putting in '3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/hotel_star_rating/:hotel_star_rating',function(req,res)
	{
		console.log(req.params.hotel_star_rating);
		db.hotel.find({"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");

//4.Searching a particular hotel
//Try with 'Global Village Ooty'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/hotel_name/:hotel_name',function(req,res)
		{
			console.log(req.params.hotel_name);
			db.hotel.find({"property_name":req.params.hotel_name},
										{_id:0,property_name:1,state:1,city:1},
											function(err,docs){res.json(docs);
											})
										});
app.listen(3000);
console.log("Running on port 3000");

//5.User requirement on the basis of Room Availability
//Try with '3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/room_count/:room_count',function(req,res)
	{
		console.log(req.params.room_count);
		db.hotel.find({"room_count":{$gte:parseInt(req.params.room_count)}},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//6.User input is City and Hotel Name.
//Try with 'manali/Hotel Mountain Face'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/city&&hotel_name/:city/:hotel_name',function(req,res)
	{
		console.log(req.params.city);
		console.log(req.params.hotel_name);
		db.hotel.find({$and:[{"city":req.params.city},{"property_name":req.params.hotel_name}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//7.User input is Hotel Name and Hotel star rating.
//Try with 'Hotel Mountain Face/2'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/hotel_name&&hotel_star_rating/:hotel_name/:hotel_star_rating',function(req,res)
	{
		console.log(req.params.hotel_name);
		console.log(req.params.hotel_star_rating);
		db.hotel.find({$and:[{"property_name":req.params.hotel_name},{"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//8.User input is Hotel name and Room Count
//Try with 'Khirsu By GMVN/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/hotel_name&&room_count/:hotel_name/:room_count',function(req,res)
	{
		console.log(req.params.hotel_name);
		console.log(req.params.room_count);
		db.hotel.find({$and:[{"property_name":req.params.hotel_name},{"room_count":{$gte:parseInt(req.params.room_count)}}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//9.User input is City and Room count.
//Try with 'manali/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/city&&room_count/:city/:room_count',function(req,res)
	{
		console.log(req.params.city);
		console.log(req.params.room_count);
		db.hotel.find({$and:[{"city":req.params.city},{"room_count":{$gte:parseInt(req.params.room_count)}}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//10.User input is Hotel Star Rating and Room count.
//Try with '5/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/hotel_star_rating&&room_count/:hotel_star_rating/:room_count',function(req,res)
	{
		console.log(req.params.hotel_star_rating);
		console.log(req.params.room_count);
		db.hotel.find({$and:[{"hotel_star_rating":parseInt(req.params.hotel_star_rating)},{"room_count":{$gte:parseInt(req.params.room_count)}}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//11.User input is Hotel Name,Hotel Star Rating and Room count.
//Try with 'Hotel Mountain Face/2/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/hotel_name&&hotel_star_rating&&room_count/:hotel_name/:hotel_star_rating/:room_count',function(req,res)
	{
		console.log(req.params.hotel_name);
		console.log(req.params.hotel_star_rating);
		console.log(req.params.room_count);
		db.hotel.find({$and:[{"property_name":req.params.hotel_name},
									{"hotel_star_rating":parseInt(req.params.hotel_star_rating)},
									{"room_count":{$gte:parseInt(req.params.room_count)}}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//12. Search using hotel name , city name and room count
//Try with 'Hotel Mountain Face/manali/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/hotel_name&&city&&room_count/:hotel_name/:city/:room_count',function(req,res)
	{
		console.log(req.params.hotel_name);
		console.log(req.params.city);
		console.log(req.params.room_count);
		db.hotel.find({$and:[{"property_name":req.params.hotel_name},{"room_count":{$gte:parseInt(req.params.room_count)}},{"city":req.params.city}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//13. Search using hotel name , city name and hotel star rating
//Try with 'Hotel Mountain Face/manali/2'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/hotel_name&&city&&hotel_star_rating/:hotel_name/:city/:hotel_star_rating',function(req,res)
	{
		console.log(req.params.hotel_name);
		console.log(req.params.city);
		console.log(req.params.hotel_star_rating);
		db.hotel.find({$and:[{"property_name":req.params.hotel_name},{"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}},{"city":req.params.city}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//14. Search using city name, Room count and hotel star rating
//Try with '2/manali/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/room_count&&city&&hotel_star_rating/:room_count/:city/:hotel_star_rating',function(req,res)
	{
		console.log(req.params.room_count);
		console.log(req.params.city);
		console.log(req.params.hotel_star_rating);
		db.hotel.find({$and:[{"room_count":parseInt(req.params.room_count)},{"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}},{"city":req.params.city}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//15.Using all the search boxes.
//Try with '2/manali/2/Hotel Mountain Face'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/room_count&&city&&hotel_star_rating&&hotel_name/:room_count/:city/:hotel_star_rating/:hotel_name',function(req,res)
	{
		console.log(req.params.room_count);
		console.log(req.params.hotel_name);
		console.log(req.params.city);
		console.log(req.params.hotel_star_rating);
		db.hotel.find({$and:[{"property_name":req.params.hotel_name},
									{"room_count":parseInt(req.params.room_count)},
									{"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}},
									{"city":req.params.city}]},
									{_id:0,property_name:1,city:1,state:1},
									function(err,docs){res.json(docs);
									})
								});
app.listen(3000);
console.log("Running on port 3000");


//16.Search on the basis of city.(Including sorting filters)
//Try with 'manali'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/city/:city',function(req,res)
	{
		console.log(req.params.city);
		db.hotel.aggregate([{$match:{$and:[{city:"gurgaon"}]}},
												{$project:{room_type:1,property_name:1,hotel_star_rating:1,city:1,_id:0}},
												{$sort:{hotel_star_rating:+1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");

//17.User input is City and Hotel star rating.(Including sorting filters.)
//Try with 'manali/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/city&&hotel_star_rating/:city/:hotel_star_rating',function(req,res)
	{
		console.log(req.params.city);
		console.log(req.params.hotel_star_rating);
		db.hotel.aggregate([{$match:{$and:[{"city":req.params.city},{"hotel_star_rating":parseInt(req.params.hotel_star_rating)}]}},
												{$project:{room_type:1,property_name:1,hotel_star_rating:1,city:1,site_review_count:1,_id:0}},
												{$sort:{site_review_count:-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//18.Requirement is on the basis of Hotel Star Rating(Including sort Filters)
//Try putting in '3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/hotel_star_rating/:hotel_star_rating',function(req,res)
	{
		console.log(req.params.hotel_star_rating);
		db.hotel.aggregate([{$match:{$and:[{"hotel_star_rating":parseInt(req.params.hotel_star_rating)}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{site_review_count:-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");

//19.Searching a particular hotel(Including Sort Filters)
//Try with 'Global Village Ooty'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/hotel_name/:hotel_name',function(req,res)
	{
		console.log(req.params.hotel_name);
		db.hotel.aggregate([{$match:{$and:[{"property_name":req.params.hotel_name}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{hotel_star_rating:-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");

//20.User requirement on the basis of Room Availability(Including Rating sort filter)
//Try with '3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/room_count/:room_count',function(req,res)
	{
		console.log(req.params.room_count);
		db.hotel.aggregate([{$match:{$and:[{"room_count":{$gte:parseInt(req.params.room_count)}}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"hotel_star_rating":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//21.User input is City and Hotel Name.(Including rating sort filter)
//Try with 'manali/Hotel Mountain Face'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/city&&hotel_name/:city/:hotel_name',function(req,res)
	{
		console.log(req.params.city);
		console.log(req.params.hotel_name);
		db.hotel.aggregate([{$match:{$and:[{"city":req.params.city},{"property_name":req.params.hotel_name}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"hotel_star_rating":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//22.User input is Hotel Star Rating and Room count.(Including rating sorting filters)
//Try with '5/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/hotel_star_rating&&room_count/:hotel_star_rating/:room_count',function(req,res)
	{
		console.log(req.params.hotel_star_rating);
		console.log(req.params.room_count);
		db.hotel.aggregate([{$match:{$and:[{"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}},{"room_count":{$gte:parseInt(req.params.room_count)}}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"hotel_star_rating":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//23. Search using hotel name , city name and room count(Including sorting on the basis of rating)
//Try with 'Hotel Mountain Face/manali/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/hotel_name&&city&&room_count/:hotel_name/:city/:room_count',function(req,res)
	{
		console.log(req.params.hotel_name);
		console.log(req.params.city);
		console.log(req.params.room_count);
		db.hotel.aggregate([{$match:{$and:[{"property_name":req.params.hotel_name},{"city":req.params.city},{"room_count":{$gte:parseInt(req.params.room_count)}}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"hotel_star_rating":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//24.Using all the search boxes.(Including filter sorting on Rating basis)
//Try with '2/manali/2/Hotel Mountain Face'


var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/room_count&&city&&hotel_star_rating&&hotel_name/:room_count/:city/:hotel_star_rating/:hotel_name',function(req,res)
	{
		console.log(req.params.room_count);
		console.log(req.params.hotel_name);
		console.log(req.params.city);
		console.log(req.params.hotel_star_rating);

		db.hotel.aggregate([{$match:{$and:[{"property_name":req.params.hotel_name},{"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}},{"city":req.params.city},{"room_count":{$gte:parseInt(req.params.room_count)}}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"hotel_star_rating":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//25.Search on the basis of city.(Including sorting filters)
//Try with 'manali'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/city/:city',function(req,res)
	{
		console.log(req.params.city);
		db.hotel.aggregate([{$match:{$and:[{city:"gurgaon"}]}},
												{$project:{room_type:1,property_name:1,hotel_star_rating:1,site_review_count:1,city:1,_id:0}},
												{$sort:{site_review_count:-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");

//26.User input is City and Hotel star rating.(Including sorting filters.)
//Try with 'manali/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/city&&hotel_star_rating/:city/:hotel_star_rating',function(req,res)
	{
		console.log(req.params.city);
		console.log(req.params.hotel_star_rating);
		db.hotel.aggregate([{$match:{$and:[{"city":req.params.city},{"hotel_star_rating":parseInt(req.params.hotel_star_rating)}]}},
												{$project:{room_type:1,property_name:1,hotel_star_rating:1,city:1,site_review_count:1,_id:0}},
												{$sort:{hotel_star_rating:-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//27.Requirement is on the basis of Hotel Star Rating(Including sort Filters)
//Try putting in '3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/hotel_star_rating/:hotel_star_rating',function(req,res)
	{
		console.log(req.params.hotel_star_rating);
		db.hotel.aggregate([{$match:{$and:[{"hotel_star_rating":parseInt(req.params.hotel_star_rating)}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{site_review_count:-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//28.Searching a particular hotel(Including Sort Filters)
//Try with 'Global Village Ooty'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/hotel_name/:hotel_name',function(req,res)
	{
		console.log(req.params.hotel_name);
		db.hotel.aggregate([{$match:{$and:[{"property_name":req.params.hotel_name}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{site_review_count:-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");

//29.User requirement on the basis of Room Availability(Including  sort filter)
//Try with '3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/room_count/:room_count',function(req,res)
	{
		console.log(req.params.room_count);
		db.hotel.aggregate([{$match:{$and:[{"room_count":{$gte:parseInt(req.params.room_count)}}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"site_review_count":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//30.User input is City and Hotel Name.(Including sort filter)
//Try with 'manali/Hotel Mountain Face'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder
//Service call for list users

/*app.get('/list',function(req,res){
		db.hotel.find(function(err,docs){res.json(docs);
})
});*/
	app.get('/city&&hotel_name/:city/:hotel_name',function(req,res)
	{
		console.log(req.params.city);
		console.log(req.params.hotel_name);
		db.hotel.aggregate([{$match:{$and:[{"city":req.params.city},{"property_name":req.params.hotel_name}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"site_review_rating":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//31.User input is Hotel Star Rating and Room count.(Including  sorting filters)
//Try with '5/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/hotel_star_rating&&room_count/:hotel_star_rating/:room_count',function(req,res)
	{
		console.log(req.params.hotel_star_rating);
		console.log(req.params.room_count);
		db.hotel.aggregate([{$match:{$and:[{"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}},{"room_count":{$gte:parseInt(req.params.room_count)}}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"site_review_count":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//32. Search using hotel name , city name and room count(Including sorting on the basis of review)
//Try with 'Hotel Mountain Face/manali/3'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/hotel_name&&city&&room_count/:hotel_name/:city/:room_count',function(req,res)
	{
		console.log(req.params.hotel_name);
		console.log(req.params.city);
		console.log(req.params.room_count);
		db.hotel.aggregate([{$match:{$and:[{"property_name":req.params.hotel_name},{"city":req.params.city},{"room_count":{$gte:parseInt(req.params.room_count)}}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"site_review_count":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


//33.Using all the search boxes.(Including filter sorting on Review count basis)
//Try with '2/manali/2/Hotel Mountain Face'

var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('Project',['hotel']);
app.use(express.static(__dirname)); //to tell server that this is root folder

	app.get('/room_count&&city&&hotel_star_rating&&hotel_name/:room_count/:city/:hotel_star_rating/:hotel_name',function(req,res)
	{
		console.log(req.params.room_count);
		console.log(req.params.hotel_name);
		console.log(req.params.city);
		console.log(req.params.hotel_star_rating);
		db.hotel.aggregate([{$match:{$and:[{"property_name":req.params.hotel_name},{"hotel_star_rating":{$gte:parseInt(req.params.hotel_star_rating)}},{"city":req.params.city},{"room_count":{$gte:parseInt(req.params.room_count)}}]}},
												{$project:{room_type:1,site_review_count:1,property_name:1,hotel_star_rating:1,_id:0}},
												{$sort:{"site_review_count":-1}}],
												function(err,docs){res.json(docs);
												})
											});
app.listen(3000);
console.log("Running on port 3000");


/*****************************************************************************/
