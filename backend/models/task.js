const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let TaskSchema = new Schema({
    
    task_id: { type: String, default: uuid.v1 },
    
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
      maxLength:55,
      not: null,
      required: true,
      unique: false
        
    },
    step_number: {
      type: String,
      minLength:1,
      maxLength:55,
      not: null,
      required: true,
      unique: false
       
    },
   
    task_name: {
        type: String,
        minLength: 5,
        maxLength: 75,
        not: null,
        required: true
        
    },
    task_description: {
        type: String,
        minLength: 0,
        maxLength: 35,
        
    },
    
    task_completed: {
        type: String,
        minLength: 2,
        maxLength: 3,
        required: true,
        not: null
      
      
    }, 
  
    task_duration: {
        type: String,
        minLength: 0,
        maxLength: 3,
        
    },
      
    task_percent_complete:{
        type: String,
        minLength:2,
        maxLength:4,
        require:true
        
    },
      
    task_start_date: {
        type: String,
        required: true,
        not: null

    },
    task_end_date: {
        type: String,
       

    },

    task_material_aquired: {
        type: String,
        minLength:2,
        maxLength:3,
        require:true

    },
    task_status_type: {
        type: String,
        minLength: 6,
        maxLength: 25,
        required: true,
        not: null

      },
      
    
  }, {
    collection: 'task'
});

module.exports = mongoose.model('task', TaskSchema)