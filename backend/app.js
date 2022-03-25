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

//import the subcontractor model schema from another file
let SubcontractorModel = require('./models/subcontractor');

//import the subcontractor model schema from another file
let EmployeeModel = require('./models/employee');

//import the subcontractor model schema from another file
let ProjectModel = require('./models/project');

//import the subcontractor model schema from another file
let PhaseModel = require('./models/phase');

//import the subcontractor model schema from another file
let StepModel = require('./models/step');

//import the subcontractor model schema from another file
let TaskModel = require('./models/task');





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
    InvestorModel.findOne({ investor_iD: req.params.id}, (error, data) => {
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
  InvestorModel.findOneAndUpdate({ investor_iD: req.params.id }, {
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
    InvestorModel.findOneAndRemove({ investor_iD: req.params.id}, (error, data) => {
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
//*****************End of Investor Form************
//************************************************ */




//***************Start of Subcontractor Form  Jose Zelaya*/

// endpoint that will create a general information document - Create Operation
app.post('/subcontractor', (req, res, next) => {

  SubcontractorModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
        res.send('Subcontractor Form Information is added to the database');
      }
  });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/subcontractors', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  SubcontractorModel.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/subcontractor/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  SubcontractorModel.findOne({ subcontractor_id: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Subcontractor Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});

// Updating - editing Subcontractor form information - using PUT by clientID  - Update Operation
app.put('/subcontractor/:id', (req, res, next) => {
//Update data in the client form information table based on client id 
SubcontractorModel.findOneAndUpdate({ subcontractor_id: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Subcontractor Form Information is edited via PUT');
        console.log('Subcontractor Form Information successfully updated!', data)
      }
    })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/subcontractor/:id', (req, res, next) => {
  
  //mongoose will use clientID of document to delete 
  SubcontractorModel.findOneAndRemove({ subcontractor_id: req.params.id}, (error, data) => {
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

//***************End of Subcontractor Form Jose Zelaya */
//***************************************************** */


//*******************************Start of employee Intake Form*************************************** */
// endpoint that will create a general information document - Create Operation
app.post('/employee', (req, res, next) => {

  EmployeeModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
        res.send('employee Form Information is added to the database');
      }
  });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/employees', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  EmployeeModel.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/employee/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  EmployeeModel.findOne({ employee_id: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('employee Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});

// Updating - editing Subcontractor form information - using PUT by clientID  - Update Operation
app.put('/employee/:id', (req, res, next) => {
//Update data in the client form information table based on client id 
EmployeeModel.findOneAndUpdate({ employee_id: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('employee Form Information is edited via PUT');
        console.log('employee Form Information successfully updated!', data)
      }
    })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/employee/:id', (req, res, next) => {
  
  //mongoose will use clientID of document to delete 
  EmployeeModel.findOneAndRemove({ employee_id: req.params.id}, (error, data) => {
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



//****************************************End of employee Intake Form******************************** */

//****************************************Start of Project Intake Form */
// endpoint that will create a general information document - Create Operation
app.post('/project', (req, res, next) => {

  ProjectModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
        res.send('Project Form Information is added to the database');
      }
  });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/projects', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  ProjectModel.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/project/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  ProjectModel.findOne({ project_id: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Project Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/project/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  ProjectModel.findOne({ project_number: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Project Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/project_report/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  ProjectModel.findOne({ project_number: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Project Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});

// Updating - editing Subcontractor form information - using PUT by clientID  - Update Operation
app.put('/project/:id', (req, res, next) => {
//Update data in the client form information table based on client id 
ProjectModel.findOneAndUpdate({ project_id: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Project Form Information is edited via PUT');
        console.log('Project Form Information successfully updated!', data)
      }
    })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/project/:id', (req, res, next) => {
  
  //mongoose will use clientID of document to delete 
  ProjectModel.findOneAndRemove({ project_id: req.params.id}, (error, data) => {
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
//*****************************************End of Project Intake Form Jose Zelaya*/



//*************************************Start of the Phase Info********************************************* */
// endpoint that will create a general information document - Create Operation
app.post('/phase', (req, res, next) => {

  PhaseModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
        res.send('Phase Form Information is added to the database');
      }
  });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/phases', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  PhaseModel.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/phase/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  PhaseModel.findOne({ phase_id: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Phase Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});


// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/phase_report/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  PhaseModel.findOne({ phase_number: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Phase Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});

// Updating - editing Subcontractor form information - using PUT by clientID  - Update Operation
app.put('/phase/:id', (req, res, next) => {
//Update data in the client form information table based on client id 
PhaseModel.findOneAndUpdate({ phase_id: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Phase Form Information is edited via PUT');
        console.log('Phase Form Information successfully updated!', data)
      }
    })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/phase/:id', (req, res, next) => {
  
  //mongoose will use clientID of document to delete 
  PhaseModel.findOneAndRemove({ phase_id: req.params.id}, (error, data) => {
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

//*************************************End of the Phase Info********************************************* */



//*************************************Start of the Step****************************************************************** */
// endpoint that will create a general information document - Create Operation
app.post('/step', (req, res, next) => {

  StepModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
        res.send('Step Form Information is added to the database');
      }
  });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/steps', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  StepModel.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/step/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  StepModel.findOne({ step_id: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Step Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/step_report/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  StepModel.findOne({ step_number: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Step Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});

// Updating - editing Subcontractor form information - using PUT by clientID  - Update Operation
app.put('/step/:id', (req, res, next) => {
//Update data in the client form information table based on client id 
StepModel.findOneAndUpdate({ step_id: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Step Form Information is edited via PUT');
        console.log('Step Form Information successfully updated!', data)
      }
    })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/step/:id', (req, res, next) => {
  
  //mongoose will use clientID of document to delete 
  StepModel.findOneAndRemove({ step_id: req.params.id}, (error, data) => {
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
//*************************************End of the Step****************************************************************** */




//************************************Start of the Task****************************************************************** */

// endpoint that will create a general information document - Create Operation
app.post('/task', (req, res, next) => {

  TaskModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
        res.send('Task Form Information is added to the database');
      }
  });
});

//create an endpoint to get all general information from the API  -Read Operation
app.get('/tasks', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  TaskModel.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// endpoint for retrieving client form information by clientID - Read Operation 2
app.get('/task/:id', (req, res, next) => {
  //find data based on the client id for the collection client form information
  TaskModel.findOne({ task_id: req.params.id}, (error, data) => {
      if (error) {
          return next(error)
      } else if (data === null) {
          // Sending 404 when not found something is a good practice
        res.status(404).send('Task Form Information not found');
      }
      else {
        res.json(data)
      }
  });
});

// Updating - editing Subcontractor form information - using PUT by clientID  - Update Operation
app.put('/task/:id', (req, res, next) => {
//Update data in the client form information table based on client id 
TaskModel.findOneAndUpdate({ task_id: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Task Form Information is edited via PUT');
        console.log('Task Form Information successfully updated!', data)
      }
    })
});

//delete a client form information by clientID  -Delete Operation 
app.delete('/task/:id', (req, res, next) => {
  
  //mongoose will use clientID of document to delete 
  TaskModel.findOneAndRemove({ task_id: req.params.id}, (error, data) => {
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
//************************************End of the Task****************************************************************** */



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
//*****************Start of Reports ******************************************************************** */
app.get('/project_phase_report/:id', (req, res, next) => {


  PhaseModel.aggregate([
    { $match : { project_number: (req.params.id) } },  //match client id if so retrieve that data
    { $project : {_id:0 ,project_number: 1, phase_number: 1, phase_name: 1, phase_cost:1 , phase_completed:1, project_number: 1} },  //retrieve these fieldnames from the genral information schema
    { $lookup : {         //aggregate or lookup on the collection cfcworker_client_activity
        from : 'project',
        localField : 'project_number',
        foreignField : 'project_number',
        as : 'project',
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

//Report to get steps linked to a phase 
app.get('/project_step_report/:id', (req, res, next) => {


  StepModel.aggregate([
    { $match : { phase_number: (req.params.id) } },  //match client id if so retrieve that data
    { $project : {_id:0 ,phase_number: 1, step_name: 1, step_cost:1 , step_completed:1} },  //retrieve these fieldnames from the genral information schema
    { $lookup : {         //aggregate or lookup on the collection cfcworker_client_activity
        from : 'phase',
        localField : 'phase_number',
        foreignField : 'phase_number',
        as : 'phase',
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

//Report to get tasks linked to a step 
app.get('/project_task_report/:id', (req, res, next) => {


  TaskModel.aggregate([
    { $match : { step_number: (req.params.id) } },  //match client id if so retrieve that data
    { $project : {_id:0 ,project_number: 1, step_number: 1, task_name: 1, task_number:1 , task_completed:1} },  //retrieve these fieldnames from the genral information schema
    { $lookup : {         //aggregate or lookup on the collection cfcworker_client_activity
        from : 'step',
        localField : 'step_number',
        foreignField : 'step_number',
        as : 'step',
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


//Report to get Investor linked to Project 
app.get('/investor_project_report/:id', (req, res, next) => {


  InvestorModel.aggregate([
    { $match : { project_number: (req.params.id) } },  //match client id if so retrieve that data
    { $project : {_id:0 ,project_number: 1, investor_fname: 1, investor_lname:1 } },  //retrieve these fieldnames from the genral information schema
    { $lookup : {         //aggregate or lookup on the collection cfcworker_client_activity
        from : 'project',
        localField : 'project_number',
        foreignField : 'project_number',
        as : 'project',
    } },
    { $lookup : {         //aggregate or lookup on the collection cfcworker_client_activity
      from : 'subcontractor',
      localField : 'project_number',
      foreignField : 'project_number',
      as : 'subcontractor',
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





//************************End of Reports************************************************************* */

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