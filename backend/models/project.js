const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let ProjectSchema = new Schema({
    
    project_id: { type: String, default: uuid.v1 },
    
    project_number: {
      type: String,
      minLength:1,
      maxLength:5,
      not: null,
      required: true,
      unique: true
    },
     
    project_name: {
        type: String,
        minLength: 5,
        maxLength: 35,
        not: null,
        required: true
        
    },
    
    project_information: {
        type: String,
        minLength: 0,
        maxLength: 45,
       
    },
    
    project_completed: {
        type: String,
        minLength: 2,
        maxLength: 3,
        required: true,
        not: null
      
      
    }, 
    
    project_budget: {
       type: String,
       minLength: 1,
       maxLength: 14,
       not: null,
       required: true
        
      },
      
      project_estimated_cost: {
      type: String,
       minLength: 1,
       maxLength: 14,
       not: null,
       required:true
       
        
      },
      project_actual_cost: {
      type: String,
       minLength: 0,
       maxLength: 14,
       not: null,
    
        
      },
      
      project_estimated_duration: {
        type: String,
        minLength: 0,
        maxLength: 7,
        required:true
        
      },
      
      project_actual_duration: {
        type: String,
        minLength: 0,
        maxLength: 7,
        
  
      },
      
      project_percent_complete:{
        type: String,
        minLength:2,
        maxLength:4,
        require:true

      },
      
      project_start_date: {
        type: String,
        required: true,
        not: null

    },
      project_estimated_end_date: {
        type: String,
        required:true
       

      },
      project_actual_end_date: {
        type: String,
        

      },
      project_status_type: {
        type: String,
        minLength: 6,
        maxLength: 25,
        required:true,
        not:null

      },
      project_type_description: {
        type: String,
        minLength: 5,
        maxLength: 35,
        required:true,
        not:null

      },

      project_location_street: {
        type: String,
        minLength: 5,
        maxLength: 55,
        required: true,
        not: null
      },
      project_location_city: {
        type: String,
        minLength: 3,
        maxLength: 25,
        required: true,
        not: null
      },
      project_location_zipcode: {
        type: String,
        maxLength: 5,
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
        maxLength: 15,
        required: true,
        not: null
      },
      
    
  }, {
    collection: 'project'
});

module.exports = mongoose.model('project', ProjectSchema)