<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold">Investor Assigned Intake Form</h1>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestorProjectNum">Project Number</label>
                    <input   type="text" class="form-control" id="inputInvestorProjectNum" placeholder="10000" pattern="[0-9]{1,9}" v-model="investor_assigned.project_number" >
                    
                </div>

                 <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Investor Assigned Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="investor_assigned.investor_assigned_date" required>
                    <br>
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestmentRate">Investment Amount</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputInvestmentRate" placeholder="$10,000.00" pattern="[a-zA-Z\d\s\-\,\#\.\$\+]+{5,25}" v-model="investor_assigned.investor_assigned_cost" required>
                    
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

                <div  style="margin-left:-70px" class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestorAssignedNum">ISID</label>
                    <input   type="text" class="form-control" id="inputInvestorAssignedNum" placeholder="10000" pattern="[0-9]{5,5}" v-model="investor_assigned.isid" >
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestorAssignedProjectNum">PSID</label>
                    <input   type="text" class="form-control" id="inputInvestorAssignedProjectNum" placeholder="10000" pattern="[0-9]{5,5}" v-model="investor_assigned.psid" >
                    
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
                   project_number: '',
                   investor_assigned_date: '',
                   investor_assigned_cost: '',
                   investor_assigned_paid: '',
                   isid: '',
                   psid: '',
                   
                   

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
                   project_number: '',
                   investor_assigned_date: '',
                   investor_assigned_cost: '',
                   investor_assigned_paid: '',
                   isid: '',
                   psid: '',

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>