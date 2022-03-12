<template>
    <div class="row justify-content-center"> 
        <div class="col-md-8"> 
            <h3 class="text-center" style="font-size:200%; font-weight:bold">Project Intake Form</h3>
            <br>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <strong style ="font-size:150%">General Information</strong>
                <br>
                <br>
                <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
                <br>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectNum">Project Number*</label>
                    <input  type="text" class="form-control" id="inputPhaseProjectNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="project.project_number" required>
                    
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectName">Project Name*</label>
                    <input  type="text" class="form-control" id="inputProjectName" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,75}" v-model="project.project_name" required>
                    
                </div>
        

                 <div class="form-group col-md-4">
                    <label style ="font-size:14pt" for="inputProjectNotes">Project Details</label>
                    <textarea type="text" class="form-control" id="inputProjectNotes" minlength="0" maxlength="255"   rows="3" v-model="project.project_information" ></textarea>
                    <br>
                   
                </div>

            
                </div>

                <div class="form-group row">

                <legend style ="font-size:14pt" class="col-form-label col-md-auto pt-0">Is Project Completed?*</legend>

                <div class="form-check-inline col-md-1">
                     <label style ="font-size:14pt" class="form-check-label" for="projectComplete1">
                     <input class="form-check-input" type="radio"  id="projectComplete1" value="Yes"  v-model="project.project_completed"   required>Yes    
                     </label>
                     
                </div>
                   
                <div class="form-check-inline col-md-1">
                    <label style ="font-size:14pt" class="form-check-label" for="projectComplete2">
                    <input class="form-check-input" type="radio"  id="projectComplete2" value="No" v-model="project.project_completed" required>No
                    </label>
                </div>

                <div class="form-group col-md-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectBudget">Project Budget*</label>
                    <input  type="number" class="form-control" id="inputProjectBudget" placeholder="10000" min="1" max="99999999" v-model="project.project_budget" required>
                    
                </div>
                

                <div class="form-group col-md-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimate">Project Estimated Cost</label>
                    <input  type="number" class="form-control" id="inputProjectEstimate" placeholder="10000" min="0" max="99999999" v-model="project.project_estimated_cost" >
                    
                    <br>
                </div>


                </div>


                <div class="form-group row">
                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectActual">Project Actual Cost</label>
                    <input  type="number" class="form-control" id="inputProjectActual" placeholder="10000" min="0" max="99999999" v-model="project.project_actual_cost" >
                    
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimatedDuration">Project Estimated Duration</label>
                    <input  type="text" class="form-control" id="inputProjectEstimatedDuration" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,25}" v-model="project.project_estimated_duration" >
                    
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectActualDuration">Project Actual Duration</label>
                    <input  type="text" class="form-control" id="inputProjectActualDuration" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,25}" v-model="project.project_actual_duration" >
                    

                    <br>
                </div>


                </div>

                <div class="form-group row">
                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectPercentComplete">Project % Done</label>
                    <input  type="number" class="form-control" id="inputProjectPercentComplete" placeholder="50" min="0" max="100" v-model="project.project_percent_complete" >
                   
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt">Project Start Date*</label>
                    <input type="date" class="form-control" v-model="project.project_start_date" required>
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt">Project Estimated End Date</label>
                    <input type="date" class="form-control" v-model="project.project_estimated_end_date" >
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt">Project Actual End Date</label>
                    <input type="date" class="form-control" v-model="project.project_actual_end_date" >
                    <br>
                    
                </div>

                </div>

                <div class="form-group row">
                <div class="form-group col-md-2">
                    
                    <label style ="font-size:14pt">Project Status</label>
                    
                    <select  v-model="project.project_status_type" > 
                     <option v-for="project_status_type in project_status_types" v-bind:key="project_status_type">{{project_status_type}}</option>
                    </select>
                    
                </div>

                 <div class="form-group col-md-3">
                    
                    <label style ="font-size:14pt">Project Type</label>
                    
                    <select  v-model="project.project_type_description" > 
                     <option v-for="project_type_description in project_type_descriptions" v-bind:key="project_type_description">{{project_type_description}}</option>
                    </select>
                    
                </div>

                <div class="form-group col-md-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectLocationName">Project Location Name*</label>
                    <input  type="text" class="form-control" id="inputProjectLocationName" pattern="[A-Za-z\s]{5,55}" v-model="project.project_location_name" required>

                    <br>
                   
                </div>
                </div>

                



                <strong style ="font-size:150%">Project Location General Information</strong>
                
                <div >
                    <br>
                <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            
                </div>
                
                <div class="form-group row">
                    
                 <div class="form-group col-md-5">
                    
                    <label style ="font-size:14pt" >Address*</label>
                    <input type="text" class="form-control" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,50}"   v-model="project.project_location_street" required>
                   
                </div>

                <div class="form-group col-md-3">
                    
                    <label style ="font-size:14pt" >City*</label>
                    <input type="text" class="form-control" pattern="[A-Za-z]{3,40}" v-model="project.project_location_city" required>
                    
                </div>

                <div class="form-group col-md-2">
                    
                    <label style ="font-size:14pt">Zipcode*</label>
                    <input type="zip" class="form-control" pattern="[0-9]{5}" v-model="project.project_location_zipcode" required>
                      
                      <br>
                </div>

                </div>

                <div class="form-group row">
                <div class="form-group col-md-1">
                    
                    <label style ="font-size:14pt">State*</label>
                    
                    <select  v-model="project.project_location_state" required> 
                     <option v-for="project_location_state in project_location_states" v-bind:key="project_location_state">{{project_location_state}}</option>
                    </select>
                    
                    
                </div>

                <div class="form-group col-md-2">
                    
                    <label style ="font-size:14pt">Country*</label>
                    
                    <select  v-model="project.project_location_country" required> 
                     <option v-for="project_location_country in project_location_countries" v-bind:key="project_location_country">{{project_location_country}}</option>
                    </select>
                    
                    
                    
                </div>

                

                <div class="form-group col-md-3">
                    <label style ="font-size:14pt">Project Location Status*</label>
                    
                    <select  v-model="project.project_location_status_type" required> 
                     <option v-for="project_location_status_type in project_location_status_types" v-bind:key="project_location_status_type">{{project_location_status_type}}</option>
                    </select>
                   
                    <br>
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
                project: {
                   project_number: '',
                   project_name: '',
                   project_information: '',
                   project_completed: '',
                   project_budget: '',
                   project_estimated_cost: '',
                   project_actual_cost: '',
                   project_estimated_duration: '',
                   project_actual_duration:'',
                   project_percent_complete: '',
                   project_start_date: '',
                   project_estimated_end_date: '',
                   project_actual_end_date: '',
                   project_status_type: '',
                   project_type_description: '',
                   project_location_name: '',
                   project_location_street: '',
                   project_location_city: '',
                   project_location_zipcode: '',
                   project_location_state: '' ,
                   project_location_country: '',
                   project_location_status_type: ''
                   

                },
                //static data for dropdown lists
                project_location_states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                project_location_countries:['United States'],
                project_status_types:[' ','complete', 'in-progress', 'on-hold', 'not-started'],
                project_type_descriptions:[' ','Exterior-Based','All-Around','Minor-Maintenance', 'Build-from-Scratch'],
                project_location_status_types: ['Available', 'Unavailable', 'Unknown'],
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.project.project_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/project';
                
                axios.post(apiURL, this.project).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewProject')
                  this.project = {
                   project_number: '',
                   project_name: '',
                   project_information: '',
                   project_completed: '',
                   project_budget: '',
                   project_estimated_cost: '',
                   project_actual_cost: '',
                   project_estimated_duration: '',
                   project_actual_duration:'',
                   project_percent_complete: '',
                   project_start_date: '',
                   project_estimated_end_date: '',
                   project_actual_end_date: '',
                   project_status_type: '',
                   project_type_description: '',
                   project_location_name: '',
                   project_location_street: '',
                   project_location_city: '',
                   project_location_zipcode: '',
                   project_location_state: '' ,
                   project_location_country: '',
                   project_location_status_type: ''
                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>