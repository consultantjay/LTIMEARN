//EXPRESS SERVICES
 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 var mongojs = require('mongojs');
 var db = mongojs('project',['hotel']);
 app.use(express.static(__dirname));
 var cors = require('cors');
 app.use(cors())

//1. list
 app.get('/list',function(req,res){
   db.hotel.find(function(err,docs){
    res.json(docs);})
});

//Id
app.get('/list/:id',function(req,res){
  console.log(req.params.id);
  db.hotel.find({"uniq_id":req.params.id},function(err,docs){
    res.json(docs);

  });

//3. Search by City
  app.get('/city/:city',function(req,res){
    db.hotel.aggregate([{$match:{
      city:new RegExp('^'+req.params.city,'i')
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//4.Search by Area
  app.get('/area/:area',function(req,res){
    db.hotel.aggregate([{$match:{
      area:new RegExp('^'+req.params.area,'i')
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//5.Search by Hotel name
  app.get('/hotel_name/:hotel_name',function(req,res){
    db.hotel.aggregate([{$match:{
      property_name:new RegExp('^'+req.params.hotel_name,'i')
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//6.Search by Hotel Category
  app.get('/hotel_category/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      hotel_category:req.params.hotel_category
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//7.Search by City and area
  app.get('/city/:city/area/:area',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,area:req.params.area
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//8.Search by  City and Hotel name
  app.get('/city/:city/hotel_name/:hotel_name',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,property_name:req.params.hotel_name
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//9.Search by  City and Hotel Category
  app.get('/city/:city/hotel_category/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,hotel_category:req.params.hotel_category
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//10.Search by Area and hotel name
  app.get('/area/:area/hotel_name/:hotel_name',function(req,res){
    db.hotel.aggregate([{$match:{
      area:req.params.area,property_name:req.params.hotel_name
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//11.Search by Area and hotel Category
  app.get('/area/:area/hotel_category/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      area:req.params.area,hotel_category:req.params.hotel_category
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//12.Search by Hotel Name and hotel Category
  app.get('/hotel_name/:hotel_name/hotel_category/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      property_name:req.params.hotel_name,hotel_category:req.params.hotel_category
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//13.Search by City, area and Hotel Name
  app.get('/city/:city/area/:area/hotel_name/:hotel_name',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,area:req.params.area,property_name:req.params.hotel_name
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//14.Search by City, area and Hotel category
  app.get('/city/:city/area/:area/hotel_category/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,area:req.params.area,hotel_category:req.params.hotel_category
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//15.Search by area, hotel name and Hotel category
  app.get('/area/:area/property_name/:hotel_name/hotel_category/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      area:req.params.area,property_name:req.params.hotel_name,hotel_category:req.params.hotel_category
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//16.Search by city, hotel name and Hotel category
  app.get('/city/:city/hotel_name/:hotel_name/hotel_category/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,property_name:req.params.hotel_name,hotel_category:req.params.hotel_category
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//17.Search by city,area, hotel name and Hotel category
  app.get('/city/:city/area/:area/hotel_name/:hotel_name/hotel_category/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,area:req.params.area,property_name:req.params.hotel_name,hotel_category:req.params.hotel_category
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//18.Search by City sort
  app.get('/citysort/:city',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city
    }},
    {$sort:{ 
      hotel_star_rating:-1
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//19.Search by Area sort
  app.get('/areasort/:area',function(req,res){
    db.hotel.aggregate([{$match:{
      area:req.params.area
    }},
    {$sort:{
      hotel_star_rating:-1
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//20.Search by Hotel Category sort
  app.get('/hotel_categorysort/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      hotel_category:req.params.hotel_category
    }},
    {$sort:{
      hotel_star_rating:-1
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//21.Search by City and area sort
  app.get('/citysort/:city/areasort/:area',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,area:req.params.area
    }},
    {$sort:{
      hotel_star_rating:-1
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//22.Search by City and Hotel Category sort
  app.get('/citysort/:city/hotel_categorysort/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,hotel_category:req.params.hotel_category
    }},
    {$sort:{
      hotel_star_rating:-1
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//23.Search by Area and hotel Category sort
  app.get('/areasort/:area/hotel_categorysort/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      area:req.params.area,hotel_category:req.params.hotel_category
    }},
    {$sort:{
      hotel_star_rating:-1
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

//24.Search by City, area and  Hotel category sort
  app.get('/citysort/:city/areasort/:area/hotel_categorysort/:hotel_category',function(req,res){
    db.hotel.aggregate([{$match:{
      city:req.params.city,area:req.params.area,hotel_category:req.params.hotel_category
    }},
    {$sort:{
      hotel_star_rating:-1
    }}],
    function(err,docs){
      res.json(docs);
    });
  });

  app.listen(3001);
  console.log("server on");
