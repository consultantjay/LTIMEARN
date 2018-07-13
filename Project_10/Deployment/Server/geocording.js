var NodeGeocoder = require('node-geocoder');
var options = {
provider: 'google',
httpAdapter: 'https', 
apiKey: 'AIzaSyBxlHaX-MF1tQYJhjpk3w1aJwToJ2Di3BQ',
  formatter: null         
};

var geocoder = NodeGeocoder(options);

var express=require("express");
var app=express();

app.use (function(req, res, next) {
 var data='';
req.setEncoding('utf8');
req.on('data', function(chunk) { 
data += chunk;
 });

req.on('end', function() {
req.body = data;
next();
 });
});


app.post('/getGeoLocation',function(request,response){
var json=JSON.parse(request.body);

var places=[];
for(let place of json){
places.push(place.location);
}



geocoder.batchGeocode(places, function (err, results) {
  // Return an array of type {error: false, value: []}
response.json(results);
});

}); 

 
app.listen(3000,function(){
console.log('app running on 3000 port !');
});
