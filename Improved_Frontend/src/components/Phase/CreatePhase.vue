<template>
    <div class="row justify-content-center"> 
        <div class="col-md-8"> 
            <h3 class="text-center" style="font-size:200%; font-weight:bold">Phase Intake Form</h3>
            <br>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <strong style ="font-size:150%">General Information</strong>
                <br>
                <br>
                <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
                <br>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseProjectNum">Project Number*</label>
                    <input  type="text" class="form-control" id="inputPhaseProjectNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="phase.project_number" required>
                    
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseNum">Phase Number*</label>
                    <input  type="number" class="form-control" id="inputPhaseNum" placeholder="10000" min="1" max="999999" v-model="phase.phase_number" required>
                    
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseName">Phase Name*</label>
                    <input  type="text" class="form-control" id="inputPhaseName" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,75}" v-model="phase.phase_name" required>
                    
                    <br>
                    
                </div>
                </div>
        

                <div class="form-group row">
                 <div class="form-group col-md-4">
                    <label style ="font-size:14pt" for="inputPhaseNotes">Phase Details*</label>
                    <textarea type="text" class="form-control" id="inputPhaseNotes" minlength="5" maxlength="75"   rows="3" v-model="phase.phase_description" ></textarea>
                <br>
                </div>

                <legend style ="font-size:14pt" class="col-form-label col-md-auto pt-0">Is Phase Completed?*</legend>

                <div class="form-check-inline col-md-1">
                     <label style ="font-size:14pt" class="form-check-label" for="phaseComplete1">
                     <input class="form-check-input" type="radio"  id="phaseComplete1" value="Yes"  v-model="phase.phase_completed"   required>Yes    
                     </label>
                     
                </div>
                   
                <div class="form-check-inline col-md-1">
                    <label style ="font-size:14pt" class="form-check-label" for="phaseComplete2">
                    <input class="form-check-input" type="radio"  id="phaseComplete2" value="No" v-model="phase.phase_completed" required>No
                    </label>
                </div>


                <div class="form-group col-md-2">
                    <label style ="font-size:14pt">Phase Status</label>
                    
                    <select  v-model="phase.phase_status_type" required> 
                     <option v-for="phase_status_type in phase_status_type" v-bind:key="phase_status_type">{{phase_status_type}}</option>
                    </select>
                   
                    
                </div>

                </div>
                <div class="form-group row">
                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseBudget">Phase Cost</label>
                    <input  type="number" class="form-control" id="inputPhaseBudget" placeholder="10000" min="1" max="99999999" v-model="phase.phase_cost" required>
                    
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseEstimatedDuration">Phase Estimated Duration</label>
                    <input  type="text" class="form-control" id="inputPhaseEstimatedDuration" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,25}" v-model="phase.phase_estimated_duration" >
                    
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseActualDuration">Phase Actual Duration</label>
                    <input  type="text" class="form-control" id="inputPhaseActualDuration" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,25}" v-model="phase.phase_actual_duration" >
                    
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhasePercentComplete">Phase % Done</label>
                    <input  type="number" class="form-control" id="inputPhasePercentComplete" placeholder="50" min="0" max="100" v-model="phase.phase_percent_complete" >
                   <br>
                </div>
                </div>

                <div class="form-group row">
                

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt">Phase Start Date*</label>
                    <input type="date" class="form-control" v-model="phase.phase_start_date" required>
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt">Phase Estimated End Date</label>
                    <input type="date" class="form-control" v-model="phase.phase_estimated_end_date" >
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt">Phase Actual End Date</label>
                    <input type="date" class="form-control" v-model="phase.phase_actual_end_date" >
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
                //retrieving data from the client_form schema getting the data 
                errors: [],
                phase: {
                   project_number: '',
                   phase_number: '',
                   phase_name: '',
                   phase_description: '',
                   phase_completed: '',
                   phase_cost: '',
                   phase_estimated_duration: '',
                   phase_actual_duration: '',
                   phase_percent_complete: '',
                   phase_start_date:'',
                   phase_estimated_end_date: '',
                   phase_actual_end_date: '',
                   phase_status_type: '',
                   

                },
                //static data for dropdown lists
                phase_status_type: ['Complete', 'In-Progress', 'On-Hold', 'Not-Started'],
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.phase.phase_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/phase';
                
                axios.post(apiURL, this.phase).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewPhase')
                  this.phase = {
                   project_number: '',
                   phase_number: '',
                   phase_name: '',
                   phase_description: '',
                   phase_completed: '',
                   phase_cost: '',
                   phase_estimated_duration: '',
                   phase_actual_duration: '',
                   phase_percent_complete: '',
                   phase_start_date:'',
                   phase_estimated_end_date: '',
                   phase_actual_end_date: '',
                   phase_status_type: '',
                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>