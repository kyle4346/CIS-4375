const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let PhaseSchema = new Schema({
    
    phase_id: { type: String, default: uuid.v1 },
    
    project_number: {
      type: String,
      minLength:1,
      maxLength:9,
      not: null,
      required: true,
      unique: false
       
    },
    phase_number: {
        type: Number,
        min:1,
        max: 6,
        not: null,
        required: true,
        
    },
     
    phase_name: {
        type: String,
        minLength: 5,
        maxLength: 75,
        not: null,
        required: true
        
    },
    
    phase_description: {
        type: String,
        minLength: 0,
        maxLength: 255,
        not: null,
        required: true
    },
    
    phase_completed: {
        type: String,
        minLength: 2,
        maxLength: 3,
        required: true,
        not: null
      
      
    }, 
    
      
      phase_cost: {
        type: Number,
        min: 1,
        max: 99999999,
        
        
      },
     
      
      phase_estimated_duration: {
        type: String,
        minLength: 0,
        maxLength: 25,
        
      },
      
      phase_actual_duration: {
        type: String,
        minLength: 0,
        maxLength: 25,
        
  
      },
      
      phase_percent_complete:{
        type: Number,
        min: 0,
        max: 100,
        

      },
      
      phase_start_date: {
        type: String,
        required: true,
        not: null

    },
    phase_estimated_end_date: {
        type: String,
       

      },
      phase_actual_end_date: {
        type: String,
        

      },
      phase_status_type: {
        type: String,
        minLength: 6,
        maxLength: 25,

      },
      
    
  }, {
    collection: 'phase'
});

module.exports = mongoose.model('phase', PhaseSchema)