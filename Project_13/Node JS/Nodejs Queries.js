// Node Query

/*Setup:
import modules in your js file using:
Here 'mongojs' is predefined package
database name: PRO
collection name: bike*/
var mongojs= require('mongojs')
var db=mongojs('PRO',['bike'])

/*-------------------------------------------------------------------------------------------------------*/
// Search:
// 1. Search by Maker name. Here 'KTM' is the keyword being searched .
      db.bike.find(
      		        {Make: /.*KTM.*/i},
      		        {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
      		        function(err,res){
      			           console.log(res)
      		             }
      )

// 2. Display number of records when searched by Maker name.
      db.bike.find(
      		        {Make: /.*KTM.*/i},
      		        {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
      		        function(err,res){
      			           console.log(res.length)
      		             }
      )

// 3. Search by Model's name. Here 'FXR' is the keyword being searched.
    	db.bike.find(
    		          {Model: /.*FXR.*/i},
    		          {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	            function(err,res){
    			             console.log(res)
    		          }
    	)

// 5. Display number of records when searched by Model's name.
    	db.bike.find(
    		          {Model: /.*FXR.*/i},
    		          {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	            function(err,res){
    			             console.log(res.length)
    		          }
    	)

/*-------------------------------------------------------------------------------------------------------*/

// Filter:

// 6. Display list according to manufacturers as checked in Filter. Here user has checked  'hornby' & 'kato'
    	db.bike.find(
    		          {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		          {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	            function(err,res){
    			             console.log(res)
    		          }
    	)

// 7. Display number of records when multiple manufacturers name is checked in Filter
    	db.bike.find(
    		          {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		          {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	            function(err,res){
    			             console.log(res.length)
    		          }
    	)

//8. Display product which lie in the the Price range as set by user.Here Price range is [10,100]
    	db.bike.find({$and:[
    		                  {Price: {$gte:10}},
    		                  {Price: {$lte:100}},
    	                   ]
                    },
    		            {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	              function(err,res){
    			                console.log(res)
    		            }
      )

//9. Display number of records fetched for a  given Price range as selected in Filter
    	db.bike.find({$and:[
    		                  {Price: {$gte:10}},
    		                  {Price: {$lte:100}},
    	                   ]
                    },
    		            {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	              function(err,res){
    			               console.log(res.length)
    		            }
      )

//10. Display products which lie in the the Rate range as set by user.Here Price range is [10,100]
      db.bike.find({$and:[
      	                 {Feedback_Perc: {$gte:3.1}},
      	                 {Feedback_Perc: {$lte:5}},
                       ]
                    },
      	            {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
      	            function(err,res){
      			             console.log(res)
      		          }
      )

//11. Display number of records fetched for a  given Rate range as selected in Filter
    	db.bike.find({$and:[
    		                  {Price: {$gte:10}},
    		                  {Price: {$lte:100}}
    	                   ]
                    },
    		            {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	              function(err,res){
    			               console.log(res.length)
    		            }
      )

/*-------------------------------------------------------------------------------------------------------*/
// Sort
//12. Fetches product according to multiple manfacturer selected in Filter and sort them according to Price from high to low
  		db.bike.aggregate([
  			                 {$match:
  			                      {manufacturer: {$in:[/hornby/i, /Kato/i]}}
  			                 },
  		                   {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
  			                 {$sort:{Price:-1}}
  		                  ],
                        function(err,res){
  			                     console.log(res)
  		                  }
  		)

//13. Fetches product according to multiple manfacturer selected in Filter and sort them according to Price from low to high
    	db.bike.aggregate([
    		                  {$match:
    		                      {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		                  },
    	                    {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                  {$sort:{Price:1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//14. Fetches product according to multiple manfacturer selected in Filter and sort them according to average rating from high to low
    	db.bike.aggregate([
    		                  {$match:
    		                      {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		                  },
    	                    {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                  {$sort:{Feedback_Perc:-1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//15. Fetches product according to multiple manfacturer selected in Filter and sort them according to average rating from low to high
    	db.bike.aggregate([
    		                  {$match:
    		                        {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		                  },
    	                    {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                  {$sort:{Feedback_Perc:1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
      )

//16. Fetches product according to Price range selected in Filter and sort them according to Price from high to low
    	db.bike.aggregate([
    		                  {$match:
    	                       {$and:[
    		                         {Price: {$gte:10}},
    		                         {Price: {$lte:100}}
    	                          ]
                              }
    		                  },
    		                  {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                  {$sort:{Price:-1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//17. Fetches product according to Price range selected in Filter and sort them according to Price from low to high
    	db.bike.aggregate([
    		                  {$match:
    	                       {$and:[
    		                         {Price: {$gte:10}},
    		                         {Price: {$lte:100}}
    	                           ]}
    		                     },
    		                     {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                     {$sort:{Price:1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//18. Fetches product according to Price range selected in Filter and sort them according to average rating from high to low
    	db.bike.aggregate([
    		                  {$match:
    	                       {$and:[
    		                         {Price: {$gte:10}},
    		                         {Price: {$lte:100}}
    	                          ]
                              }
    		                   },
    		                   {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                   {$sort:{Feedback_Perc:-1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//19. Fetches product according to Price range selected in Filter and sort them according to average rating from low to high
      db.bike.aggregate([
      		                {$match:
      	                     {$and:[
      		                       {Price: {$gte:10}},
      		                       {Price: {$lte:100}}
      	                        ]
                              }
      		                 },
      		                 {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
      		                 {$sort:{Feedback_Perc:1}}
      	                  ],
                          function(err, res){
      		                    console.log(res)
      	                  }
      )
