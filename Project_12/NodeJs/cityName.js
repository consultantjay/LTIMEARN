var mongojs =  require('mongojs');
var db = mongojs('Zomato',['zomato_code']);
var City = "Pune";
var Restaurant_Name = "Mineority By Saby";
db.zomato_code.aggregate([{
  $match:{
    "City":City,"Restaurant Name":Restaurant_Name
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
