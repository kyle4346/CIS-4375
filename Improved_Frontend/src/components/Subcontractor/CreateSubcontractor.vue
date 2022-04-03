<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
        <div style="margin-left:525px; margin-top: -50px">
             <u class="text-center" style="font-size:200%; font-weight:bold;">Create Subcontractor</u>
        </div>
            <strong style ="font-size:150%">General Information</strong>
            <form @submit.prevent="handleSubmitForm">
                
               <div class="form-group row">
            
                <p style="color:red; font-size:125%; font-weight:bold">All Fields with * are Required</p>

                <br>
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputFName" placeholder="Chase" pattern="[A-Za-z\s]{1,25}" v-model="subcontractor.subcontractor_fname" required>
                </div>

                <div style="margin-left:20px" class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" placeholder="Williams" id="inputLName" pattern="[A-Za-z\s]{5,25}" v-model="subcontractor.subcontractor_lname" required>
                    
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt" for="inputShortNotes">Comments</label>
                    <textarea  type="text" class="form-control" placeholder="Additional Notes" id="inputShortNotes"  minlength="0" maxlength="55"   rows="1" v-model="subcontractor.subcontractor_detail" ></textarea>
                    <br>
                </div>

            
                 <div   style="margin-left:20px;" class="form-group col-lg-2">
                    
                    
                    <label style ="font-size:14pt">Type</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="subcontractor.subcontractor_type" required> 
                     <option v-for="subcontractor_type in subcontractor_types" v-bind:key="subcontractor_type">{{subcontractor_type}}</option>
                    </select>
                  
                    <br>
                    <br>
                    <br>
                </div>

                <div style="margin-left:-40px;" class="form-group col-lg-2">
                    
                    
                    <label style ="font-size:14pt; margin-left:0px;">Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold "> * </label>
                    <br>
                    
                    <select style="margin-left:0px;" v-model="subcontractor.subcontractor_status" required> 
                     <option v-for="subcontractor_status in subcontractor_statuses" v-bind:key="subcontractor_status">{{subcontractor_status}}</option>
                    </select>
                    
                    
                </div>
               
                 </div>

            
                <div class="form-group row">
                
                <div style=" margin-left:-0px" class="form-group col-lg-3">
                    <label style ="font-size:14pt; text-align:left;" for="inputTrade">Business Name</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputTrade" placeholder="ABC Plumbing" pattern="[A-Za-z\s]{5,55}" v-model="subcontractor.subcontractor_business_name" required>
                    
                </div>
                 

                 <!--Work on this below -->
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputSRate">Pay Rate (/hr)</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  style="text-align:right" type="text" class="form-control" id="inputSRate" placeholder="$100" pattern="[^$\0-9\]{2,25}" v-model="subcontractor.subcontractor_rate" required>
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt">Phone</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="tel" class="form-control"  placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="subcontractor.subcontractor_phone" required>
                     
                </div>

                <div class="form-group col-lg-3">
                    
                    <label style ="font-size:14pt">Email</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" v-model="subcontractor.subcontractor_email" required>
                    <br>
                </div>

                </div>

                <div class="form-group row">
                <div class="form-group col-lg-4">
                    <label style ="font-size:14pt" >Address</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" class="form-control" placeholder="Street Address, Apt # 123" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,50}"   v-model="subcontractor.subcontractor_address" required>
                    
                </div>
                
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt" >City</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" class="form-control" placeholder="Houston" pattern="[A-Za-z\s]{2,35}" v-model="subcontractor.subcontractor_city" required>
                    
                     
                </div>

                <div class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">State</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <select  v-model="subcontractor.subcontractor_state" required> 
                     <option v-for="state in states" v-bind:key="state" :value="state">{{state}}</option>
                    </select>
                    
                    
                </div>

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt">Zip Code</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right" type="zip" class="form-control" placeholder="XXXXX" pattern="[0-9]{5}" v-model="subcontractor.subcontractor_zipcode" required>
                     
                </div>

                <div class="form-group col-lg-2">
                    
                    <label style ="font-size:14pt">Country</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    
                    <select  v-model="subcontractor.subcontractor_country" required> 
                     <option v-for="country in countries" v-bind:key="country" :value="country">{{country}}</option>
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
                <button class="btn btn-danger mt-3" style ="font-size:14pt">Create</button>
               
                



               
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
                subcontractor: {
                   subcontractor_fname: '',
                   subcontractor_lname: '',
                   subcontractor_gender:'',
                   subcontractor_business_name: '',
                   subcontractor_rate: '',
                   subcontractor_phone: '',
                   subcontractor_email: '',
                   subcontractor_address: '',
                   subcontractor_city: '',
                   subcontractor_state: 'TX',
                   subcontractor_zipcode: '',
                   subcontractor_country: 'United States',
                   subcontractor_status:'',
                   subcontractor_type: '',
                   subcontractor_detail:''
                   
                  
                   
                   

                },
                //static data for dropdown lists
                states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                countries:['United States'],
                subcontractor_statuses: ['Available', 'Unavailable', 'Working','Unknown'],
                subcontractor_types:['General','Site Excavation', 'Concrete','Framing', 'Insulation','Drywall','Painting','Carpentry','Electric',
                'Plumbing','Electrical','Masonry','Heating and AC','Flooring','Appliance','Fencing','Landscape','Maid Service','Roofing','Other'],
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.subcontractor.subcontractor_fname){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/subcontractor';
                
                axios.post(apiURL, this.subcontractor).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewSubcontractor')
                  this.investor = {
                   subcontractor_fname: '',
                   subcontractor_lname: '',
                   subcontractor_gender:'',
                   subcontractor_business_name: '',
                   subcontractor_rate: '',
                   subcontractor_phone: '',
                   subcontractor_email: '',
                   subcontractor_address: '',
                   subcontractor_city: '',
                   subcontractor_state: '',
                   subcontractor_zipcode: '',
                   subcontractor_country: '',
                   subcontractor_status:'',
                   subcontractor_type: '',
                   subcontractor_detail:''

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>