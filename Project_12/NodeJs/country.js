//This will be fired when the user selects only a Country as his/her Search criteria.

var mongojs =  require('mongojs');
var db = mongojs('Zomato',['zomato_code']);
var Country = "Phillipines";
db.zomato_code.aggregate([{
  $match:{
    "Country_code.0.Country":Country
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
