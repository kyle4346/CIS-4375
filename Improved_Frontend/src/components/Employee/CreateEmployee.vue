<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold">Employee Intake Form</h1>
            <strong style ="font-size:150%">General Information</strong>
            <br>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <br>
                <br>
                <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
                <br>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">Employee First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputFName" pattern="[A-Za-z\s]{1,30}" v-model="employee.employee_first_name" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Employee Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputLName"  pattern="[A-Za-z\s]{1,30}" v-model="employee.employee_last_name" required>
                    
                </div>

                <div class="form-group col-lg-1">
                <label style ="font-size:14pt" class="col-form-label pt-0">Gender</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                <br>
                
          
                <div class="form-check-inline col-lg-2">
                     <label  style ="font-size:14pt" class="form-check-label" for="Gender1">
                     <input class="form-check-input" type="radio" id="Gender1" value="Male"  v-model="employee.employee_gender"   required>Male    
                     </label>
                </div>
             
                <div style="margin-left:25px;" class="form-check-inline col-lg-2">
                    <label  style ="font-size:14pt" class="form-check-label" for="Gender2">
                    <input class="form-check-input" type="radio"  id="Gender2" value="Female"  v-model="employee.employee_gender" required>Female
                    </label>
                </div>

                <br>
                <br>

                </div>

                <div style="margin-left:25px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Employee Title</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <select  v-model="employee.employee_title_description" required> 
                     <option v-for="employee_title_description in employee_title_description" v-bind:key="employee_title_description">{{employee_title_description}}</option>
                    </select>
                    
                </div>

                <div style="margin-left:-70px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Employee Status</label>
                   <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <select  v-model="employee.employee_status_type" required> 
                     <option v-for="employee_status_type in employee_status_type" v-bind:key="employee_status_type">{{employee_status_type}}</option>
                    </select> 
                </div>

                <div style="margin-left:-60px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Employee Salary</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" class="form-control" placeholder="$65,000.50"   pattern="[$\0-9\.]{1,15}" v-model="employee.employee_salary" required>  
                </div>

                </div>

                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt">Employee Phone</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="tel" class="form-control"  placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="employee.employee_phone" required>
                </div>

                <div class="form-group col-lg-auto">
                    
                    <label style ="font-size:14pt">Employee Email</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" size="25" v-model="employee.employee_email" required>
                    
                </div>

                <div class="form-group col-lg-4">
                    <label style ="font-size:14pt" >Address</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" class="form-control" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,50}"   v-model="employee.employee_street" required>
                    
                </div>

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt" >City</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" class="form-control" pattern="[A-Za-z]{5,35}" v-model="employee.employee_city" required>
                    
                     <br>
                     
                </div>


                
                </div>

                 <div class="form-group row"> 

                <div class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">State</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <select  v-model="employee.employee_state" required> 
                     <option v-for="employee_state in employee_state" v-bind:key="employee_state">{{employee_state}}</option>
                    </select>
                    
                    
                </div>
                    
                <div style="margin-left:-10px" class="form-group col-lg-1">
                    <label style ="font-size:14pt">Zipcode</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="zip" class="form-control" pattern="[0-9]{5}" v-model="employee.employee_zipcode" required>
                     
                </div>

                 <div style="margin-left:20px" class="form-group col-lg-2">
                    
                    <label style ="font-size:14pt">Country</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="employee.employee_country" required> 
                     <option v-for="employee_country in employee_country" v-bind:key="employee_country">{{employee_country}}</option>
                    </select>
                    
                </div>

                <div style="margin-left:-60px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="EmployeeinputProjectNum">Project Number</label>
                    <input  type="number" class="form-control" id="EmployeeinputProjectNum" placeholder="10000" min="0" max="999999" v-model="employee.project_number" >
                    
                </div>

                 <div  style="margin-left:20px" class="form-group col-lg-1">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeAssignedNum">EMPID</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputEmployeeAssignedNum" placeholder="10000" pattern="[0-9]{5,5}" v-model="employee.empid" required>
                    
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
                employee: {
                   employee_first_name: '',
                   employee_last_name: '',
                   employee_gender: '',
                   employee_salary: '',
                   employee_phone: '',
                   employee_email: '',
                   employee_street: '',
                   employee_city: '',
                   employee_zipcode: '',
                   employee_state: '',
                   employee_country: '',
                   employee_status_type: '',
                   employee_title_description: '',
                   project_number:'',
                   empid:'',
                   
                },
                //static data for dropdown lists
                employee_state:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','lg',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                employee_country:['United States'],
                employee_status_type: ['Active', 'Inactive', 'Unknown'],
                employee_title_description:['Owner','Supervisor','Manager','Coordinator'],
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.employee.employee_first_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/employee';
                
                axios.post(apiURL, this.employee).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewEmployee')
                  this.employee = {
                   employee_first_name: '',
                   employee_last_name: '',
                   employee_gender: '',
                   employee_salary: '',
                   employee_phone: '',
                   employee_email: '',
                   employee_street: '',
                   employee_city: '',
                   employee_zipcode: '',
                   employee_state: '',
                   employee_country: '',
                   employee_status_type: '',
                   employee_title_description: '',
                   project_number:'',
                   empid: ''

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>