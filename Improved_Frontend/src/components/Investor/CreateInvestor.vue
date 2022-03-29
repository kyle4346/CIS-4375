<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            
        <div style="margin-left:525px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold;">Create Investor </u>
       </div>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputFName" placeholder="Mark" pattern="[A-Za-z\s]{0,40}" v-model="investor.investor_fname" required>

                </div>
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputLName"  placeholder="Richards" pattern="[A-Za-z\s]{0,40}" v-model="investor.investor_lname" required>
                    
                </div>

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt" for="inputShortNotes">Investor Comments</label>
                    <textarea type="text" class="form-control" id="inputShortNotes" minlength="0" maxlength="35"   rows="1" v-model="investor.investor_detail" ></textarea>
                    <br>
                </div>

                <div class="form-group col-lg-auto">
        
                    <label style ="font-size:14pt">Investor Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="investor.investor_status" required> 
                     <option v-for="investor_status in investor_status" v-bind:key="investor_status">{{investor_status}} </option>
                    </select>
                    
                </div>

                <div class="form-group col-lg-auto">
                    
                   
                    <label style ="font-size:14pt">Investor Type</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="investor.investor_type" required> 
                     <option v-for="investor_type in investor_type" v-bind:key="investor_type">{{investor_type}}</option>
                    </select>
                    
                </div>

                
                 </div>

                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestorProjectNum">Project Number</label>
                    <input   type="text" class="form-control" id="inputInvestorProjectNum" placeholder="1-99" pattern="[0-9]{1,2}" v-model="investor.project_number" >
                    
                </div>

                <div class="form-group col-lg-auto">
                    
                    <label style ="font-size:14pt">Email</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" size="25" v-model="investor.investor_email" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt">Phone</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="tel" class="form-control" placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="investor.investor_phone" required>
                    
                </div>

                 <div class="form-group col-lg-4">
                    <label style ="font-size:14pt" >Address</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" class="form-control" placeholder="Apt#123 street address" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,50}"   v-model="investor.investor_address" required>
                    <br>
                </div>

                 </div>

                <div class="form-group row">

                     <div class="form-group col-lg-2">
                    <label style ="font-size:14pt" >City</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" class="form-control" placeholder="Dallas" pattern="[A-Za-z]{5,35}" v-model="investor.investor_city" required>
                    
                </div> 

                <div class="form-group col-lg-auto">
                
                </div>

                <div class="form-group col-lg-auto">
                    
                    <label style ="font-size:14pt">State</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="investor.investor_state" required> 
                     <option v-for="state in states" v-bind:key="state">{{state}}</option>
                    </select>
                   
                </div>

                
                <div class="form-group col-lg-auto">
                
                </div>

                <div class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">Zip Code</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="zip" class="form-control" pattern="[0-9]{5}" v-model="investor.investor_zipcode" required>
                      
                </div>
 
                <div class="form-group col-lg-auto">
                
                </div>

                 <div class="form-group col-lg-2">
                    
                    <label style ="font-size:14pt">Country</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="investor.investor_country" required> 
                     <option v-for="country in countries" v-bind:key="country">{{country}}</option>
                    </select>
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
                investor: {
                   investor_fname: '',
                   investor_lname: '',
                   investor_detail: '',
                   investor_phone: '',
                   investor_email: '',
                   investor_address: '',
                   investor_city: '',
                   investor_zipcode: '',
                   investor_state: '',
                   investor_country:'',
                   investor_status: '',
                   investor_type: '',
                   project_number: '',
                   isid:''
                   

                },
                //static data for dropdown lists
                states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                countries:['United States'],
                investor_status: ['Pending', 'Processing', 'Complete'],
                investor_type:['Bank','Entrepreneur','Worker','Family/Friend'],
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.investor.investor_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/investor';
                
                axios.post(apiURL, this.investor).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewInvestor')
                  this.investor = {
                   investor_fname: '',
                   investor_lname: '',
                   investor_detail: '',
                   investor_phone: '',
                   investor_email: '',
                   investor_address: '',
                   investor_city: '',
                   investor_zipcode: '',
                   investor_state: '',
                   investor_country:'',
                   investor_status: '',
                   investor_type: '',
                   project_number: '',
                   isid:''

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>