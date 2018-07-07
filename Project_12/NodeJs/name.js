//This query will be fired when the user selects only the name of a restaurant as his/her Search criteria

var mongojs =  require('mongojs');
var db = mongojs('Zomato',['zomato_code']);
var Restaurant_Name = "Gopala Hari";
db.zomato_code.aggregate([{
  $match:{
    "Restaurant Name":Restaurant_Name
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
