<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
        <div style="margin-left:525px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold; margin-top:-35px">Update Phase </u>
         </div> 
            <strong style ="font-size:150%">General Information</strong>
             <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleUpdateForm">
                  <div class="form-group row">
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right"  type="text" class="form-control" id="inputPhaseProjectNum" placeholder="1-99999" pattern="[0-9]{1,5}" v-model="phase.project_number" required>
                    
                </div>

                <div style="margin-left:10px" class="form-group col-lg-2">

                    <label style ="font-size:14pt">Phase Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  style="font-size:20px"  v-model="phase.phase_number" required> 
                     <option v-for="phase_number in phase_numbers" v-bind:key="phase_number">{{phase_number}}</option>
                    </select>
                   
                </div>


                 <div style="margin-left:-60px" class="form-group col-lg-auto">

                    <label style ="font-size:14pt">Name (In-Order)</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select style="font-size:20px"  v-model="phase.phase_name" required> 
                     <option  v-for="phase_name in phase_names" v-bind:key="phase_name">{{phase_name}}</option>
                    </select>
                    
                </div>

                <div style="margin-left:0px" class="form-group col-lg-2">
                    <label style ="font-size:14pt" for="inputPhaseNotes">Comments</label>
                    <textarea type="text" class="form-control" placeholder="Additional Texts" id="inputPhaseNotes" minlength="0" maxlength="35"   rows="1" v-model="phase.phase_description" ></textarea>
                    <br>
                </div>
                
                <div style="margin-left:10px" class="form-group col-lg-3">
                <label style ="font-size:14pt" class="col-form-label col-lg-auto pt-0">Completed?</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                <br>

                <div class="form-check-inline col-lg-auto">
                     <label style ="font-size:14pt" class="form-check-label" for="phaseComplete1">
                     <input class="form-check-input" type="radio"  id="phaseComplete1" value="Yes"  v-model="phase.phase_completed"   required>Yes    
                     </label>
                     
                </div>
                   
                <div class="form-check-inline col-lg-auto">
                    <label style ="font-size:14pt" class="form-check-label" for="phaseComplete2">
                    <input class="form-check-input" type="radio"  id="phaseComplete2" value="No" v-model="phase.phase_completed" required>No
                    </label>
                    
                </div>


                </div>

                </div>
                
                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt">Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="phase.phase_status_type" required> 
                     <option v-for="phase_status_type in phase_status_type" v-bind:key="phase_status_type">{{phase_status_type}}</option>
                    </select>
                   
                    
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseBudget">Cost</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right"  type="text" class="form-control" id="inputPhaseBudget" placeholder="$6,000.00" pattern="[^$\0-9\,\.]{1,15}" v-model="phase.phase_cost" required>
                    
                </div>

                <div style="margin-left:20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseActualDuration">Duration (weeks)</label>
                    <input  style="text-align:right" size="2" type="text" class="form-control"  placeholder="12" id="inputPhaseActualDuration" pattern="[0-9]+{0,2}" v-model="phase.phase_actual_duration" >
                    
                </div>

                <div style="margin-left:20px" class="form-group col-lg-auto">

                    <label style ="font-size:14pt">% Finished</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select style="font-size:20px"  v-model="phase.phase_percent_complete" required> 
                     <option  v-for="phase_percent_complete in phase_percent_completes" v-bind:key="phase_percent_complete" :view="phase_percent_complete" >{{phase_percent_complete}}</option>
                    </select>
                    <br>
                    <br>
                    <br>
                   
                </div>
                
                </div>

                <div class="form-group row">
                

                <div  class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Start Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="phase.phase_start_date" required>
                </div>

                <div style="margin-left:20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Estimated End Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="phase.phase_estimated_end_date" >
                </div>

                <div style="margin-left:20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Actual End Date</label>
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
                <button class="btn btn-danger mt-3" style ="font-size:14pt">Update</button>
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
            phase: { 



            },//drop down lists found from createcomponent, unchanged of course
            //static data for dropdown lists
               phase_status_type: ['Complete', 'In-Progress', 'On-Hold', 'Not-Started'],
                phase_numbers:['1','2','3','4','5','6','7','8'],
                phase_percent_completes:['0%','25%','50%','75%','100%'],
                phase_names:['Plans and Permitting','Site Work and Foundation','Framing and External Finishes','Utility Rough-Ins',
                'Insulation, Drywall & Paint','Interior Finishes and Flooring','Landscaping and Grounds Work','Final Inspection and Walkthrough',]
        }

    },
    created() {//Edits based on the client ID already entered
        let apiURL = `http://localhost:27017/phase/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.phase = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.phase.phase_name){

                    this.errors.push("Pass letters only.");

            }
            let apiURL = `http://localhost:27017/phase/${this.$route.params.id}`;
            //pulls from back end of client ID to get all data pertaining to client
            axios.put(apiURL, this.phase).then((res) => {
                console.log(res)
                this.$router.push('/viewPhase')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
        }
    }
}
</script>