<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <div style="margin-left:525px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold;">Create Task</u>
            </div>

            <strong style ="font-size:150%">Task General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right" size="10" type="text" class="form-control" id="inputTaskProjectNum" placeholder="1-99999" pattern="[0-9]{1,5}" v-model="task.project_number" required>
                    
                </div>

                <div style="margin-left:10px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Phase</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select  v-model="task.phase_number" required> 
                     <option v-for="phase_number in phase_numbers" v-bind:key="phase_number">{{phase_number}}</option>
                    </select>
                </div>

                <div style="margin-left:90px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Step</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select  v-model="task.step_number" required> 
                     <option v-for="step_number in step_numbers" v-bind:key="step_number">{{step_number}}</option>
                    </select>
                </div>

                

                <div style="margin-left:260px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskName">Task</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input placeholder="1. Secure foundation permit" type="text" size="37" class="form-control" id="inputTaskName" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,75}" v-model="task.task_name" required>
                    <br>
                </div> 

                </div>

                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt" for="inputTaskNotes">Comments</label> 
                    <textarea type="text" class="form-control" id="inputTaskNotes" minlength="0" placeholder="Additional Notes" maxlength="35"   rows="1" v-model="task.task_description" ></textarea>
                <br>
                </div>

                <div style="margin-left: 20px;" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label col-lg-auto pt-0">Completed?</label>
                 <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                 <br>
                 <div style="margin-left: 10px;" class="form-check-inline col-lg-auto">
                     <label style ="font-size:14pt" class="form-check-label" for="taskComplete1">
                     <input class="form-check-input" type="radio"  id="taskComplete1" value="Yes"  v-model="task.task_completed"   required>Yes    
                     </label>
                     
                </div>
                   
                <div class="form-check-inline col-lg-auto">
                    <label style ="font-size:14pt" class="form-check-label" for="taskComplete2">
                    <input class="form-check-input" type="radio"  id="taskComplete2" value="No" v-model="task.task_completed" required>No
                    </label>
                
        
                </div>

                 </div>
                
                <div style="margin-left:-30px;" class="form-group col-lg-2">
                   
                    <label style ="font-size:14pt">Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="task.task_status_type" required> 
                     <option v-for="task_status_type in task_status_type" v-bind:key="task_status_type">{{task_status_type}}</option>
                    </select>
                </div>

               

                <div style="margin-left:-60px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskDuration">Duration (hours)</label>
                    <input style="text-align: right" type="text" placeholder="4" size="2" class="form-control" id="inputTaskDuration" pattern="[0-9]+{0,3}" v-model="task.task_duration" >
                </div>

                <div style="margin-left:20px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">% Finished</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select  v-model="task.task_percent_complete" required> 
                     <option v-for="task_percent_complete in task_percent_completes" v-bind:key="task_percent_complete" :view="task_percent_complete">{{task_percent_complete}}</option>
                    </select>
                    <br>
                    <br>
                </div>


                </div>

                <div class="form-group row">
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Start Date</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="task.task_start_date" required>
                    
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">End Date</label>
                    <input type="date" class="form-control" v-model="task.task_end_date" >
                     <br>
                </div>

                

                <div class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label col-lg-auto pt-0">Material Aquired</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                <br>
                <div style="margin-left: 20px;" class="form-check-inline col-lg-auto">
                     <label style ="font-size:14pt" class="form-check-label" for="taskMaterial1">
                     <input class="form-check-input" type="radio"  id="taskMaterial1" value="Yes"  v-model="task.task_material_aquired"   required>Yes    
                     </label>
                     
                </div>
                   
                <div style="margin-left: 40px;" class="form-check-inline col-lg-auto">
                    <label style ="font-size:14pt" class="form-check-label" for="taskMaterial2">
                    <input class="form-check-input" type="radio"  id="taskMaterial2" value="No" v-model="task.task_material_aquired" required>No
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
                task: {
                   project_number: '',
                   phase_number: '',
                   step_number: '',
                   task_name: '',
                   task_description: '',
                   task_completed: 'No',
                   task_duration: '',
                   task_percent_complete: '0%',
                   task_start_date: '',
                   task_end_date: '',
                   task_material: '',
                   task_material_aquired: 'No',
                   task_status_type: 'Not-Started',
                   

                },
                //static data for dropdown lists
                task_status_type: ['Complete', 'In-Progress', 'On-Hold', 'Not-Started'],
                phase_numbers:['1. Plans and Permitting','2. Site Work and Foundation','3. Framing and External Finishes','4. Utility Rough-Ins','5. Insulation, Drywall & Paint',
                '6. Interior Finishes and Flooring','7. Landscaping and Grounds Work','8. Final Inspection and Walkthrough'],
                step_numbers:['1. General Conditions','2. Apply for Permits','3. Site Work','4. Foundation','5. Framing','6. Roofing','7. Exterior Finishes','8. Rough-in plumbing','9. Rough-in electrical','10. Rough-in HVAC','11. Rough-in communication - phone, cable, computer, alarm',
                '12. Insulation','13. Drywall','14. Paint and Wallpaper','15. Cabinets','16. Finish Plumbing','17. Finish Electrical','18. Finish HVAC','19. Carpet, Tile and Appliances','20. Grounds Work','21. Landscaping ','22. Inspection','23. Walkthrough'],
                task_numbers:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'],
                task_percent_completes:['0%','25%','50%','75%','100%']
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.task.task_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/task';
                
                axios.post(apiURL, this.task).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewTask')
                  this.task = {
                   project_number: '',
                   phase_number: '',
                   step_number: '',
                   task_name: '',
                   task_description: '',
                   task_completed: '',
                   task_duration: '',
                   task_percent_complete: '',
                   task_start_date: '',
                   task_end_date: '',
                   task_material: '',
                   task_material_aquired: '',
                   task_status_type: '',
                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>