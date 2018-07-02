/* Node js APIs */

var mongojs = require('mongojs');
var db = mongojs('pizza_res',['res'])

<------------------------------------------------------------***Search***-------------------------------------------------->

//Search by city:-
db.res.find({city:"Bend"},function(err,res){
	console.log(res);
});

//Search by pizza name
db.res.find({"menus.name":"Hawaiian Pizza"},function(err,res){
	console.log(res);
});

//Search by restaurant name
db.res.find({name:"Little Pizza Paradise"},function(err,res){
	console.log(res);
});

//Search by city and restaurant name
db.res.find({"city":"Bend","name":"Little Pizza Paradise"},function(err,res){
	console.log(res);
});

//Search by city and pizza name
db.res.find({"city":"Bend","menus.name":"Bianca Pizza"},function(err,res){
	console.log(res);
});

//Search by pizza name and restaurant name
db.res.find({"menus.name":"Bianca Pizza","name":"Little Pizza Paradise"},function(err,res){
	console.log(res);
});

//Search by city, pizza name and restaurant name
db.res.find({"city":"Bend","menus.name":"Bianca Pizza","name":"Little Pizza Paradise"},function(err,res){
	console.log(res);
});

//Fetch latitude and longitude by city
db.res.find({city:"Bend"},{latitude:1,longitude:1,_id:0},function(err,res){
	console.log(res);
});

<-------------------------------------------------------***Sorting in ascending order***--------------------------------------------->

//Search by city and sort by amount in ascending order
db.res.aggregate({$match:{city:"Bend"}},{$sort:{"menus.amount":1}},function(err,res){
	console.log(res);
});

//Search by pizza name and sort by amount in ascending order
db.res.aggregate({$match:{"menus.name":"Hawaiian Pizza"}},{$sort:{"menus.amount":1}},function(err,res){
	console.log(res);
});

//Search by restaurant name and sort by amount in ascending order
/* Search data where restaurant name is "Little Pizza Paradise" in ascending order of amount:- */
db.res.aggregate({$match:{name:"Little Pizza Paradise"}},{$sort:{"menus.amount":1}},function(err,res){
	console.log(res);
});

//Search by city and pizza name  and sort by amount in ascending order
db.res.aggregate({$match:{"city":"Bend","menus.name":"Bianca Pizza"}},{$sort:{"menus.amount":1}},function(err,res){
	console.log(res);
});

//Search by city and restaurant name and sort by amount in ascending order
db.res.aggregate({$match:{"city":"Bend","name":"Little Pizza Paradise"}},{$sort:{"menus.amount":1}},function(err,res){
	console.log(res);
});

//Search by pizza name and restaurant name and sort by amount in ascending order
db.res.aggregate([{$match:{"menus.name":"Bianca Pizza","name":"Little Pizza Paradise"}}],{$sort:{"menus.amount":1}}],function(err,res){
	console.log(res);
});

//Search by pizza name and sort by amount in ascending order
db.res.aggregate([{$match:{"city":"Bend","menus.name":"Bianca Pizza","name":"Little Pizza Paradise"}}],{$sort:{"menus.amount":1}}],function(err,res){
	console.log(res);
});

<-------------------------------------------------------***Sorting in descending order***--------------------------------------------->

//Search by city and sort by amount in descending order
db.res.aggregate({$match:{city:"Bend"}},{$sort:{"menus.amount":-1}},function(err,res){
	console.log(res);
});

//Search by pizza name and sort by amount in descending order
db.res.aggregate({$match:{"menus.name":"Hawaiian Pizza"}},{$sort:{"menus.amount":-1}},function(err,res){
	console.log(res);
});

//Search by restaurant name and sort by amount in descending order
db.res.aggregate({$match:{name:"Little Pizza Paradise"}},{$sort:{"menus.amount":-1}},function(err,res){
	console.log(res);
});

//Search by city and pizza name and sort by amount in descending order
db.res.aggregate({$match:{"city":"Bend","menus.name":"Bianca Pizza"}},{$sort:{"menus.amount":-1}},function(err,res){
	console.log(res);
});

//Search by city and restaurant name and sort by amount in descending order
db.res.aggregate({$match:{"city":"Bend","name":"Little Pizza Paradise"}},{$sort:{"menus.amount":-1}},function(err,res){
	console.log(res);
});

//Search by pizza name and restaurant name and sort by amount in descending order
db.res.aggregate([{$match:{"menus.name":"Bianca Pizza","name":"Little Pizza Paradise"}}],{$sort:{"menus.amount":-1}}],function(err,res){
	console.log(res);
});

//Search by city, pizza name and retaurant name and sort by amount in descending order
db.res.aggregate([{$match:{"city":"Bend","menus.name":"Bianca Pizza","name":"Little Pizza Paradise"}}],{$sort:{"menus.amount":-1}}],function(err,res){
	console.log(res);
});
