const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let EmployeeAssignedSchema = new Schema({
    
   employee_assigned_id: { type: String, default: uuid.v1 },

   employee_firstname: {
      type: String,
      minLength: 2,
      maxLength: 30,
      not: null,
      required: true
   },
   employee_lastname: {
    type: String,
    minLength: 2,
    maxLength: 30,
    not: null,
    required: true
   },
    
    project_number: {
      type: String,
      minLength:1,
      maxLength:9,
      not: null,
      required: true,
      unique: false
    },
    employee_assigned_date: {
      type: String,
     
  },
     
    empid: {
      type: String,
      minLength: 5,
      maxLength: 5,
      required: true,
      not: null,
      unique:true
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
    collection: 'employee_assigned'
});

module.exports = mongoose.model('employee_assigned', EmployeeAssignedSchema)