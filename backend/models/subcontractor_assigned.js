const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let SubcontractorAssignedSchema = new Schema({
    
  subcontractor_assigned_id: { type: String, default: uuid.v1 },

   subcontractor_firstname: {
      type: String,
      minLength: 2,
      maxLength: 30,
      not: null,
      required: true
   },
   subcontractor_lastname: {
    type: String,
    minLength: 2,
    maxLength: 30,
    not: null,
    required: true
   },
    
    project_number: {
      type: String,
      minLength:1,
      maxLength:9,
      not: null,
      required: true,
      unique: false
    },
    subcontractor_assigned_date: {
      type: String,
      required:true,
      not:null
     
  },
     
  subcontractor_assigned_cost: {
    type: String,
    minLength:1 ,
    maxLength: 15,
    required:true,
    not:null
          
        
    },

    subcontractor_assigned_paid: {
      type: String,
      minLength:2,
      maxLength:3,
      required:true
      
  },
    
    subid: {
      type: String,
      minLength: 5,
      maxLength: 5,
      required: true,
      not: null,
      unique:true
    },
    
    stepid: {
      type: String,
      minLength: 5,
      maxLength: 5,
      required: true,
      not: null,
      unique:true
      
      
    }, 
    
    
    

  }, {
    collection: 'subcontractor_assigned'
});

module.exports = mongoose.model('subcontractor_assigned', SubcontractorAssignedSchema)