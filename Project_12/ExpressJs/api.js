const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/Zomato', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};
// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//Login
router.post('/login', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find({ $and: [{ "Username": req.body.username }, { "Password": req.body.password }] })
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//All Countries sorted by Country Name
router.get('/country', (req, res) => {
   connection((db) => {
       db.collection('zomato_code1')
           .aggregate([
                { "$unwind": "$Country_code" },
                { $group : { _id : "$Country_code", count: {$sum: 1} } }
            ])
           .toArray()
           .then((zomato_code1) => {
               response.data = zomato_code1;
               res.json(response);
           })
           .catch((err) => {
               sendError(err, res);
           });
   });
});

//All Cities sorted by City Name
router.get('/city', (req, res) => {
    connection((db) => {
        db.collection('zomato_code1')
            .distinct("City")
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Specific City by selecting a Country sorted by City Name
router.get('/city/:name', (req, res) => {
    var id = req.params.name;
    connection((db) => {
        db.collection('zomato_code1')
            .distinct("City", {"Country_code.Country": id})
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Restaurants in a Country sorted by Rating
router.get('/country/Zomato/:name', (req, res) => {
    var id = req.params.name;
    connection((db) => {
        db.collection('zomato_code1')
            .find({"Country_code.Country": id}, { _id: 0, Country_code: 0 })
            .sort({Rating: -1})
            .toArray()
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Zomato in a City sorted by Rating
router.get('/city/Zomato/:name', (req, res) => {
    var id = req.params.name;
    connection((db) => {
        db.collection('zomato_code1')
            .find({"City": id}, { _id: 0, Country_code: 0 })
            .sort({Rating: -1})
            .toArray()
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Restaurants in a City within a Country sorted by Rating
router.get('/countity/Zomato/:countname/:cityname', (req, res) => {
    var c1 = req.params.countname;
    var c2 = req.params.cityname;
    connection((db) => {
        db.collection('zomato_code1')
            .find({"Country_code.Country": c1, "City": c2}, { _id: 0, Country_code: 0 })
            .sort({Rating: -1})
            .toArray()
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Restaurant search by name when no city or country is selected
router.get('/name/Zomato/:name', (req, res) => {
    var id = req.params.name;
    connection((db) => {
        db.collection('zomato_code1')
            .find({"Restaurant_Name" : { '$regex' : id, '$options' : 'i' } }, { _id: 0, Country_code: 0 })
            .sort({Rating: -1})
            .toArray()
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Restaurant search by name when country is selected but city is not selected
router.get('/countryname/Zomato/:countname/:name', (req, res) => {
    var c1 = req.params.countname;
    var id = req.params.name;
    connection((db) => {
        db.collection('zomato_code1')
            .find({ $and: [{"Restaurant_Name": { '$regex' : id, '$options' : 'i' } }, {"Country_code.Country": c1}]}, { _id: 0, Country_code: 0 })
            .sort({Rating: -1})
            .toArray()
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Restaurant search by name when country is not selected but city is selected
router.get('/cityname/Zomato/:countname/:name', (req, res) => {
    var c1 = req.params.countname;
    var id = req.params.name;
    connection((db) => {
        db.collection('zomato_code1')
            .find({ $and: [{"Restaurant_Name": { '$regex' : id, '$options' : 'i' } }, {"City": c1}]}, { _id: 0, Country_code: 0 })
            .sort({Rating: -1})
            .toArray()
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Restaurant search by name when both country & city are selected
router.get('/countityname/Zomato/:countname/:cityname/:name', (req, res) => {
    var c1 = req.params.countname;
    var c2 = req.params.cityname;
    var id = req.params.name;
    connection((db) => {
        db.collection('zomato_code1')
            .find({ $and: [{"Restaurant_Name": { '$regex' : id, '$options' : 'i' } }, {"Country_code.Country": c1}, {"City": c2}]}, { _id: 0, Country_code: 0 })
            .sort({Rating: -1})
            .toArray()
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Restaurant search by Delivery Option when both country & city are selected
router.get('/delivery/Zomato/:countname/:cityname', (req, res) => {
    var c1 = req.params.countname;
    var c2 = req.params.cityname;
    connection((db) => {
        db.collection('zomato_code1')
            .find({ $and: [{"Country_code.Country": c1}, {"City": c2}, {"Has_Online_Delivery": "Yes"}]}, { _id: 0, Country_code: 0 })
            .sort({Rating: -1})
            .toArray()
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Restaurant search by Cuisine Option when both country & city are selected
router.get('/cuisine/Zomato/:countname/:cityname/:cuisine', (req, res) => {
    var c1 = req.params.countname;
    var c2 = req.params.cityname;
    var c3 = []; var c4 = [];
    c3 = req.params.cuisine.split(',');
    for(var i=0;i<c3.length;i++) {
        var str = ' ' + c3[i];
        c4.push(str);
    }
    var c5 = c3.concat(c4);
    connection((db) => {
        db.collection('zomato_code1')
            .find({ $and: [{"Country_code.Country": c1}, {"City": c2}, {"Cuisines": { "$in" : c5} }]}, { _id: 0, Country_code: 0 })
            .sort({Rating: -1})
            .toArray()
            .then((zomato_code1) => {
                response.data = zomato_code1;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;

//Document Layout
// {
//     "_id" : ObjectId("5b2d6d6e640cdb80d7fbe774"),
//     "City" : "Taguig City",
//     "Address" : "Ground Floor, Netlima Building, 4th Avenue Corner 26th Street, Bonifacio Global City, Taguig City",
//     "Locality" : "Bonifacio Global City",
//     "Longitude" : 121.04622,
//     "Latitude" : 14.549337,
//     "Cuisines" : [
//         "Cafe",
//         " Bakery",
//         " American",
//         " Italian"
//     ],
//     "Currency" : "Botswana Pula(P)",
//     "Votes" : 392,
//     "Country_code" : [
//         {
//             "_id" : ObjectId("5b32de6c9569abae11b3435f"),
//             "Country_Code" : 162,
//             "Country" : "Phillipines"
//         }
//     ],
//     "Restaurant_Id" : 6308205,
//     "Restaurant_Name" : "Wildflour Cafe + Bakery",
//     "Country_Code" : 162,
//     "Locality_Verbose" : "Bonifacio Global City, Taguig City",
//     "Avg_Two" : 1500,
//     "Has_Table_Booking" : "Yes",
//     "Has_Online_Delivery" : "No",
//     "Is_Delivering_Now" : "No",
//     "Price_Range" : 4,
//     "Rating" : 4.4,
//     "Switch_To_Order_Menu" : "No",
//     "Rating_Color" : "Green",
//     "Rating_Text" : "Very Good"
// }
