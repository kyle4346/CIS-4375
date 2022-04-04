const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let EmployeeSchema = new Schema({
    
    employee_id: { type: String, default: uuid.v1 },
    
    employee_first_name: {
        type: String,
        minLength: 2,
        maxLength: 35,
        not: null,
        required: true
    },
    employee_last_name: {
        type: String,
        minLength: 2,
        maxLength: 35,
        not: null,
        required: true
       
    },
    employee_gender: {
        type: String,
        maxLength: 6,
        
       
    },
    employee_salary: {
        type: String,
        minLength: 1,
        maxLength: 10,
        not: null,
        required: true

    },
    employee_phone: {
        type: String,
        minLength: 0,
        maxLength: 12,
        not: null,
        required: true

      },
    employee_email: {
        type: String,
        maxLength: 40,
        unique:true,
        not: null,
        required: true

      },
    employee_street: {
        type: String,
        minLength: 5,
        maxLength: 55,
        required: true,
        not: null

      },
    employee_city: {
        type: String,
        minLength: 5, 
        maxLength: 35,
        required: true,
        not: null

      },
    employee_zipcode: {
        type: String,
        maxLength:5,
        required: true,
        not: null

      },
    employee_state: {
        type: String,
        maxLength: 2,
        required: true,
        not: null

      },
    employee_country: {
        type: String,
        minLength: 4,
        maxLength: 13,
        required: true,
        not:null

      },
    employee_status_type: {
        type: String,
        minLength: 0,
        maxLength: 15,
        required: true,
        not:null

      },
    employee_title_description: {
        type: String,
        minLength: 0,
        maxLength: 15,
        required: true,
        not:null

      },
    
     
     

   
    

  }, {
    collection: 'employee'
});

module.exports = mongoose.model('employee', EmployeeSchema)