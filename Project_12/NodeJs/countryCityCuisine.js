//This query will be fired when the user selects Country, City and Cuisine as his/her Search criteria.  

var mongojs =  require('mongojs');
var db = mongojs('Zomato',['zomato_code']);
var Country = "India";
var City="Pune";
var Cuisines = "North Indian";
db.zomato_code.aggregate([{
  $match:{
    "Country_code.0.Country":Country, "City":City, "Cuisines":Cuisines
  }},
  {$sort:{
    "Aggregate rating": -1
  }}],
  function(err,res)
  {
    var json=res;
    var x;
    for(x of json){
      console.log(x);
    }
});
