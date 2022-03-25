const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let InvestorAssignedSchema = new Schema({
    
    investor_assigned_id: { type: String, default: uuid.v1 },
    
    project_number: {
      type: String,
      minLength:1,
      maxLength:9,
      not: null,
      required: true,
      unique: false
    },
    investor_assigned_date: {
      type: String,
     
  },
     
  investor_assigned_cost: {
        type: String,
          
        
    },

    investor_assigned_paid: {
      type: String,
      minLength:2,
      maxLength:3
      
  },
    
    investor_iD: {
      type: String,
      minLength: 0,
      maxLength: 12,
      required: true,
      not: null
    },
    
    project_id: {
        type: String,
        maxLength: 55,
        required: true,
        not: null
      
      
    }, 
    
    
    

  }, {
    collection: 'investor_assigned'
});

module.exports = mongoose.model('investor_assigned', InvestorAssignedSchema)