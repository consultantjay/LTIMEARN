var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongojs = require('mongojs');
var db = mongojs('LTI',['restopedia']);

app.use(express.static(__dirname));

//Search restaurants by name:
app.get('/:name', function(req, res){
   var name = req.params.name;
   db.restopedia.aggregate([ 
      { $match: {Name:name} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },  
      { $sort: {Rating:-1} }],     
      function(err, docs){
         res.json(docs);
      } 
   );
});

//Search restaurants by country:
app.get('/:country', function(req, res){
   var country = req.params.country;
   db.restopedia.aggregate([ 
      { $match: {Country:country} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },      
      { $sort: {Rating:-1} }],        
      function(err, docs){     
         res.json(docs);  
      }  
   );
});

//Search restaurants by city:
app.get('/:city', function(req, res){
   var city = req.params.city;
   db.restopedia.aggregate([ 
      { $match: {City:city} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  }, 
      { $sort: {Rating:-1} }],       
      function(err, docs){    
         res.json(docs);   
      }    
   );
});

//Search restaurants by name and city:
app.get('/:name/:city', function(req, res){
   var name = req.params.name;
   var city = req.params.city;
   db.restopedia.aggregate([ 
      { $match: {Name:name, City:city} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  }, 
      { $sort: {Rating:-1} }],      
      function(err, docs){   
         res.json(docs);   
      }    
   );
});

//Search restaurants by name and country:
app.get('/:name/:country', function(req, res){
   var name = req.params.name;
   var country = req.params.country;
   db.restopedia.aggregate([ 
      { $match: {Name:name, Country:country} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },      
      { $sort: {Rating:-1} }],        
      function(err, docs){    
         res.json(docs);   
      }    
   );
});

//Search restaurants by name and country:
app.get('/:country/:city', function(req, res){
   var country = req.params.country;
   var city = req.params.city;
   db.restopedia.aggregate([ 
      { $match: {Country:country, City:city} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },      
      { $sort: {Rating:-1} }],        
      function(err, docs){    
         res.json(docs);   
      }    
   );
});

//Search restaurants by country and cuisine:
app.get('/:country/:cuisine', function(req, res){
   var country = req.params.country;
   var cuisine = req.params.cuisine;
   db.restopedia.aggregate([ 
      { $match: {Country:country, Cuisine:cuisine} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  }, 
      { $sort: {Rating:-1} }],      
      function(err, docs){  
         res.json(docs);   
      }    
   );
});

//Search restaurants by country and visitor:
app.get('/:country/:visitor', function(req, res){
   var country = req.params.country;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([   
      { $match: {Country:country, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },      
      { $sort: {Rating:-1} }],         
      function(err, docs){    
         res.json(docs);   
      }    
   );
});

//Search restaurants by city and cuisine:
app.get('/:city/:cuisine', function(req, res){
   var city = req.params.city;
   var cuisine = req.params.cuisine;
   db.restopedia.aggregate([   
      { $match: {City:city, Cuisine:cuisine} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },     
      { $sort: {Rating:-1} }],       
      function(err, docs){
         res.json(docs);   
      }    
   );
});

//Search restaurants by city and visitor:
app.get('/:city/:visitor', function(req, res){
   var city = req.params.city;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([ 
      { $match: {City:city, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },    
      { $sort: {Rating:-1} }],       
      function(err, docs){  
         res.json(docs);  
      }    
   );
});

//Search restaurants by name, country, cuisine and visitor:
app.get('/:name/:country/:cuisine/:visitor', function(req, res){
   var name = req.params.name;
   var country = req.params.country;
   var cuisine = req.params.cuisine;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([ 
      { $match: {Name:name, Country:country, Cuisine:cuisine, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },      
      { $sort: {Rating:-1} }],        
      function(err, docs){    
         res.json(docs);  
      }    
   );
});

//Search restaurants by name, city, cuisine and visitor:
app.get('/:name/:city/:cuisine/:visitor', function(req, res){
   var name = req.params.name;
   var city = req.params.city;
   var cuisine = req.params.cuisine;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([ 
      { $match: {Name:name, City:city, Cuisine:cuisine, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },     
      { $sort: {Rating:-1} }],        
      function(err, docs){    
         res.json(docs);    
      }    
   );
});

//Search restaurants by city, country, cuisine and visitor:
app.get('/:country/:city/:cuisine/:visitor', function(req, res){
   var country = req.params.country;
   var city = req.params.city;
   var cuisine = req.params.cuisine;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([ 
      { $match: {Country:country, City:city, Cuisine:cuisine, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },    
      { $sort: {Rating:-1} }],      
      function(err, docs){   
         res.json(docs);  
      }   
   );
});

//Search by name, country and city:
app.get('/:name/:country/:city', function(req, res){
   var name = req.params.name;
   var country = req.params.country;
   var city = req.params.city;
   db.restopedia.aggregate([   
      { $match: {Name:name, Country:country, City:city} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },      
      { $sort: {Rating:-1} }],        
      function(err, docs){     
         res.json(docs);    
      }    
   );
});

//Search by name, country and cuisine:
app.get('/:name/:country/:cuisine', function(req, res){
   var name = req.params.name;
   var country = req.params.country;
   var cuisine = req.params.cuisine;
   db.restopedia.aggregate([   
      { $match: {Name:name, Country:country, Cuisine:cuisine} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },       
      { $sort: {Rating:-1} }],        
      function(err, docs){    
         res.json(docs);   
      }    
   );
});

//Search by name, country and visitor:
app.get('/:name/:country/:visitor', function(req, res){
   var name = req.params.name;
   var country = req.params.country;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([ 
      { $match: {Name:name, Country:country, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },      
      { $sort: {Rating:-1} }],        
      function(err, docs){    
         res.json(docs);   
      }    
   );
});

//Search by name, city and cuisine:
app.get('/:name/:city/:cuisine', function(req, res){
   var name = req.params.name;
   var city = req.params.city;
   var cuisine = req.params.cuisine;
   db.restopedia.aggregate([ 
      { $match: {Name:name, City:city, Cuisine:cuisine} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },     
      { $sort: {Rating:-1} }],   
      function(err, docs){  
         res.json(docs);  
      }    
   );
});

//Search by name, city and visitor:
app.get('/:name/:city/:visitor', function(req, res){
   var name = req.params.name;
   var city = req.params.city;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([ 
      { $match: {Name:name, City:city, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },     
      { $sort: {Rating:-1} }],        
      function(err, docs){    
         res.json(docs);   
      }  
   );
});

//Search by country, cuisine and visitor:
app.get('/:country/:cuisine/:visitor', function(req, res){
   var country = req.params.country;
   var cuisine = req.params.cuisine;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([   
      { $match: {Country:country, Cuisine:cuisine, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },      
      { $sort: {Rating:-1} }],         
      function(err, docs){     
         res.json(docs);    
      }    
   );
});

//Search by country, city and cuisine:
app.get('/:country/:city/:cuisine', function(req, res){
   var country = req.params.country;
   var city = req.params.city;
   var cuisine = req.params.cuisine;
   db.restopedia.aggregate([   
      { $match: {Country:country,City:city, Cuisine:cuisine} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },     
      { $sort: {Rating:-1} }],       
      function(err, docs){   
         res.json(docs); 
      }    
   );
});

//Search by country, city and visitor:
app.get('/:country/:city/:visitor', function(req, res){
   var country = req.params.country;
   var city = req.params.city;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([  
      { $match: {Country:country, City:city, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },      
      { $sort: {Rating:-1} }],       
      function(err, docs){   
         res.json(docs);  
      }   
   );
});

//Search by city, cuisine and visitor:
app.get('/:city/:cuisine/:visitor', function(req, res){
   var city = req.params.city;
   var cuisine = req.params.cuisine;
   var visitor = req.params.visitor;
   db.restopedia.aggregate([   
      { $match: {City:city, Cuisine:cuisine, "Good for(suitable)":visitor} },
      { $project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}  },     
      { $sort: {Rating:-1} }],      
      function(err, docs){   
         res.json(docs);  
      }    
   );
});

app.listen(3000);
console.log("Server is running on port 3000...");
