<template>
    <div class="row justify-content-center"> 
        <div style="" class="col-lg-12"> 
            <div style="margin-left:525px; margin-top: -50px" >
                <u class="text-center" style="font-size:200%; font-weight:bold; ">Create Project</u>
            </div>
            
            
            <strong style ="font-size:150%;">Project General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectNum">Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right;" type="text" class="form-control" id="inputProjectNum" placeholder="1-99999" pattern="[0-9]{1,5}" v-model="project.project_number" required>
                    
                </div>

                <div class="form-group col-lg-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectName">Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputProjectName" placeholder="Mario Custom Home" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,35}" v-model="project.project_name" required>
                    
                </div>
        

                 <div class="form-group col-lg-3">
                    <label style ="font-size:14pt" for="inputProjectNotes">Comments</label>
                    
                    <textarea type="text" class="form-control" id="inputProjectNotes" minlength="0" maxlength="45"  placeholder="Two-Story House"  rows="1" v-model="project.project_information" ></textarea>
                    <br>
                   
                </div>

                <div style="margin-left:20px;" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label col-lg-auto pt-1">Completed?</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                <br>
                
                <div class="form-check-inline col-lg-auto">
                     <label style ="font-size:14pt" class="form-check-label" for="projectComplete1">
                     <input class="form-check-input" type="radio"  id="projectComplete1" value="Yes"  v-model="project.project_completed"   required>Yes    
                     </label>
                     
                </div>
                   
                <div class="form-check-inline col-lg-auto">
                    <label style ="font-size:14pt" class="form-check-label" for="projectComplete2">
                    <input class="form-check-input" type="radio"  id="projectComplete2" value="No" v-model="project.project_completed"   required>No
                    </label>
                </div>
                </div>

                <div style="margin-left:-60px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectBudget">Budget</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right;" type="text" class="form-control" id="inputProjectBudget" placeholder="$25,000.50" size="12"  pattern="[$][0-9]{1,3}[,][0-9]{3}[.][0-9]{2}" v-model="project.project_budget" required>
                    
                </div>

                </div>

                <div class="form-group row">
        
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimate">Estimated Cost</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <input  style="text-align:right;" type="text" class="form-control" id="inputProjectEstimate" placeholder="$45,000.50" size="12"  pattern="[$][0-9]{1,3}[,][0-9]{3}[.][0-9]{2}" v-model="project.project_estimated_cost" required>
                    
                    
                </div>

                <div style="margin-left:10px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectActual">Actual Cost</label>
                    <input  style="text-align:right;" type="text" class="form-control" id="inputProjectActual" placeholder="$35,000.50" size="12"  pattern="[$][0-9]{1,3}[,][0-9]{3}[.][0-9]{2}" v-model="project.project_actual_cost" >
                    
                </div>

                 <div  style="margin-left: 10px;" class="form-group col-lg-3">
                    
                    <label style ="font-size:14pt">Estimated Duration (Months)</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="project.project_estimated_duration" required> 
                     <option v-for="project_estimated_duration in project_estimated_durations" v-bind:key="project_estimated_duration"  >{{project_estimated_duration}}</option>
                    </select>
                    
                </div>

                <div  style="margin-left:-60px;" class="form-group col-lg-3">
                    
                    <label style ="font-size:14pt">Actual Duration (Months)</label>
                    <br>
                    <select  v-model="project.project_actual_duration" > 
                     <option v-for="project_actual_duration in project_actual_durations" v-bind:key="project_actual_duration"  >{{project_actual_duration}}</option>
                    </select>
                    
                </div>

                

                 

                <div style="margin-left:-80px;" class="form-group col-lg-2">
                    
                    <label style ="font-size:14pt">% Finished</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="project.project_percent_complete" required> 
                     <option v-for="project_percent_completed in project_percent_completes" v-bind:key="project_percent_completed" :value="project_percent_completed">{{project_percent_completed}}</option>
                    </select>
                    
                </div>

                <div style="margin-left:-85px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Start Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="project.project_start_date" required>
                    <br>
                </div>


                </div>

                <div class="form-group row">

                <div   class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Estimated End Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <input type="date" class="form-control" v-model="project.project_estimated_end_date" required>
                </div>

                <div style="margin-left:20px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Actual End Date</label>
                    <input type="date" class="form-control" v-model="project.project_actual_end_date" >
                    <br>
                    
                </div>

                 <div style="margin-left:30px;"  class="form-group col-lg-2">
                    
                    <label  style ="font-size:14pt">Type</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="project.project_type_description" required> 
                     <option v-for="project_type_description in project_type_descriptions" v-bind:key="project_type_description">{{project_type_description}}</option>
                    </select>
                    <br>
                    <br>
                    <br>
                    
                </div>

                <div style="margin-left:-10px;" class="form-group col-lg-2">
                    
                    <label style ="font-size:14pt">Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="project.project_status_type" required> 
                     <option v-for="project_status_type in project_status_types" v-bind:key="project_status_type">{{project_status_type}}</option>
                    </select>
                    
                </div>

               
               
                </div>

                <div class="form-group row">
                    <strong style ="font-size:150%">Project Location General Information</strong>
                    <br>
                    <br>
                 <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt" >Address</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" size="59" class="form-control" placeholder="Street Address, Apt # 123" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,55}"   v-model="project.project_location_street" required>
                   
                </div>

                <div style="margin-left: 0px;" class="form-group col-lg-auto">
                    
                    <label style ="font-size:14pt" >City</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" size="23" class="form-control" placeholder="Fresno" pattern="[A-Za-z\s]{3,35}" v-model="project.project_location_city" required>
                    
                </div>

                <div style="margin-left: 0px;" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">Zip Code</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right;" type="zip" class="form-control" placeholder="XXXXX" pattern="[0-9]{5}" v-model="project.project_location_zipcode" required>
                      
                      <br>
                </div>

                 <div  style="margin-left: 0px;" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">State</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    
                    <select  v-model="project.project_location_state" required> 
                     <option v-for="project_location_state in project_location_states" v-bind:key="project_location_state" :value="project_location_state" >{{project_location_state}}</option>
                    </select>
                    
                    
                </div>

                <div style="margin-left: -35px;" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">Country</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    
                    <select  v-model="project.project_location_country" required> 
                     <option v-for="project_location_country in project_location_countries" v-bind:key="project_location_country" :value="project_location_country">{{project_location_country}}</option>
                    </select>
                    
                    
                    
                </div>

                <div style="margin-left:30px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Location Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    
                    <select  v-model="project.project_location_status_type" required> 
                     <option v-for="project_location_status_type in project_location_status_types" v-bind:key="project_location_status_type">{{project_location_status_type}}</option>
                    </select>
                   
                </div>

                </div>

                  <div >
                         <button class="btn btn-danger mt-3" style ="font-size:14pt; margin-bottom: 1px;">Create</button>
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
                //retrieving data from the client_form schema getting the data 
                errors: [],
                project: {
                   project_number: '',
                   project_name: '',
                   project_information: '',
                   project_completed: 'No',
                   project_budget: '',
                   project_estimated_cost: '',
                   project_actual_cost: '',
                   project_estimated_duration: '',
                   project_actual_duration:'',
                   project_percent_complete: '0%',
                   project_start_date: '',
                   project_estimated_end_date: '',
                   project_actual_end_date: '',
                   project_status_type: '',
                   project_type_description: '',
                   project_location_street: '',
                   project_location_city: '',
                   project_location_zipcode: '',
                   project_location_state: 'TX' ,
                   project_location_country: 'United States',
                   project_location_status_type: '',
                   
                   

                },
                //static data for dropdown lists
                project_estimated_durations:['0-3','4-6','7-12','13-24', '25 >'],
                project_actual_durations:['0-3','4-6','7-12','13-24', '25 >'],
                project_location_states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                project_location_countries:['United States'],
                project_percent_completes:['0%','25%','50%','75%','100%'],
                project_status_types:['Complete', 'In-Progress', 'On-Hold', 'Not-Started','Cancelled'],
                project_type_descriptions:['Remodeling','Minor Maintenance', 'New Construction'],
                project_location_status_types: ['Available', 'Unavailable'],
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
                   project_completed: 'No',
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
                   project_location_street: '',
                   project_location_city: '',
                   project_location_zipcode: '',
                   project_location_state: '' ,
                   project_location_country: '',
                   project_location_status_type: '',
                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>