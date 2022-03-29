<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold; margin-top:-35px">Investor Assigned</h1>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">All Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputFName" pattern="[A-Za-z\s]{0,40}" v-model="investor_assigned.investor_firstname" required>

                </div>
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputLName" pattern="[A-Za-z\s]{0,40}" v-model="investor_assigned.investor_lastname" required>
                    
                </div>

                 <div  class="form-group col-lg-3">
                    
                    <label style ="font-size:14pt">Email</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" size="25" v-model="investor_assigned.investor_email" required>
                    
                </div>

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestorProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputInvestorProjectNum" placeholder="1-99" pattern="[0-9]{1,9}" v-model="investor_assigned.project_number" required>
                    
                </div>

                 <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Investor Assigned Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="investor_assigned.investor_assigned_date" required>
                    <br>
                </div>

                

                </div>

                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestmentRate">Investment Amount</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputInvestmentRate" placeholder="$20,000.50"   pattern="[$\0-9\.]{1,15}" v-model="investor_assigned.investor_assigned_cost" required>
                    
                </div>

                <div style="margin-left:20px" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label pt-0">Investor Paid</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                <br>
                <!--<div class="col-sm-10"> -->
          
                <div class="form-check-inline col-lg-0">
                     <label  style ="font-size:14pt" class="form-check-label" for="InvestorPaid1">
                     <input class="form-check-input" type="radio" id="InvestorPaid1" value="Yes"  v-model="investor_assigned.investor_assigned_paid"   required>Yes    
                     </label>
                </div>
             
                <div  class="form-check-inline col-lg-0">
                    <label  style ="font-size:14pt" class="form-check-label" for="InvestorPaid2">
                    <input class="form-check-input" type="radio"  id="InvestorPaid2" value="No"  v-model="investor_assigned.investor_assigned_paid" required>No
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
                investor_assigned: {
                   investor_firstname: '',
                   investor_lastname:'',
                   project_number: '',
                   investor_assigned_date: '',
                   investor_assigned_cost: '',
                   investor_assigned_paid: '',
                   investor_email:''
                   
                   
                   

                },
                //static data for dropdown lists
               
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.investor_assigned.project_number){

                    this.errors.push("Pass Numbers only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/investor_assigned';
                
                axios.post(apiURL, this.investor_assigned).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewInvestorAssigned')
                  this.investor_assigned = {
                   investor_firstname: '',
                   investor_lastname:'',
                   project_number: '',
                   investor_assigned_date: '',
                   investor_assigned_cost: '',
                   investor_assigned_paid: '',
                   investor_email:''

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>