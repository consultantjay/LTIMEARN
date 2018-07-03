// NodeJs Queries

/*
Setup:
import modules in your js file using:
Here 'mongojs' is predefined package
database name: bookyourdoctor
collection name (1): doctor
collection name (2): appointment
*/


var mongojs= require('mongojs')
var db=mongojs('bookyourdoctor',['doctor','appointment'])


/*-------------------------------------------------------------------------------------------------------*/
// At Home Page:
//----------To Know Details Of Doctor---------To View Appointment Reciept-------------
// 1. To know details of a Doctor, User can input according to his knowledge to get output.

//  (a): If Name, Specialization, Area is known.

        db.doctor.find( {name:"DR GUPTA AJAY", specialization:"General Surgeon", area:"Aundh"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );


//  (b): If Name, Specialization is known.

        db.doctor.find( {name:"DR GUPTA AJAY", specialization:"General Surgeon"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//  (c): If Name, Area is known.

        db.doctor.find( {name:"DR GUPTA AJAY", area:"Aundh"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//  (d): If Specialization, area is known.

        db.doctor.find( {specialization:"General Surgeon", area:"Aundh"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//   (e): If only name is known.

        db.doctor.find( {name:"DR GUPTA AJAY"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//   (f): If only Specialization is known.

        db.doctor.find( {specialization:"General Surgeon"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                      );
//   (g): If only Area is known.

        db.doctor.find( {area:"Aundh"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );
/*-------------------------------------------------------------------------------------------------------*/
// 2. At Main page, to know Appointment details

        db.appointment.find( {_id:"45899"},
                             {_id:1, p_name:1, p_id:1, date:1, time:1,
                             d_name:1, specialization:1, area:1, p_message:1},
                             function(err,res){
                             console.log(res)
                             }
                           );


/*-------------------------------------------------------------------------------------------------------*/

// 3. At DoctorListing page, to know details

//     (a): If Specialization, qualification, Area,  is known.

        db.doctor.find( {specialization:"General Surgeon", qualification:"MS", area:"Aundh"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//     (b): If Specialization, qualification is known.

        db.doctor.find( {specialization:"General Surgeon", qualification:"MS",},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//     (c): If qualification, Area is known.

        db.doctor.find( {specialization:"MS", area:"Aundh"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//     (d): If Specialization, area is known.

        db.doctor.find( {specialization:"General Surgeon", area:"Aundh"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//     (e): If only name is known.

        db.doctor.find( {name:"DR GUPTA AJAY"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//     (f): If only Specialization is known.

        db.doctor.find( {specialization:"General Surgeon"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );
//     (g): If only Area is known.

        db.doctor.find( {area:"Aundh"},
                        {_id:0,name:1,qualification:1, specialization:1,area:1},
                        function(err,res){
                        console.log(res)
                        }
                      );

//     (h): If only qualification is known.

            db.doctor.find( {qualification:"MS"},
                            {_id:0,name:1,qualification:1, specialization:1,area:1},
                            function(err,res){
                            console.log(res)
                            }
                          );
/*-------------------------------------------------------------------------------------------------------*/
// Detail Of Selected Doctor and Booking Appointment :
// 4. At DoctorDetail page, to know all Details and to Book Appointment

//      (a): When Doctor is selected on "DoctorListing" page, following details will be displayed on "DoctorDetail" page.
             This Query will display Name, Specialization, Qualification, Available Timings, Address, Contact, Area

            db.doctor.find( {name:"DR GUPTA AJAY", specialization:"General Surgeon", qualification:"MS", area:"Aundh"},
                            {_id:0,sno:0},
                            function(err,res){
                            console.log(res)
                            }
                          );

//      (b): For Booking Appointment, Following details will get inserted to a new dataset "Appointment"

            db.appointment.insert( { p_name: "Shyam", p_email: "shyam@xyz.com", date: "12 Dec 2018", time:"1:00",
                                     d_name:"DR GUPTA AJAY", specialization:"General Surgeon", area:"Kothrud",
                                     p_message:"I am suffering from xyz since last night." },
                                     function(err,res){
                                     console.log(res)
                                     }
                                 );

/*-------------------------------------------------------------------------------------------------------*/
