const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let InvestorAssignedSchema = new Schema({
    
    investor_assigned_id: { type: String, default: uuid.v1 },

   investor_firstname: {
      type: String,
      minLength: 2,
      maxLength: 30,
      not: null,
      required: true
   },
   investor_lastname: {
    type: String,
    minLength: 2,
    maxLength: 30,
    not: null,
    required: true
   },
    
    project_number: {
      type: String,
      minLength:1,
      maxLength:2,
      not: null,
      required: true,
      unique: false
    },
    investor_assigned_date: {
      type: String,
      required:true,
      not:null
     
  },
     
  investor_assigned_cost: {
        type: String,
        minLength:1 ,
        maxLength: 15,
        required:true,
        not:null
          
        
    },

    investor_assigned_paid: {
      type: String,
      minLength:2,
      maxLength:3,
      required:true,
      not:null
      
  },
    
  investor_email: {
    type: String,
    maxLength: 55,
    required: true,
    not: null
  
  
}, 
    
   
    
    
    

  }, {
    collection: 'investor_assigned'
});

module.exports = mongoose.model('investor_assigned', InvestorAssignedSchema)