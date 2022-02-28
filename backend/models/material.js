const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let MaterialSchema = new Schema({
    
    material_id: { type: String, default: uuid.v1 },
    
    material_name: {
        type: String,
        minLength: 5,
        maxLength: 40,
        not: null,
        required: true
    },
     
    material_information: {
        type: String,
        minLength: 0,
        maxLength: 60,
       
        
    },
    
    material_item_number: {
        type: Number,
        min: 0,
        max: 10000,
        required: true,
        not: null
    },
    

      
    material_status_type: {
        type: String,
        minLength: 0,
        maxLength: 25,
        

    },
      material_description_type: {
        type: String,
        minLength: 0,
        maxLength: 25,

      },
    

  }, {
    collection: 'material'
});

module.exports = mongoose.model('material', MaterialSchema)