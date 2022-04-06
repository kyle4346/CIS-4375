const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let StepSchema = new Schema({
    
    step_id: { type: String, default: uuid.v1 },
    
    project_number: {
      type: String,
      minLength:1,
      maxLength:5,
      not: null,
      required: true,
      unique: false
    },
    phase_number: {
      type: String,
      minLength:1,
      not: null,
      required: true,
      unique: false
        
    },
    step_number: {
      type: String,
      minLength:1,
      not: null,
      required: true,
      unique: false
       
    },
     
    
    step_description: {
        type: String,
        minLength: 0,
        maxLength: 55,
       
        
    },
    
    step_cost: {
      type: String,
      minLength: 9,
      maxLength: 11,
      not: null,
      required: true
        
      },
     
      
      step_duration: {
        type: String,
        minLength: 0,
        maxLength: 2,
        
      },
      
      
      step_percent_complete:{
        type: String,
        minLength:2,
        maxLength:4,
        require:true
        

    },
      
      step_start_date: {
        type: String,
        required: true,
        not: null

    },
      step_end_date: {
        type: String,
       

      },
     
      step_status_type: {
        type: String,
        minLength: 6,
        maxLength: 25,
        required: true,
        not: null

      },
      subcontractor_email:{
        type: String,
        maxLength: 45,
        unique:false,
      

      },
      subcontractor_assigned_date:{
        type: String,
        
        
      },
      subcontractor_fee:{
        type: String,
        minLength:0,
        maxLength:11,
        
        
      },
      subcontractor_paid:{
      type: String,
      minLength:0,
      maxLength:3,
      

      },
      subcontractor_fname:{
        type: String,
        minLength: 0,
        maxLength: 25,
        

      },
      subcontractor_lname:{
        type: String,
        minLength: 0,
        maxLength: 35,
       

      }
    
  }, {
    collection: 'step'
});

module.exports = mongoose.model('step', StepSchema)