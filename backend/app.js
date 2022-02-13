const express = require("express");
const mongoose = require("mongoose");  // Require mongoose library
const cors = require('cors');
//Adding better logging functionality
const morgan = require("morgan");
//In the production systems, we should not hardcode the sensitive data like API Keys, 
//Secret Tokens, etc directly within the codebase (based on the Twelve factor App method). 
// We will pass them as environment variables. This module helps us to load environment variables from a .env file into process.env
require("dotenv").config();   // Require the dotenv

const app = express();  //Create new instance

//import the general_information model schema from another file
let InvestorModel = require('./models/investor');

////import the cfcworker_client_activity model schema from another file
//let cfcworker_client_activityModel = require('./models/cfcworker_client_activity');

// setting up mongoose DB connection
mongoose
  .connect(process.env.MONGO_URL)   // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const PORT = process.env.PORT || 27017; //Declare the port number

app.use(cors());
app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode


//***************Start of Investor Form  Jose Zelaya***********
// endpoint that will create a general information document - Create Operation
app.post('/investor', (req, res, next) => {

    InvestorModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          // res.json(data)
          res.send('Investor Form Information is added to the database');
        }
    });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/investors', (req, res, next) => {
    //very plain way to get all the data from the collection through the mongoose schema
    InvestorModel.find((error, data) => {
        if (error) {
          //here we are using a call to next() to send an error message back
          return next(error)
        } else {
          res.json(data)
        }
      })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/investor/:id', (req, res, next) => {
    //find data based on the client id for the collection client form information
    InvestorModel.findOne({ Investor_ID: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            // Sending 404 when not found something is a good practice
          res.status(404).send('Investor Form Information not found');
        }
        else {
          res.json(data)
        }
    });
});

// Updating - editing client form information - using PUT by clientID  - Update Operation
app.put('/investor/:id', (req, res, next) => {
  //Update data in the client form information table based on client id 
  InvestorModel.findOneAndUpdate({ Investor_ID: req.params.id }, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.send('Investor Form Information is edited via PUT');
          console.log('Investor Form Information successfully updated!', data)
        }
      })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/investor/:id', (req, res, next) => {
    
    //mongoose will use clientID of document to delete 
    InvestorModel.findOneAndRemove({ Investor_ID: req.params.id}, (error, data) => {
        if (error) {
          return next(error);
        } else {
           res.status(200).json({
             msg: data
           });
        //  res.send('Student is deleted');
        }
      });
});
//*****************End of Client Form************



//***************Start of CFC Worker Client Activity Jose Zelaya***********

//This will create data into the collection cfcworker_client_activity   
app.post('/cfcworker_client_activity', (req, res, next) => {
//this will create or add data into the collection one 
  cfcworker_client_activityModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
        res.send('CFC Worker Client Activity is added to the database');
      }
  });
});

//create an endpoint to get all CFC Worker Client Activity from the API  -Read Operation
app.get('/cfcworker_client_activitys/', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  cfcworker_client_activityModel.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// endpoint for retrieving CFC Worker Client Activity by _id - Read Operation 2
app.get('/cfcworker_client_activity/:id', (req, res, next) => {
  //will retieve one piece of information from this collection based on _id
  cfcworker_client_activityModel.findOne({ _id: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('CFC Worker Client Activity not found');
      }
      else {
        res.json(data)
      }
  });
});

// Updating - editing CFC Worker Client Activity - using PUT by _id  - Update Operation
app.put('/cfcworker_client_activity/:id', (req, res, next) => {
  //will update one based on a given _id
  cfcworker_client_activityModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('CFC Worker Client Activity is edited via PUT');
        console.log('CFC Worker Client Activity successfully updated!', data)
      }
    })
});

//delete a CFC Worker Client Activity by _id  -Delete Operation 
app.delete('/cfcworker_client_activity/:id', (req, res, next) => {
  
  //mongoose will use _id of document to find one and remove it 
  cfcworker_client_activityModel.findOneAndRemove({ _id: req.params.id}, (error, data) => {
      if (error) {
        return next(error);
      } else {
         res.status(200).json({
           msg: data
         });
      
      }
    });
});

//***************end of CFC Worker Client Activity Jose Zelaya***********

/*Get route to do aggregate from gernal inforamtion model and cfc worker client activity
Retrieve first name , last name and client id from general information  
Then retrive all the activity content from the cfcworker cleint activity 
that matches based on client ID  --Jose Zelaya*/ 
app.get('/client_info/:id', (req, res, next) => {


  cfcworker_client_activityModel.aggregate([
    { $match : { clientID: (req.params.id) } },  //match client id if so retrieve that data
    { $project : {_id:0 ,clientID : 1,clientProgram: 1, shortNotes: 1, startDate: 1 , timeSpent:1, usedServices: 1, needAddressed:1, relManagerID: 1} },  //retrieve these fieldnames from the genral information schema
    { $lookup : {         //aggregate or lookup on the collection cfcworker_client_activity
        from : 'client_form',
        localField : 'clientID',
        foreignField : 'clientID',
        as : 'client_form',
    } }
  ],
   (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
  });
});
//End of aggregate 

//Supervisor View by client ID view specific data over client activities --Jose Zelaya 
app.get('/supervisor_view/:id', (req, res, next) => {


  cfcworker_client_activityModel.aggregate([
    { $match : { clientID: (req.params.id) } },  //look for match of client id
    { $project : {_id:0, clientID : 1, relManagerID: 1, clientProgram: 1, startDate: 1, timeSpent: 1 } }, //pull these fieldnames from the collection
    
  
  ],
   (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
  });
});
//End of Supervisor View  --Jose Zelaya


app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) 
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});