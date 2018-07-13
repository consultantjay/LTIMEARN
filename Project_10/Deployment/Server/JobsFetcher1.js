var express=require("express");
var app=express();
var bodyParser=require("body-parser");

var jobsFetcher=require("./jobsMongo.js");


function sendData(responseObject,data){
console.log(data);
responseObject.json(data);
}



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



app.post('/JobsPortal',function(request,response){
var json=JSON.parse(request.body);
console.log(json);
console.log(JSON.stringify(request.body));
jobsFetcher.fetchData(json,response,sendData);
});

var NodeGeocoder = require('node-geocoder');
var options = {
provider: 'google',
httpAdapter: 'https', 
apiKey: 'AIzaSyBxlHaX-MF1tQYJhjpk3w1aJwToJ2Di3BQ', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

app.post('/JobsPortal/getGeoLocation',function(request,response){
var json=JSON.parse(request.body);

var places=[];
for(let place of json){
places.push(place.location);
}
geocoder.batchGeocode(places, function (err, results) {
response.json(results);
}); });




console.log('server up and listening on port 3000');
app.listen(3000);

