<template>
    <div class="row justify-content-center"> 
        <div class="col-md-8"> 
            <h3 class="text-center" style="font-size:200%; font-weight:bold">Task Intake Form</h3>
            <br>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <strong style ="font-size:150%">General Information</strong>
                <br>
                <br>
                <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
                <br>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskProjectNum">Project Number*</label>
                    <input  type="text" class="form-control" id="inputTaskProjectNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="task.project_number" required>
                    
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskPhaseNum">Phase Number*</label>
                    <input  type="text" class="form-control" id="inputTaskPhaseNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="task.phase_number" required>
                    
                </div>

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskStepNum">Step Number*</label>
                    <input  type="text" class="form-control" id="inputTaskStepNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="task.step_number" required>
                    <br>
                </div>

                </div>
        

                <div class="form-group row">

                <div class="form-group col-md-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskNum">Task Number*</label>
                    <input  type="text" class="form-control" id="inputTaskNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="task.task_number" required>
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskName">Task Name*</label>
                    <input  type="text" class="form-control" id="inputTaskName" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,75}" v-model="task.task_name" required>
                </div> 

                 <div class="form-group col-md-4">
                    <label style ="font-size:14pt" for="inputTaskNotes">Task Details*</label>
                    <textarea type="text" class="form-control" id="inputTaskNotes" minlength="0" maxlength="255"   rows="3" v-model="task.task_description" required></textarea>
                <br>
                </div>
                </div>

                <div class="form-group row">
            
                <legend style ="font-size:14pt" class="col-form-label col-md-4 pt-0">Is Task Completed?*</legend>

                

                
                <div class="form-group col-md-3">
                   
                    <label style ="font-size:14pt">Task Status*</label>
                    
                    <select  v-model="task.task_status_type" required> 
                     <option v-for="task_status_type in task_status_type" v-bind:key="task_status_type">{{task_status_type}}</option>
                    </select>
                </div>

               

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskDuration">Task Duration</label>
                    <input  type="text" class="form-control" id="inputTaskDuration" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,25}" v-model="task.task_duration" >
                </div>

                </div>

                <div class="form-group row">

                <div class="form-check-inline col-md-1">
                     <label style ="font-size:14pt" class="form-check-label" for="taskComplete1">
                     <input class="form-check-input" type="radio"  id="taskComplete1" value="Yes"  v-model="task.task_completed"   required>Yes    
                     </label>
                     
                </div>
                   
                <div class="form-check-inline col-md-1">
                    <label style ="font-size:14pt" class="form-check-label" for="taskComplete2">
                    <input class="form-check-input" type="radio"  id="taskComplete2" value="No" v-model="task.task_completed" required>No
                    </label>
                    <br>
                    <br>
                </div>

                </div>

                <div class="form-group row">
               
                <div class="form-group col-md-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskPercentComplete">Task % Done</label>
                    <input  type="number" class="form-control" id="inputTaskPercentComplete" placeholder="50" min="0" max="100" v-model="task.task_percent_complete" >
                </div>

                <div class="form-group col-md-1">

                </div>

                <div class="form-group col-md-3">
                    <label style ="font-size:14pt">Task Start Date*</label>
                    <input type="date" class="form-control" v-model="task.task_start_date" required>
                    
                </div>

                <div class="form-group col-md-1">

                </div>

                <div class="form-group col-md-3">
                    <label style ="font-size:14pt">Task End Date</label>
                    <input type="date" class="form-control" v-model="task.task_end_date" >
                     <br>
                </div>

                </div>

                <div class="form-group row">
                  <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskMaterial">Task Material</label>
                    <input  type="text" class="form-control" id="inputTaskMaterial" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,75}" v-model="task.task_material" >
                </div> 

                <div class="form-group col-md-1">

                </div>

                <legend style ="font-size:14pt" class="col-form-label col-md-4 pt-0">Task Material Aquired?*</legend>

               

                </div>

                <div class="form-group row">
                <div class="form-group col-md-4">

                </div>

                <div class="form-group col-md-1">

                </div>


                <div class="form-check-inline col-md-1">
                     <label style ="font-size:14pt" class="form-check-label" for="taskMaterial1">
                     <input class="form-check-input" type="radio"  id="taskMaterial1" value="Yes"  v-model="task.task_material_aquired"   >Yes    
                     </label>
                     
                </div>
                   
                <div class="form-check-inline col-md-1">
                    <label style ="font-size:14pt" class="form-check-label" for="taskMaterial2">
                    <input class="form-check-input" type="radio"  id="taskMaterial2" value="No" v-model="task.task_material_aquired" >No
                    </label>
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
                task: {
                   project_number: '',
                   phase_number: '',
                   step_number: '',
                   task_number: '',
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
                   

                },
                //static data for dropdown lists
                task_status_type: ['Complete', 'In-Progress', 'On-Hold', 'Not-Started'],
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
                   task_number: '',
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