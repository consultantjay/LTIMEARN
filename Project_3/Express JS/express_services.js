var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongojs = require('mongojs');
var db = mongojs('pizza_res',['res']);
app.use(express.static(__dirname));

//-------------------------------------------------------

//Fetch data by city
app.get("/city/:city",function(req,res){
	db.res.find({city:req.params.city},function(err,docs){
		if(err) console.log(err);
		res.json(docs);
	});
});

//Fetch data by pizza
app.get("/pizza_name/:pizza_name",function(req,res){
	db.res.find({"menus.name":req.params.pizza_name},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by restaurant
app.get("/restaurant_name/:restaurant_name",function(req,res){
	db.res.find({name:req.params.restaurant_name},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by city and pizza
app.get("/city_and_pizza_name/:city/:pizza_name",function(req,res){
	db.res.find({city:req.params.city,"menus.name":req.params.pizza_name},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by city and restaurant
app.get("/city_and_restaurant_name/:city/:restaurant_name",function(req,res){
	db.res.find({city:req.params.city,name:req.params.restaurant_name},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by pizza and restaurant
app.get("/pizza_name_and_restaurant_name/:pizza_name/:restaurant_name",function(req,res){
	db.res.find({"menus.name":req.params.pizza_name,name:req.params.restaurant_name},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by city, pizza and restaurant
app.get("/city_and_pizza_name_and_restaurant_name/:city/:pizza_name/:restaurant_name",function(req,res){
	db.res.find({city:req.params.city,"menus.name":req.params.pizza_name,name:req.params.restaurant_name},function(err,docs){
		res.json(docs);
	});
});

//Fetch latitude and longitude by city
app.get("/lat_long/:city",function(req,res){
	db.res.find({city:req.params.city},{latitude:1,longitude:1,_id:0},function(err,docs){
		res.json(docs);
	});
});

//--------------------------------------Low to high sorting by amount

//Fetch data by city in ascending order
app.get("/LTH_city/:city",function(req,res){
	db.res.aggregate({$match:{city:req.params.city}},{$sort:{"menus.amount":1}},function(err,docs){
		if(err) console.log(err);
		res.json(docs);
	});
});

//Fetch data by pizza in ascending order
app.get("/LTH_pizza_name/:pizza_name",function(req,res){
	db.res.aggregate({$match:{"menus.name":req.params.pizza_name}},{$sort:{"menus.amount":1}},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by restaurant in ascending order
app.get("/LTH_restaurant_name/:restaurant_name",function(req,res){
	db.res.aggregate({$match:{name:req.params.restaurant_name}},{$sort:{"menus.amount":1}},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by city and pizza in ascending order
app.get("/LTH_city_and_pizza_name/:city/:pizza_name",function(req,res){
	db.res.aggregate({$match:{"city":req.params.city,"menus.name":req.params.pizza_name}},{$sort:{"menus.amount":1}},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by city and restaurant in ascending order
app.get("/LTH_city_and_restaurant_name/:city/:restaurant_name",function(req,res){
	db.res.aggregate({$match:{"city":req.params.city,"name":req.params.restaurant_name}},{$sort:{"menus.amount":1}},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by pizza and restaurant in ascending order
app.get("/LTH_pizza_name_and_restaurant_name/:pizza_name/:restaurant_name",function(req,res){
	db.res.aggregate([{$match:{"menus.name":req.params.pizza_name,"name":req.params.restaurant_name}},{$sort:{"menus.amount":1}}],function(err,docs){
		res.json(docs);
	});
});

//Fetch data by city, pizza and restaurant in ascending order
app.get("/LTH_city_and_pizza_name_and_restaurant_name/:city/:pizza_name/:restaurant_name",function(req,res){
	db.res.aggregate([{$match:{"city":req.params.city,"menus.name":req.params.pizza_name,"name":req.params.restaurant_name}},{$sort:{"menus.amount":1}}],function(err,docs){
		res.json(docs);
	});
});

//-------------------------------------------High to low sorting by amount

//Fetch data by city in descending order
app.get("/HTL_city/:city",function(req,res){
	db.res.aggregate({$match:{city:req.params.city}},{$sort:{"menus.amount":-1}},function(err,docs){
		if(err) console.log(err);
		res.json(docs);
	});
});

//Fetch data by pizza in descending order
app.get("/HTL_pizza_name/:pizza_name",function(req,res){
	db.res.aggregate({$match:{"menus.name":req.params.pizza_name}},{$sort:{"menus.amount":-1}},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by restaurant in descending order
app.get("/HTL_restaurant_name/:restaurant_name",function(req,res){
	db.res.aggregate({$match:{name:req.params.restaurant_name}},{$sort:{"menus.amount":-1}},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by city and pizza in descending order
app.get("/HTL_city_and_pizza_name/:city/:pizza_name",function(req,res){
	db.res.aggregate({$match:{"city":req.params.city,"menus.name":req.params.pizza_name}},{$sort:{"menus.amount":-1}},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by city and restaurant in descending order
app.get("/HTL_city_and_restaurant_name/:city/:restaurant_name",function(req,res){
	db.res.aggregate({$match:{"city":req.params.city,"name":req.params.restaurant_name}},{$sort:{"menus.amount":-1}},function(err,docs){
		res.json(docs);
	});
});

//Fetch data by pizza and restuarant in descending order
app.get("/HTL_pizza_name_and_restaurant_name/:pizza_name/:restaurant_name",function(req,res){
	db.res.aggregate([{$match:{"menus.name":req.params.pizza_name,"name":req.params.restaurant_name}},{$sort:{"menus.amount":-1}}],function(err,docs){
		res.json(docs);
	});
});

//Fetch data by city, pizza and restaurant in descending order
app.get("/HTL_city_and_pizza_name_and_restaurant_name/:city/:pizza_name/:restaurant_name",function(req,res){
	db.res.aggregate([{$match:{"city":req.params.city,"menus.name":req.params.pizza_name,"name":req.params.restaurant_name}},{$sort:{"menus.amount":-1}}],function(err,docs){
		res.json(docs);
	});
});

//------------------------------------pattern matching

//Fetch city name by matching substring of given city name
app.get("/PM_city/:city",function(req,res){
	db.res.find({city:new RegExp('.*'+req.params.city+'.*','i')},{city:1,_id:0},function(err,docs){
		res.json(docs);
	});
});

//Fetch pizza name by matching substring of given pizza name
app.get("/PM_pizza_name/:pizza_name",function(req,res){
	db.res.find({"menus.name":new RegExp('.*'+req.params.pizza_name+'.*','i')},{"menus.name":1,_id:0},function(err,docs){
		res.json(docs);
	});
});

//Fetch restaurant name by matching substring of given restaurant name
app.get("/PM_restaurant_name/:restaurant_name",function(req,res){
	db.res.find({name:new RegExp('.*'+req.params.restaurant_name+'.*','i')},{name:1,_id:0},function(err,docs){
		res.json(docs);
	});
});

app.listen(3000);
console.log("Server running at 3000 port number");