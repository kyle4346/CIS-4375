const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let TaskSchema = new Schema({
    
    task_id: { type: String, default: uuid.v1 },
    
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
    task_number: {
      type: String,
      minLength:1,
      maxLength:9,
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
        maxLength: 255,
        not: null,
        required: true
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
        maxLength: 25,
        
    },
      
    task_percent_complete:{
        type: Number,
        min: 0,
        max: 100,
        
        
    },
      
    task_start_date: {
        type: String,
        required: true,
        not: null

    },
    task_end_date: {
        type: String,
       

    },
    task_material: {
        type: String,
        minLength: 0,
        maxLength: 75,
       

    },
    task_material_aquired: {
        type: String,
        minLength:2,
        maxLength:3

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