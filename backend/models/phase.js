const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let PhaseSchema = new Schema({
    
    phase_id: { type: String, default: uuid.v1 },
    
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
      maxLength:35,
      not: null,
      required: true,
      unique: false
        
    },
     
    
    phase_description: {
        type: String,
        minLength: 0,
        maxLength: 55,
       
    },
    
    
      phase_cost: {
        type: String,
        minLength: 9,
        maxLength: 11,
        not: null,
        required: true
        
      },
     
      
      phase_estimated_duration: {
        type: String,
        minLength: 1,
        maxLength: 2,
        
      },
      
      phase_actual_duration: {
        type: String,
        minLength: 0,
        maxLength: 2,
        
  
      },
      
      phase_percent_complete:{
        type: String,
        minLength:1,
        maxLength:4,
        required:true,
        
        

      },
      
      phase_start_date: {
        type: String,
        required: true,
        not: null

    },
    phase_estimated_end_date: {
        type: String,
        required: true,
        not: null

      },
      phase_actual_end_date: {
        type: String,
        

      },
      phase_status_type: {
        type: String,
        minLength: 6,
        maxLength: 20,
        required:true

      },
      
    
  }, {
    collection: 'phase'
});

module.exports = mongoose.model('phase', PhaseSchema)