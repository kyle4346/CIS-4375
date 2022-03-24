<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold; margin-top: -35px">Update Task Intake Form</h1>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleUpdateForm">
                
               <div class="form-group row">
                
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputTaskProjectNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="task.project_number" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskPhaseNum">Phase Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputTaskPhaseNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="task.phase_number" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskStepNum">Step Number</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputTaskStepNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="task.step_number" required>
                    
                </div>

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskNum">Task Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputTaskNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="task.task_number" required>
                </div>

                <div class="form-group col-lg-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskName">Task Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputTaskName" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,75}" v-model="task.task_name" required>
                    <br>
                </div> 

                </div>

                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt" for="inputTaskNotes">Task Details*</label>
                    <textarea type="text" class="form-control" id="inputTaskNotes" minlength="0" maxlength="255"   rows="3" v-model="task.task_description" required></textarea>
                <br>
                </div>

                <div class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label col-lg-auto pt-0">Task Completed?</label>
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
                

                
                <div class="form-group col-lg-2">
                   
                    <label style ="font-size:14pt">Task Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="task.task_status_type" required> 
                     <option v-for="task_status_type in task_status_type" v-bind:key="task_status_type">{{task_status_type}}</option>
                    </select>
                </div>

               

                <div class="form-group col-lg-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskDuration">Task Duration</label>
                    <input  type="text" class="form-control" id="inputTaskDuration" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,25}" v-model="task.task_duration" >
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskPercentComplete">Task % Done</label>
                    <input  type="number" class="form-control" id="inputTaskPercentComplete" placeholder="50" min="0" max="100" v-model="task.task_percent_complete" >
                </div>


                </div>

                <div class="form-group row">
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Task Start Date</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="task.task_start_date" required>
                    
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Task End Date</label>
                    <input type="date" class="form-control" v-model="task.task_end_date" >
                     <br>
                </div>

                <div class="form-group col-lg-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputTaskMaterial">Task Material</label>
                    <input  type="text" class="form-control" id="inputTaskMaterial" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{0,75}" v-model="task.task_material" >
                </div> 

                <div class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label col-lg-auto pt-0">Task Material Aquired?</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                <br>
                <div style="margin-left: 20px;" class="form-check-inline col-lg-auto">
                     <label style ="font-size:14pt" class="form-check-label" for="taskMaterial1">
                     <input class="form-check-input" type="radio"  id="taskMaterial1" value="Yes"  v-model="task.task_material_aquired"   >Yes    
                     </label>
                     
                </div>
                   
                <div style="margin-left: 40px;" class="form-check-inline col-lg-auto">
                    <label style ="font-size:14pt" class="form-check-label" for="taskMaterial2">
                    <input class="form-check-input" type="radio"  id="taskMaterial2" value="No" v-model="task.task_material_aquired" >No
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
                <button class="btn btn-danger mt-3" style ="font-size:14pt">Update</button>
                



               
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
            task: { 



            },//drop down lists found from createcomponent, unchanged of course
             //static data for dropdown lists
                 task_status_type: ['Complete', 'In-Progress', 'On-Hold', 'Not-Started'],
                
        }

    },
    created() {//Edits based on the client ID already entered
        let apiURL = `http://localhost:27017/task/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.task = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.task.task_name){

                    this.errors.push("Pass letters only.");

            }
            let apiURL = `http://localhost:27017/task/${this.$route.params.id}`;
            //pulls from back end of client ID to get all data pertaining to client
            axios.put(apiURL, this.task).then((res) => {
                console.log(res)
                this.$router.push('/viewTask')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
        }
    }
}
</script>