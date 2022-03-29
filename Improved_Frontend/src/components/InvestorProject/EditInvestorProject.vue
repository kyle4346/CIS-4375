<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <h1 class="text-center" style="font-size:200%; font-weight:bold; margin-top:-35px">Update Investor Assigned</h1>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">All Fields with * are Required</p>
            <form @submit.prevent="handleUpdateForm">
                
                 
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
            investor_assigned: { 



            },//drop down lists found from createcomponent, unchanged of course
            //static data for dropdown lists
                
                
        }

    },
    created() {//Edits based on the client ID already entered
        let apiURL = `http://localhost:27017/investor_assigned/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.investor_assigned = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.investor_assigned.project_number){

                    this.errors.push("Pass Numbers only.");

            }
            let apiURL = `http://localhost:27017/investor_assigned/${this.$route.params.id}`;
            //pulls from back end of client ID to get all data pertaining to client
            axios.put(apiURL, this.investor_assigned).then((res) => {
                console.log(res)
                this.$router.push('/viewInvestorAssigned')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
        }
    }
}
</script>