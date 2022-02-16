/*Subcontractor_ID
Subcontractor_Name
Subcontractor_Trades
Subcontractor_Rate
Subcontractor_Phone
Subcontractor_Email
Subcontractor_Street
Subcontractor_City
Subcontractor_Zipcode
Subcontractor_Status_ID
Subcontractor_Type_ID--> */

const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let SubcontractorSchema = new Schema({
    
    subcontractor_id: { type: String, default: uuid.v1 },
    
    subcontractor_fname: {
        type: String,
        minLength: 5,
        maxLength: 15,
        not: null,
        required: true
    },
    subcontractor_lname: {
      type: String,
      minLength: 5,
      maxLength: 20,
      not: null,
      required: true
  },
     
    subcontractor_trade: {
        type: String,
        minLength: 5,
        maxLength: 25,
       
        
    },
    
   subcontractor_rate: {
        type: Number,
        min: 0,
        max: 100000,
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
        minLength: 5,
        maxLength: 50,
        required: true,
        not: null
        
      },
      
      subcontractor_address: {
          type: String,
          minLength: 5, 
          maxLength: 35,
          required: true,
          not: null
        
      },
      
     subcontractor_city: {
        type: String,
        maxLength: 35,
        required: true,
        not: null
      },
      
      subcontractor_zipcode: {
        type: String,
        maxLength: 5,
        required: true,
        not: null
  
  
      },
      
    subcontractor_status: {
        type: String,
        minLength: 5,
        maxLength: 20,
        

    },
      subcontractor_type: {
        type: String,
        minLength: 3,
        maxLength: 20,

      },
    

  }, {
    collection: 'subcontractor'
});

module.exports = mongoose.model('subcontractor', SubcontractorSchema)