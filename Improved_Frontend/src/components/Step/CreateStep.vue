<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold; margin-top:-35px">Step Intake Form</h1>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
            
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepProjectNum">Project Number</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputStepProjectNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="step.project_number" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepPhaseNum">Phase Number</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputStepPhaseNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="step.phase_number" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepNum">Step Number</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputStepNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="step.step_number" required>
                    
                </div>

                 <div class="form-group col-lg-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepName">Step Name</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputStepName" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,75}" v-model="step.step_name" required>
                </div> 

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt" for="inputStepNotes">Step Details</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <textarea type="text" class="form-control" id="inputStepNotes" minlength="0" maxlength="255"   rows="3" v-model="step.step_description" required></textarea>
                <br>
                </div>

                </div>
        
                <div class="form-group row">
                
                <div class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label col-lg-auto pt-0">Step Completed?</label>
                 <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                <br>

                <div class="form-check-inline col-lg-auto">
                     <label style ="font-size:14pt" class="form-check-label" for="stepComplete1">
                     <input class="form-check-input" type="radio"  id="stepComplete1" value="Yes"  v-model="step.step_completed"   required>Yes    
                     </label>
                     
                </div>
                   
                <div class="form-check-inline col-lg-auto">
                    <label style ="font-size:14pt" class="form-check-label" for="stepComplete2">
                    <input class="form-check-input" type="radio"  id="stepComplete2" value="No" v-model="step.step_completed" required>No
                    </label>
                </div>

                </div>


                <div style=" margin-right:20px" class="form-group col-lg-3">
                    <label style ="font-size:14pt">Step Status</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select  v-model="step.step_status_type" required> 
                     <option v-for="step_status_type in step_status_type" v-bind:key="step_status_type">{{step_status_type}}</option>
                    </select>
            
                </div>

                <div style="margin-left:-200px" class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepBudget">Step Cost</label>
                    <input  type="number" class="form-control" id="inputStepBudget" placeholder="10000" min="1" max="99999999" v-model="step.step_cost" required>
                    
                </div>

                 <div style=" margin-right:20px" class="form-group col-lg-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepDuration">Step Duration</label>
                    <input  type="text" class="form-control" id="inputStepDuration" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,25}" v-model="step.step_duration" >
                    
                </div>

                <div  class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepPercentComplete">Step % Done</label>
                    <input  type="number" class="form-control" id="inputStepPercentComplete" placeholder="50" min="0" max="100" v-model="step.step_percent_complete" >
                   <br>
                </div>

                </div>

                
                <div class="form-group row">
            
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Step Start Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="step.step_start_date" required>
                </div>

                <div  style="margin-left:20px " class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Step End Date</label>
                    <input type="date" class="form-control" v-model="step.step_end_date" >
                     <br>
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
                <button class="btn btn-danger mt-3" style ="font-size:14pt">Create</button>
                



               
            </form>
        </div> 
    </div> 
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                //retrieving data from the client_form schema getting the data 
                errors: [],
                step: {
                   project_number: '',
                   phase_number: '',
                   step_number: '',
                   step_name: '',
                   step_description: '',
                   step_completed: '',
                   step_cost: '',
                   step_duration: '',
                   step_percent_complete: '',
                   step_start_date:'',
                   step_end_date: '',
                   step_status_type: '',
                   

                },
                //static data for dropdown lists
                step_status_type: ['Complete', 'In-Progress', 'On-Hold', 'Not-Started'],
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.step.step_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/step';
                
                axios.post(apiURL, this.step).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewStep')
                  this.step = {
                   project_number: '',
                   phase_number: '',
                   step_number: '',
                   step_name: '',
                   step_description: '',
                   step_completed: '',
                   step_cost: '',
                   step_duration: '',
                   step_percent_complete: '',
                   step_start_date:'',
                   step_end_date: '',
                   step_status_type: '',
                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>