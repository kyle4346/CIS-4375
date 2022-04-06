const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let SubcontractorSchema = new Schema({
    
    subcontractor_id: { type: String, default: uuid.v1 },
    
    subcontractor_fname: {
        type: String,
        minLength: 2,
        maxLength: 25,
        not: null,
        required: true
    },
    subcontractor_lname: {
      type: String,
      minLength: 2,
      maxLength: 35,
      not: null,
      required: true
  },
  subcontractor_detail: {
    type: String,
    minLength: 0,
    maxLength: 55,
    

  },
    subcontractor_gender: {
      type: String,
      maxLength: 6,
      not: null,
      required: true
   
  },
    subcontractor_business_name: {
        type: String,
        minLength: 5,
        maxLength: 55,
        required:true,
        not:null
       
        
    },
   subcontractor_rate: {
        type: String,
        minLength: 2,
        max: 12,
        required: true,
        not: null
    },
    
    subcontractor_phone: {
        type: String,
        maxLength: 12,
        required: true,
        not: null
      
      
    }, 
    
    subcontractor_email: {
        type: String,
        maxLength: 45,
        required: true,
        unique:true,
        not: null
        
      },
      
      subcontractor_address: {
          type: String,
          minLength: 5, 
          maxLength: 55,
          required: true,
          not: null
        
      },
      
     subcontractor_city: {
        type: String,
        minLength: 2,
        maxLength: 35,
        required: true,
        not: null
      },
      subcontractor_state: {
        type: String,
        maxLength: 2,
        required: true,
        not: null
      },
      
      subcontractor_zipcode: {
        type: String,
        required: true,
        maxLength: 5,
        not: null
  
  
      },
      
      subcontractor_country: {
        type: String,
        maxLength: 13,
        required: true,
        not: null

      },
      
    subcontractor_status: {
        type: String,
        minLength: 5,
        maxLength: 16,
        required: true,
        not: null
        

    },
      subcontractor_type: {
        type: String,
        minLength: 3,
        maxLength: 16,
        required: true,
        not: null

      },
    
   
    

  }, {
    collection: 'subcontractor'
});

module.exports = mongoose.model('subcontractor', SubcontractorSchema)