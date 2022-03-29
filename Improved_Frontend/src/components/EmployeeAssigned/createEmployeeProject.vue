<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold; margin-top:-35px">Employee Assigned</h1>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">All Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
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

                <div class="form-group col-lg-auto">
                    
                    <label style ="font-size:14pt">Email</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" size="25" v-model="employee_assigned.employee_email" required>
                    
                </div>

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputEmployeeProjectNum" placeholder="1-99" pattern="[0-9]{1,9}" v-model="employee_assigned.project_number" required>
                    
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
                employee_assigned: {
                   employee_firstname: '',
                   employee_lastname:'',
                   project_number: '',
                   employee_assigned_date: '',
                   employee_email:''
                  
                },
                //static data for dropdown lists
               
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.employee_assigned.employee_firstname){

                    this.errors.push("Pass Letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/employee_assigned';
                
                axios.post(apiURL, this.employee_assigned).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewEmployeeAssigned')
                  this.employee_assigned = {
                   employee_firstname: '',
                   employee_lastname:'',
                   project_number: '',
                   employee_assigned_date: '',
                   employee_email:''

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>