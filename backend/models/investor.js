const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let InvestorSchema = new Schema({
    
    investor_iD: { type: String, default: uuid.v1 },
    
    investor_fname: {
        type: String,
        minLength: 2,
        maxLength: 35,
        not: null,
        required: true
    },
    investor_lname: {
      type: String,
      minLength: 2,
      maxLength: 35,
      not: null,
      required: true
  },
     
    investor_detail: {
        type: String,
        minLength: 0,
        maxLength: 35,
      
        
    },
    
    investor_phone: {
        type: String,
        minLength: 0,
        maxLength: 12,
        required: true,
        not: null
    },
    
    investor_email: {
        type: String,
        maxLength: 40,
        required: true,
        not: null
      
      
    }, 
    
    investor_address: {
        type: String,
        minLength: 5,
        maxLength: 55,
        required: true,
        not: null
        
      },
      
      investor_city: {
          type: String,
          minLength: 5, 
          maxLength: 35,
          required: true,
          not: null
        
      },
      
     investor_zipcode: {
        type: String,
        maxLength:5 ,
        required: true,
        not: null
      },
      
      investor_state: {
        type: String,
        maxLength: 2,
        required: true,
        not: null
  
  
      },
      
      investor_country:{
        type: String,
        maxLength: 13,
        required: true,
        not: null

      },
      
    investor_status: {
        type: String,
        minLength: 0,
        maxLength: 20,
        required: true,
        not:null
        

    },
      investor_type: {
        type: String,
        minLength: 0,
        maxLength: 20,
        required: true,
        not:null

      },
    

  }, {
    collection: 'investor'
});

module.exports = mongoose.model('investor', InvestorSchema)