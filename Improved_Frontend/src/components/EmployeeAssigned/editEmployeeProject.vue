<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold; margin-top:-35px">Update Employee Assigned Intake Form</h1>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">All Fields with * are Required</p>
            <form @submit.prevent="handleUpdateForm">
                
                 
                <div class="form-group row">

               <div   class="form-group col-lg-1">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeAssignedNum">EMPID</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputEmployeeAssignedNum" placeholder="10000" pattern="[0-9]{5,5}" v-model="employee_assigned.empid" required>
                    
                </div>

                <div class="form-group col-lg-1">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeAssignedProjectNum">PSID</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputEmployeeAssignedProjectNum" placeholder="10000" pattern="[0-9]{5,5}" v-model="employee_assigned.psid" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeFName">First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputEmployeeFName" pattern="[A-Za-z\s]{2,30}" v-model="employee_assigned.employee_firstname" required>

                </div>
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeLName">Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputEmployeeLName" pattern="[A-Za-z\s]{2,30}" v-model="employee_assigned.employee_lastname" required>
                    
                </div>

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputEmployeeProjectNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="employee_assigned.project_number" required>
                    
                </div>

                 <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Employee Assigned Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="employee_assigned.employee_assigned_date" required>
                    
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
            employee_assigned: { 



            },//drop down lists found from createcomponent, unchanged of course
            //static data for dropdown lists
                
                
        }

    },
    created() {//Edits based on the client ID already entered
        let apiURL = `http://localhost:27017/employee_assigned/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.employee_assigned = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.employee_assigned.employee_firstname){

                    this.errors.push("Pass Letters only.");

            }
            let apiURL = `http://localhost:27017/employee_assigned/${this.$route.params.id}`;
            //pulls from back end of client ID to get all data pertaining to client
            axios.put(apiURL, this.employee_assigned).then((res) => {
                console.log(res)
                this.$router.push('/viewEmployeeAssigned')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
        }
    }
}
</script>