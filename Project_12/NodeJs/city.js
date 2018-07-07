var mongojs =  require('mongojs');
var db = mongojs('Zomato',['zomato_code']);
var City = "Pune";
db.zomato_code.aggregate([{
  $match:{
    "City":City
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
