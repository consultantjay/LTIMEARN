// Node Query

/*Setup:
import modules in your js file using:
Here 'mongojs' is predefined package
database name: amazon
collection name: toys*/
var mongojs= require('mongojs')
var db=mongojs('amazon',['toys'])

/*-------------------------------------------------------------------------------------------------------*/
// Home:
// 1. Fetch 9 products to display on Home Page
      db.toys.find(
      	           {},
      	           {_id:0,uniq_id:1,product_name:1,price:1}
                 ).limit(9,function(err,res){
      	                   console.log(res)
                         })

/*-------------------------------------------------------------------------------------------------------*/
// Search:
// 2. Search by product name. Here 'steam' is the keyword being searched .
      db.toys.find(
      		        {product_name: /steam/i},
      		        {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
      		        function(err,res){
      			           console.log(res)
      		             }
      )

// 3. Display number of records when searched by product name.
      db.toys.find(
      		        {product_name: /steam/i},
      		        {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
      		        function(err,res){
      			           console.log(res.length)
      		        }
      )

// 4. Search by manufacturer's name. Here 'hornby' is the keyword being searched.
    	db.toys.find(
    		          {manufacturer: /hornby/i},
    		          {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
    	            function(err,res){
    			             console.log(res)
    		          }
    	)

// 5. Display number of records when searched by manufacturer's name.
    	db.toys.find(
    		          {manufacturer: /hornby/i},
    		          {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
    	            function(err,res){
    			             console.log(res.length)
    		          }
    	)

/*-------------------------------------------------------------------------------------------------------*/

// Filter:
// 6. Display list according to manufacturers as checked in Filter. Here user has checked  'hornby' & 'kato'
    	db.toys.find(
    		          {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		          {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
    	            function(err,res){
    			             console.log(res)
    		          }
    	)

// 7. Display number of records when multiple manufacturers name is checked in Filter
    	db.toys.find(
    		          {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		          {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
    	            function(err,res){
    			             console.log(res.length)
    		          }
    	)

//8. Display product which lie in the the Price range as set by user.Here price range is [10,100]
    	db.toys.find({$and:[
    		                  {price: {$gte:10}},
    		                  {price: {$lte:100}},
    	                   ]
                    },
    		            {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
    	              function(err,res){
    			                console.log(res)
    		            }
      )

//9. Display number of records fetched for a  given price range as selected in Filter
    	db.toys.find({$and:[
    		                  {price: {$gte:10}},
    		                  {price: {$lte:100}},
    	                   ]
                    },
    		            {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
    	              function(err,res){
    			               console.log(res.length)
    		            }
      )

//10. Display products which lie in the the Rate range as set by user.Here price range is [10,100]
      db.toys.find({$and:[
      	                 {average_review_rating: {$gte:3.1}},
      	                 {average_review_rating: {$lte:5}},
                       ]
                    },
      	            {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
      	            function(err,res){
      			             console.log(res)
      		          }
      )

//11. Display number of records fetched for a  given Rate range as selected in Filter
    	db.toys.find({$and:[
    		                  {price: {$gte:10}},
    		                  {price: {$lte:100}}
    	                   ]
                    },
    		            {_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1},
    	              function(err,res){
    			               console.log(res.length)
    		            }
      )

/*-------------------------------------------------------------------------------------------------------*/
// Sort
//12. Fetches product according to multiple manfacturer selected in Filter and sort them according to price from high to low
  		db.toys.aggregate([
  			                 {$match:
  			                      {manufacturer: {$in:[/hornby/i, /Kato/i]}}
  			                 },
  		                   {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
  			                 {$sort:{price:-1}}
  		                  ],
                        function(err,res){
  			                     console.log(res)
  		                  }
  		)

//13. Fetches product according to multiple manfacturer selected in Filter and sort them according to price from low to high
    	db.toys.aggregate([
    		                  {$match:
    		                      {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		                  },
    	                    {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
    		                  {$sort:{price:1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//14. Fetches product according to multiple manfacturer selected in Filter and sort them according to average rating from high to low
    	db.toys.aggregate([
    		                  {$match:
    		                      {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		                  },
    	                    {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
    		                  {$sort:{average_review_rating:-1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//15. Fetches product according to multiple manfacturer selected in Filter and sort them according to average rating from low to high
    	db.toys.aggregate([
    		                  {$match:
    		                        {manufacturer: {$in:[/hornby/i, /Kato/i]}},
    		                  },
    	                    {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
    		                  {$sort:{average_review_rating:1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
      )

//16. Fetches product according to Price range selected in Filter and sort them according to price from high to low
    	db.toys.aggregate([
    		                  {$match:
    	                       {$and:[
    		                         {price: {$gte:10}},
    		                         {price: {$lte:100}}
    	                          ]
                              }
    		                  },
    		                  {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
    		                  {$sort:{price:-1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//17. Fetches product according to Price range selected in Filter and sort them according to price from low to high
    	db.toys.aggregate([
    		                  {$match:
    	                       {$and:[
    		                         {price: {$gte:10}},
    		                         {price: {$lte:100}}
    	                           ]}
    		                     },
    		                     {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
    		                     {$sort:{price:1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//18. Fetches product according to Price range selected in Filter and sort them according to average rating from high to low
    	db.toys.aggregate([
    		                  {$match:
    	                       {$and:[
    		                         {price: {$gte:10}},
    		                         {price: {$lte:100}}
    	                          ]
                              }
    		                   },
    		                   {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
    		                   {$sort:{average_review_rating:-1}}
    	                   ],
                         function(err, res){
    		                     console.log(res)
    	                   }
    	)

//19. Fetches product according to Price range selected in Filter and sort them according to average rating from low to high
      db.toys.aggregate([
      		                {$match:
      	                     {$and:[
      		                       {price: {$gte:10}},
      		                       {price: {$lte:100}}
      	                        ]
                              }
      		                 },
      		                 {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
      		                 {$sort:{average_review_rating:1}}
      	                  ],
                          function(err, res){
      		                    console.log(res)
      	                  }
      )

//20. Fetches product according to Average Rating range selected in Filter and sort them according to price from low to high
      db.toys.aggregate([
      	                 {$match:
      		                   {$and:[
      		                       {average_review_rating: {$gte:3}},
      		                       {average_review_rating: {$lte:5}}
      		                    ]
                            }
      	                 },
      	                 {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
      	                 {$sort:{price:1}}
                       ],
                       function(err, res){
      		                 console.log(res)
      	               }
      )

//21. Fetches product according to Average Rating range selected in Filter and sort them according to price from  high to low
      db.toys.aggregate([
      	                 {$match:
      		                   {$and:[
      		                       {average_review_rating: {$gte:3}},
      		                       {average_review_rating: {$lte:5}}
      		                       ]
                               }
      	                  },
      	                  {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
      	                  {$sort:{price:-1}}
                        ],
                        function(err, res){
      		                  console.log(res)
      	                }
      )

//22. Fetches product according to Average Rating range selected in Filter and sort them according to average rating from low to high
      db.toys.aggregate([
      	                 {$match:
      		                   {$and:[
      		                       {average_review_rating: {$gte:3}},
      		                       {average_review_rating: {$lte:5}}
      		                       ]
                               }
      	                  },
      	                  {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
      	                  {$sort:{average_review_rating:1}}
                        ],
                        function(err, res){
      		                  console.log(res)
      	                }
      )

//23. Fetches product according to Average Rating range selected in Filter and sort them according to average rating from high to low
      db.toys.aggregate([
      	                 {$match:
      		                   {$and:[
      		                       {average_review_rating: {$gte:3}},
      		                       {average_review_rating: {$lte:5}}
      		                       ]
                               }
      	                  },
      	                  {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
      	                  {$sort:{average_review_rating:-1}}
      		               ],
                         function(err, res){
      		                   console.log(res)
      	                 }
      )
