
                   var express = require('express');
                   var app = express();
                   var bodyParser = require('body-parser');
                   app.use(bodyParser.json());
                   var mongojs = require('mongojs');
                   var db = mongojs('YELP',['yelp']);
                   app.use(express.static(__dirname));
                   //service call for list users

                   app.get('/keyword_city_categories/:keyword/:city/:categories',function(req,res){
                   console.log(req.params.keyword);
                   console.log(req.params.categories);
                   console.log(req.params.city);
                   var categoriesVal =req.params.categories;
                   var keywordVal = req.params.keyword;
                   var cityVal = req.params.city;
                   db.yelp.aggregate([
                                     {$match:{$and:[{$or:[{"name":new RegExp('.*'+keywordVal+'.*','i')},{"categories":new RegExp('.*'+keywordVal+'.*','i')}]},{"city":cityVal},{"categories":new RegExp('.*'+categoriesVal+'.*','i')}]}},
                                     {$project:{name:1,address:1,city:1,state:1,star:1,is_open:1}}],
                                     function(err,docs){res.json(docs);})
                   });
                   app.listen(3000);
                   console.log("server Running on port 3000");
