const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let StepSchema = new Schema({
    
    step_id: { type: String, default: uuid.v1 },
    
    project_number: {
      type: String,
      minLength:1,
      maxLength:9,
      not: null,
      required: true,
      unique: false
    },
    phase_number: {
      type: String,
      minLength:1,
      maxLength:9,
      not: null,
      required: true,
      unique: false
        
    },
    step_number: {
      type: String,
      minLength:1,
      maxLength:9,
      not: null,
      required: true,
      unique: false
       
    },
     
    step_name: {
        type: String,
        minLength: 5,
        maxLength: 75,
        not: null,
        required: true
        
    },
    
    step_description: {
        type: String,
        minLength: 0,
        maxLength: 255,
        not: null,
        required: true
    },
    
    step_completed: {
        type: String,
        minLength: 2,
        maxLength: 3,
        required: true,
        not: null
      
      
    }, 
    
    step_cost: {
        type: Number,
        min: 1,
        max: 99999999,
        
        
      },
     
      
      step_duration: {
        type: String,
        minLength: 0,
        maxLength: 25,
        
      },
      
      
      step_percent_complete:{
        type: Number,
        min: 0,
        max: 100,
        

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
      
    
  }, {
    collection: 'step'
});

module.exports = mongoose.model('step', StepSchema)