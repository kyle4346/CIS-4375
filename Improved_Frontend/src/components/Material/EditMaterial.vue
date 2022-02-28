<template>
    <div class="row justify-content-center"> 
        <div class="col-md-8"> 
            <h3 class="text-center" style="font-size:200%; font-weight:bold">Update Material Intake Form</h3>
            <br>
            <form @submit.prevent="handleUpdateForm">
                
                <div class="form-group row">
                <strong style ="font-size:150%">General Information</strong>
                <br>
                <br>
                
                <br>
                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputName">Material Name</label>
                    <input  type="text" class="form-control" id="inputName" pattern="[A-Za-z\s]{5,40}" v-model="material.material_name" required>
                    <p style="color:red; font-weight:bold">Required letters only</p>
                </div>
        

                 <div class="form-group col-md-4">
                    <label style ="font-size:14pt" for="inputShortNotes">Material Details</label>
                    <textarea type="text" class="form-control" id="inputShortNotes" minlength="0" maxlength="60"   rows="3" v-model="material.material_information" ></textarea>
                    
                </div>

                <div class="col-md-4 col-form-label">
                    <label style ="font-size:14pt" >Material Amount</label>
                     <div class="col-sm-8">
                    <input type="number" class="form-control"  min="0" max="100000" placeholder="1000"  v-model="material.material_item_number" required>
                    <p style="color:red; font-weight:bold">Number only Required</p>
                    </div>
                </div>

                </div>

                
                <div class="form-group row">

                 <div class="form-group col-md-2">
                    
                    <br>
                    <label style ="font-size:14pt">Material  Status</label>
                   
                    <select  v-model="material.material_status_type" > 
                     <option v-for="material_status_type in material_status_type" v-bind:key="material_status_type">{{material_status_type}}</option>
                    </select>
                    
                </div>


                 <div class="form-group col-md-2">
                    
                    <br>
                    <label style ="font-size:14pt">Material Type</label>
                    
                    <select  v-model="material.material_description_type" > 
                     <option v-for="material_description_type in material_description_type" v-bind:key="material_description_type">{{material_description_type}}</option>
                    </select>
                    
                </div>
                </div>

               





                    <br>
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error"> {{error}} </li>
                    </ul>
                    </p>


                <br>
                <button class="btn btn-danger mt-3">Update</button>
                <br>
                <br>
                <br>



               
            </form>
        </div> 
    </div> 
</template>


<script>
import axios from "axios";

export default {
    data() {
        return {
            errors: [],
            material: { 



            },//drop down lists found from createcomponent, unchanged of course
            //static data for dropdown lists
                 material_status_type: [' ','In-Stock', 'Out-Of-Stock', 'Restocking'],
                material_description_type:[' ','Metal','Plastic','Wood','Glass','Ceramic','Synthetic Fiber','Composite'],
                
        }

    },
    created() {//Edits based on the client ID already entered
        let apiURL = `http://localhost:27017/material/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.material = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.material.material_name){

                    this.errors.push("Pass letters only.");

            }
            let apiURL = `http://localhost:27017/material/${this.$route.params.id}`;
            //pulls from back end of client ID to get all data pertaining to client
            axios.put(apiURL, this.material).then((res) => {
                console.log(res)
                this.$router.push('/viewMaterial')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
        }
    }
}
</script>