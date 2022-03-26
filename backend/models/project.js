const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let ProjectSchema = new Schema({
    
    project_id: { type: String, default: uuid.v1 },
    
    project_number: {
      type: String,
      minLength:1,
      maxLength:9,
      not: null,
      required: true,
      unique: true
    },
     
    project_name: {
        type: String,
        minLength: 5,
        maxLength: 75,
        not: null,
        required: true
        
    },
    
    project_information: {
        type: String,
        minLength: 0,
        maxLength: 255,
        not: null,
        required: true
    },
    
    project_completed: {
        type: String,
        minLength: 2,
        maxLength: 3,
        required: true,
        not: null
      
      
    }, 
    
    project_budget: {
        type: Number,
        min: 1,
        max: 99999999,
        required: true,
        not: null
        
      },
      
      project_estimated_cost: {
        type: Number,
        min: 0,
        max: 99999999,
        
      },
      project_actual_cost: {
        type: Number,
        min: 0,
        max: 99999999,
        
      },
      
      project_estimated_duration: {
        type: String,
        minLength: 0,
        maxLength: 25,
        
      },
      
      project_actual_duration: {
        type: String,
        minLength: 0,
        maxLength: 25,
        
  
      },
      
      project_percent_complete:{
        type: Number,
        min: 0,
        max: 100,
        

      },
      
      project_start_date: {
        type: String,
        required: true,
        not: null

    },
      project_estimated_end_date: {
        type: String,
       

      },
      project_actual_end_date: {
        type: String,
        

      },
      project_status_type: {
        type: String,
        minLength: 6,
        maxLength: 25,

      },
      project_type_description: {
        type: String,
        minLength: 5,
        maxLength: 35,

      },
      project_location_name: {
        type: String,
        minLength: 5,
        maxLength: 55,
        required: true,
        not: null

      },
      project_location_street: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: true,
        not: null
      },
      project_location_city: {
        type: String,
        minLength: 3,
        maxLength: 40,
        required: true,
        not: null
      },
      project_location_zipcode: {
        type: String,
        required: true,
        not: null

      },
      project_location_state: {
        type: String,
        maxLength: 2,
        required: true,
        not: null

      },
      project_location_country: {
        type: String,
        maxLength: 13,
        required: true,
        not: null

      },
      project_location_status_type: {
        type: String,
        minLength: 5,
        maxLength: 40,
        required: true,
        not: null
      },
      psid: {
        type: String,
        minLength: 5,
        maxLength: 5,
        required: true,
        not: null,
        unique:true
      },
    
  }, {
    collection: 'project'
});

module.exports = mongoose.model('project', ProjectSchema)