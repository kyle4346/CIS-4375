<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
        <div style="margin-left:525px; margin-top: -50px">
             <u class="text-center" style="font-size:200%; font-weight:bold;">Create Step</u>
        </div>
            <strong style ="font-size:150%">Step General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
               <div class="form-group row">
            
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepProjectNum">Project Number</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right"  type="text" class="form-control" id="inputStepProjectNum" placeholder="1-99999" pattern="[0-9]{1,5}" v-model="step.project_number" required>
                    
                </div>

                <div style="margin-left:20px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Phase</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select  v-model="step.phase_number" required> 
                     <option v-for="phase_number in phase_numbers" v-bind:key="phase_number">{{phase_number}}</option>
                    </select>
                </div>

                <div style="margin-left:100px;" class="form-group col-lg-2">
                     <label style ="font-size:14pt">Step</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select  v-model="step.step_number" required> 
                     <option v-for="step_number in step_numbers" v-bind:key="step_number">{{step_number}}</option>
                    </select>

                   
                    
                </div>


                

                </div>
        
                <div class="form-group row">

                     <div  style="margin-left:0px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt" for="inputStepNotes">Comments</label>
                    <textarea type="text" class="form-control" id="inputStepNotes" placeholder="Additional Notes" minlength="0" maxlength="35"   rows="3" v-model="step.step_description" ></textarea>
                <br>
                </div>
                
                <div  style="margin-left:20px;" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label col-lg-auto pt-0">Completed?</label>
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


                <div style=" margin-left:-50px" class="form-group col-lg-3">
                    <label style ="font-size:14pt">Status</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select  v-model="step.step_status_type" required> 
                     <option v-for="step_status_type in step_status_type" v-bind:key="step_status_type">{{step_status_type}}</option>
                    </select>
            
                </div>

                <div style="margin-left:-180px" class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepBudget">Cost</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right" type="text" class="form-control" id="inputStepBudget" placeholder="$4,000.00"  pattern="[$][0-9]{1,3}[,][0-9]{3}[.][0-9]{2}" v-model="step.step_cost" required>
                    
                </div>

                 <div style=" margin-right:20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepDuration">Duration (days)</label>
                    <input style="text-align:right" type="text" placeholder="3" class="form-control" size="10" id="inputStepDuration" pattern="[0-9]{0,2}" v-model="step.step_duration" >
                    
                </div>

                <div  style=" margin-left:-20px" class="form-group col-lg-2">
                    <label style ="font-size:14pt">% Finished</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select  v-model="step.step_percent_complete" required> 
                     <option v-for="step_percent_complete in step_percent_completes" v-bind:key="step_percent_complete" :value="step_percent_complete">{{step_percent_complete}}</option>
                    </select>
                    <br>
                    <br>
                    
                </div>

                </div>

                
                <div class="form-group row">
            
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Start Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="step.step_start_date" required>
                </div>

                <div  style="margin-left:20px " class="form-group col-lg-auto">
                    <label style ="font-size:14pt">End Date</label>
                    <input type="date" class="form-control" v-model="step.step_end_date" >
                    <br>
                </div>
                </div>

                <div class="form-group row">
                    <strong style ="font-size:150%"> Subcontractor Assignment Information</strong>
                    <br>
                    
                    <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    
                    <input  type="text" class="form-control" id="inputFName" placeholder="Charles" pattern="[A-Za-z\s]{0,35}" v-model="step.subcontractor_fname" >

                </div>
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    
                    <input  type="text" class="form-control" id="inputLName" placeholder="Vaughn" pattern="[A-Za-z\s]{0,35}" v-model="step.subcontractor_lname" >
                    
                </div>
                    <div class="form-group col-lg-3">
                    
                    <label style ="font-size:14pt">Email</label>
                    
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" v-model="step.subcontractor_email" >
                    <br>
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Assignment Date</label>
                    <input type="date" class="form-control" v-model="step.subcontractor_assigned_date" >
                    
                </div>
                
                </div>

                 <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputSubcontractorRate">Subcontractor Fee</label>
                   
                    <input style="text-align:right" type="text" class="form-control" id="inputSubcontractorRate" placeholder="$2,500.50"    pattern="[$][0-9]{1,3}[,][0-9]{3}[.][0-9]{2}" v-model="step.subcontractor_fee" >
                    
                </div>

                 <div style="margin-left:20px" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label pt-0">Subcontractor Paid </label> 
                
               
          
                <div class="form-check-inline col-lg-0">
                     <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorPaid1">
                     <input class="form-check-input" type="radio" id="SubcontractorPaid1" value="Yes"  v-model="step.subcontractor_paid"   >Yes    
                     </label>
                </div>
             
                <div  class="form-check-inline col-lg-0">
                    <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorPaid2">
                    <input class="form-check-input" type="radio"  id="SubcontractorPaid2" value="No"  v-model="step.subcontractor_paid" >No
                    </label>

                </div>
                
                </div>

                 </div>


                


                    <br>
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error"> {{error}} </li>
                    </ul>
                    </p>


            
                 <button class="btn btn-danger mt-3" style ="font-size:14pt; margin-bottom:0px">Create</button>
           

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
                step: {
                   project_number: '',
                   phase_number: '',
                   step_number: '',
                   step_name: '',
                   step_description: '',
                   step_completed: 'No',
                   step_cost: '',
                   step_duration: '',
                   step_percent_complete: '0%',
                   step_start_date:'',
                   step_end_date: '',
                   step_status_type: 'Not-Started',
                   subcontractor_fname:'',
                   subcontractor_lname:'',
                   subcontractor_email:'',
                   subcontractor_assigned_date:'',
                   subcontractor_fee:'',
                   subcontractor_paid:'',
                   
                   

                },
                //static data for dropdown lists
                step_status_type: ['Complete', 'In-Progress', 'On-Hold', 'Not-Started'],
                phase_numbers:['1. Plans and Permitting','2. Site Work and Foundation','3. Framing and External Finishes','4. Utility Rough-Ins','5. Insulation, Drywall & Paint',
                '6. Interior Finishes and Flooring','7. Landscaping and Grounds Work','8. Final Inspection and Walkthrough'],
                step_numbers:['1. General Conditions','2. Apply for Permits','3. Site Work','4. Foundation','5. Framing','6. Roofing','7. Exterior Finishes','8. Rough-in plumbing','9. Rough-in electrical','10. Rough-in HVAC','11. Rough-in communication - phone, cable, computer, alarm',
                '12. Insulation','13. Drywall','14. Paint and Wallpaper','15. Cabinets','16. Finish Plumbing','17. Finish Electrical','18. Finish HVAC','19. Carpet, Tile and Appliances','20. Grounds Work','21. Landscaping ','22. Inspection','23. Walkthrough'],
                step_percent_completes:['0%','25%','50%','75%','100%']
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
                   subcontractor_fname:'',
                   subcontractor_lname:'',
                   subcontractor_email:'',
                   subcontractor_assigned_date:'',
                   subcontractor_fee:'',
                   subcontractor_paid:'',
                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>