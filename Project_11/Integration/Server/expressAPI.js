var express = require('express');
var cors = require('cors');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongojs = require('mongojs');
var db = mongojs('LTI',['restopedia']);

app.use(cors());
app.use(express.static(__dirname));

//Service call to list restaurants
app.get('/home', function(req, res){
  db.restopedia.find({}, function(err,docs){
	res.json(docs);		
     }
  )
});

app.listen(3000);
console.log("Server is running on port 3000...");
