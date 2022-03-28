<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold; margin-top:-35px">Subcontractor Assigned Intake Form</h1>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">All Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">

                <div  class="form-group col-lg-1">
                    <label style ="font-size:14pt; text-align:left;" for="inputSubcontractorAssignedNum">SUBID</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputSubcontractorAssignedNum" placeholder="10000" pattern="[0-9]{5,5}" v-model="subcontractor_assigned.subid" required>
                    
                </div>

                <div class="form-group col-lg-1">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepAssignedProjectNum">STEPID</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputStepAssignedProjectNum" placeholder="10000" pattern="[0-9]{5,5}" v-model="subcontractor_assigned.stepid" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputFName" pattern="[A-Za-z\s]{0,40}" v-model="subcontractor_assigned.subcontractor_firstname" required>

                </div>
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputLName" pattern="[A-Za-z\s]{0,40}" v-model="subcontractor_assigned.subcontractor_lastname" required>
                    
                </div>

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputSubcontractorProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputSubcontractorProjectNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="subcontractor_assigned.project_number" required>
                    
                </div>

                 <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Subcontractor Assigned Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="subcontractor_assigned.subcontractor_assigned_date" required>
                    <br>
                </div>

                </div>

                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputSubcontractorRate">Step Cost</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputSubcontractorRate" placeholder="$10,000.50"   pattern="[$\0-9\.]{1,15}" v-model="subcontractor_assigned.subcontractor_assigned_cost" required>
                    
                </div>

                <div style="margin-left:20px" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label pt-0">Subcontractor Paid</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                
               
          
                <div class="form-check-inline col-lg-0">
                     <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorPaid1">
                     <input class="form-check-input" type="radio" id="SubcontractorPaid1" value="Yes"  v-model="subcontractor_assigned.subcontractor_assigned_paid"   required>Yes    
                     </label>
                </div>
             
                <div  class="form-check-inline col-lg-0">
                    <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorPaid2">
                    <input class="form-check-input" type="radio"  id="SubcontractorPaid2" value="No"  v-model="subcontractor_assigned.subcontractor_assigned_paid" required>No
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
                     <button class="btn btn-danger mt-3" style ="font-size:14pt; margin-left:0px;">Create</button>
               
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
                subcontractor_assigned: {
                   subcontractor_firstname: '',
                   subcontractor_lastname:'',
                   project_number: '',
                   subcontractor_assigned_date: '',
                   subcontractor_assigned_cost: '',
                   subcontractor_assigned_paid: '',
                   subid: '',
                   stepid: '',
                   
                   

                },
                //static data for dropdown lists
               
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.subcontractor_assigned.subcontractor_firstname){

                    this.errors.push("Pass Letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/subcontractor_assigned';
                
                axios.post(apiURL, this.subcontractor_assigned).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewSubcontractorAssigned')
                  this.subcontractor_assigned = {
                   subcontractor_firstname: '',
                   subcontractor_lastname:'',
                   project_number: '',
                   subcontractor_assigned_date: '',
                   subcontractor_assigned_cost: '',
                   subcontractor_assigned_paid: '',
                   subid: '',
                   stepid: '',

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>