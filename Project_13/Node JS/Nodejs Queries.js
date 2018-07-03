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

// 6. Display list of bike according Maker to as checked in Filter. Here user has checked  'KTM' & 'Honda'
    	db.bike.find(
    		          {Make: {$in:[/.*KTM.*/i, /.*Honda.*/i]}},
   		          {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	            function(err,res){
    			             console.log(res)
    		          }
    	)

// 7. Display number of records when multiple Make's name is checked in Filter
    	db.bike.find(
    		          {Make: {$in:[/.*KTM.*/i, /.*Honda.*/i]}},
   		          {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	            function(err,res){
    			             console.log(res.length)
    		          }
    	)

//8. Display bike which lie in the the Price range as set by user.Here Price range is [900,10000]
    	db.bike.find({$and:[
    		                  {Price: {$gte:900}},
    		                  {Price: {$lte:10000}},
    	                   ]
                    },
    		            {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	              function(err,res){
    			                console.log(res)
    		            }
      )

//9. Display number of records fetched for a  given Price range as selected in Filter
    	db.bike.find({$and:[
    		                  {Price: {$gte:900}},
    		                  {Price: {$lte:10000}},
    	                   ]
                    },
    		            {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
    	              function(err,res){
    			                console.log(res.length)
    		            }
      )

//10. Display bikes which lie in the range of Feedback Percentage as set by user.Here Feedback percentage range is [8.1,9.9]
      db.bike.find({$and:[
      	                 {Feedback_Perc: {$gte:8.1.1}},
      	                 {Feedback_Perc: {$lte:9.9}},
                       ]
                    },
      	            {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
      	            function(err,res){
      			             console.log(res)
      		          }
      )

//11. Display number of records fetched for a given Feedback percentage range as selected in Filter
    	db.bike.find({$and:[
      	                 {Feedback_Perc: {$gte:8.1.1}},
      	                 {Feedback_Perc: {$lte:9.9}},
                       ]
                    },
      	            {_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1},
      	            function(err,res){
      			             console.log(res.length)
      		          }
      )

/*-------------------------------------------------------------------------------------------------------*/
// Sort:

//12. Fetches bikes according to multiple makers selected in Filter and sort them according to Price from high to low
  		db.bike.aggregate([
  			                 {$match:
  			                      {Make: {$in:[/.*KTM.*/i, /.*Honda.*/i]}},
  			                 },
  		                   {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
  			                 {$sort:{Price:-1}}
  		                  ],
                        function(err,res){
  			                     console.log(res)
  		                  }
  		)

//13. Fetches bikes according to multiple makers selected in Filter and sort them according to Price from low to high
    	db.bike.aggregate([
    		                  {$match:
    		                      {Make: {$in:[/.*KTM.*/i, /.*Honda.*/i]}},
    		                  },
    	                    {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                  {$sort:{Price:1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//14. Fetches bikes according to multiple makers selected in Filter and sort them according to feedback percentage from high to low
    	db.bike.aggregate([
    		                  {$match:
    		                      {Make: {$in:[/.*KTM.*/i, /.*Honda.*/i]}},
    		                  },
    	                    {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                  {$sort:{Feedback_Perc:-1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//15. Fetches bikes according to multiple makers selected in Filter and sort them according to feedback percentage from low to high
    	db.bike.aggregate([
    		                  {$match:
    		                        {Make: {$in:[/.*KTM.*/i, /.*Honda.*/i]}},
    		                  },
    	                    {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                  {$sort:{Feedback_Perc:1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
      )

//16. Fetches bikes according to Price range selected in Filter and sort them according to Price from high to low
    	db.bike.aggregate([
    		                  {$match:
    	                       {$and:[
    		                         {Price: {$gte:900}},
    		                         {Price: {$lte:10000}}
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

//17. Fetches bikes according to Price range selected in Filter and sort them according to Price from low to high
    	db.bike.aggregate([
    		                  {$match:
    	                       {$and:[
    		                         {Price: {$gte:900}},
    		                         {Price: {$lte:10000}}
    	                          ]
                              }
    		                  },
    		                  {$project:{_id:1,Model:1,Make:1,Price:1,Feedback_Perc:1}},
    		                  {$sort:{Price:1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//18. Fetches bikes according to Price range selected in Filter and sort them according to feedback percentage from high to low
    	db.bike.aggregate([
    		                  {$match:
    	                       {$and:[
    		                         {Price: {$gte:900}},
    		                         {Price: {$lte:10000}}
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

//19. Fetches bikes according to Price range selected in Filter and sort them according to feedback percentage from low to high
      db.bike.aggregate([
      		                {$match:
      	                     {$and:[
      		                       {Price: {$gte:900}},
    		                         {Price: {$lte:10000}}
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
