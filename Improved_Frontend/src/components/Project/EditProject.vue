<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold; margin-top:-35px;">Update Project Intake Form</h1>
            <strong style ="font-size:150%;">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleUpdateForm">
                
               <div class="form-group row">
                <div class="form-group col-lg-1">
                    <label style ="font-size:14pt; text-align:left;" for="inputProject">PSID</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputProject" placeholder="10000" pattern="[0-9]{5,5}" v-model="project.psid" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputProjectNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="project.project_number" required>
                    
                </div>

                <div class="form-group col-lg-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectName">Project Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputProjectName" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,75}" v-model="project.project_name" required>
                    
                </div>
        

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt" for="inputProjectNotes">Project Details</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <textarea type="text" class="form-control" id="inputProjectNotes" minlength="0" maxlength="45"   rows="3" v-model="project.project_information" required></textarea>
                    <br>
                   
                </div>

                <div class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label col-lg-auto pt-1">Project Completed?</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                <br>
                
                <div class="form-check-inline col-lg-auto">
                     <label style ="font-size:14pt" class="form-check-label" for="projectComplete1">
                     <input class="form-check-input" type="radio"  id="projectComplete1" value="Yes"  v-model="project.project_completed"   required>Yes    
                     </label>
                     
                </div>
                   
                <div class="form-check-inline col-lg-auto">
                    <label style ="font-size:14pt" class="form-check-label" for="projectComplete2">
                    <input class="form-check-input" type="radio"  id="projectComplete2" value="No" v-model="project.project_completed" required>No
                    </label>
                </div>
                </div>

                <div style="margin-left:-20px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectBudget">Project Budget</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputProjectBudget" placeholder="$25,000.50" size="12"  pattern="[$\0-9\.]{1,15}" v-model="project.project_budget" required>
                    
                </div>

                </div>

                <div class="form-group row">
        
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimate">Project Estimated Cost</label>
                    <input  type="text" class="form-control" id="inputProjectEstimate" placeholder="$45,000.50" size="12"  pattern="[$\0-9\.]{1,15}" v-model="project.project_estimated_cost" >
                    
                    
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectActual">Project Actual Cost</label>
                    <input  type="text" class="form-control" id="inputProjectActual" placeholder="$35,000.50" size="12"  pattern="[$\0-9\.]{1,15}" v-model="project.project_actual_cost" >
                    
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimatedDuration">Project Estimated Duration</label>
                    <input  type="text" class="form-control" id="inputProjectEstimatedDuration" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,25}" v-model="project.project_estimated_duration" >
                    
                </div>

                 <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectActualDuration">Project Actual Duration</label>
                    <input  type="text" class="form-control" id="inputProjectActualDuration" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,25}" v-model="project.project_actual_duration" >
                    

                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectPercentComplete">Project % Done</label>
                    <input  type="number" class="form-control" id="inputProjectPercentComplete" placeholder="50" min="0" max="100" v-model="project.project_percent_complete" >
                   
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Project Start Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="project.project_start_date" required>
                    <br>
                </div>


                </div>

                <div class="form-group row">

                <div   class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Project Estimated End Date</label>
                    <input type="date" class="form-control" v-model="project.project_estimated_end_date" >
                </div>

                <div style="margin-left:20px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Project Actual End Date</label>
                    <input type="date" class="form-control" v-model="project.project_actual_end_date" >
                    <br>
                    
                </div>

                <div style="margin-left:20px;" class="form-group col-lg-2">
                    
                    <label style ="font-size:14pt">Project Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    
                    <select  v-model="project.project_status_type" required> 
                     <option v-for="project_status_type in project_status_types" v-bind:key="project_status_type">{{project_status_type}}</option>
                    </select>
                    
                </div>

                <div style="margin-left:-50px;"  class="form-group col-lg-2">
                    
                    <label  style ="font-size:14pt">Project Type</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    
                    <select  v-model="project.project_type_description" required> 
                     <option v-for="project_type_description in project_type_descriptions" v-bind:key="project_type_description">{{project_type_description}}</option>
                    </select>
                    
                </div>

                <div class="form-group col-lg-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectLocationName">Project Location Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputProjectLocationName" pattern="[A-Za-z\s]{5,55}" v-model="project.project_location_name" required>
                </div>

                </div>

                <strong style ="font-size:150%">Project Location General Information</strong>
                
                <div >
                <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            
                </div>
                
                <div class="form-group row">
                    
                 <div class="form-group col-lg-4">
                    
                    <label style ="font-size:14pt" >Address</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" class="form-control" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,50}"   v-model="project.project_location_street" required>
                   
                </div>

                <div style="margin-left: 10px;" class="form-group col-lg-2">
                    
                    <label style ="font-size:14pt" >City</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" class="form-control" pattern="[A-Za-z]{3,40}" v-model="project.project_location_city" required>
                    
                </div>

                <div style="margin-left: 10px;" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">Zipcode</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="zip" class="form-control" pattern="[0-9]{5}" v-model="project.project_location_zipcode" required>
                      
                      <br>
                </div>

                 <div  style="margin-left: 10px;" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">State</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    
                    <select  v-model="project.project_location_state" required> 
                     <option v-for="project_location_state in project_location_states" v-bind:key="project_location_state">{{project_location_state}}</option>
                    </select>
                    
                    
                </div>

                <div style="margin-left: -30px;" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">Country</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    
                    <select  v-model="project.project_location_country" required> 
                     <option v-for="project_location_country in project_location_countries" v-bind:key="project_location_country">{{project_location_country}}</option>
                    </select>
                    
                    
                    
                </div>

                <div style="margin-left:40px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Location Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    
                    <select  v-model="project.project_location_status_type" required> 
                     <option v-for="project_location_status_type in project_location_status_types" v-bind:key="project_location_status_type">{{project_location_status_type}}</option>
                    </select>
                   
                </div>

                </div>

                  <div >
                         <button class="btn btn-danger mt-3" style ="font-size:14pt">Update</button>
                  </div>


               





                    <br>
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error"> {{error}} </li>
                    </ul>
                    </p>


               
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
            project: { 



            },//drop down lists found from createcomponent, unchanged of course
            //static data for dropdown lists
                project_location_states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                project_location_countries:['United States'],
                project_status_types:['complete', 'in-progress', 'on-hold', 'not-started'],
                project_type_descriptions:['Exterior-Based','All-Around','Minor-Maintenance', 'Build-from-Scratch'],
                project_location_status_types: ['Available', 'Unavailable', 'Unknown'],
                
        }

    },
    created() {//Edits based on the client ID already entered
        let apiURL = `http://localhost:27017/project/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.project = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.project.project_name){

                    this.errors.push("Pass letters only.");

            }
            let apiURL = `http://localhost:27017/project/${this.$route.params.id}`;
            //pulls from back end of client ID to get all data pertaining to client
            axios.put(apiURL, this.project).then((res) => {
                console.log(res)
                this.$router.push('/viewProject')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
        }
    }
}
</script>